import puppeteer from "puppeteer";
import { spawn } from "node:child_process";
import { setTimeout as sleep } from "node:timers/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const outputPath = path.join(root, "portfolio.pdf");
const previewUrl = process.env.PORTFOLIO_URL ?? "http://127.0.0.1:4173";
const useLocalPreview = !process.env.PORTFOLIO_URL;

let previewProcess;

function startPreview() {
  return new Promise((resolve, reject) => {
    previewProcess = spawn(
      "npm",
      ["run", "preview", "--", "--host", "127.0.0.1", "--port", "4173"],
      {
        cwd: root,
        shell: true,
        stdio: ["ignore", "pipe", "pipe"],
      },
    );

    const onReady = (data) => {
      const text = String(data);
      if (text.includes("4173") || text.includes("Local")) {
        resolve();
      }
    };

    previewProcess.stdout.on("data", onReady);
    previewProcess.stderr.on("data", onReady);
    previewProcess.on("error", reject);

    setTimeout(() => reject(new Error("Preview server start timeout")), 20000);
  });
}

function stopPreview() {
  if (previewProcess) {
    previewProcess.kill();
    previewProcess = null;
  }
}

async function generatePdf() {
  try {
    if (useLocalPreview) {
      console.log("Building site...");
      await new Promise((resolve, reject) => {
        const build = spawn("npm", ["run", "build"], {
          cwd: root,
          shell: true,
          stdio: "inherit",
        });
        build.on("close", (code) =>
          code === 0 ? resolve() : reject(new Error("Build failed")),
        );
      });

      console.log("Starting preview server...");
      await startPreview();
      await sleep(2000);
    }

    console.log(`Generating PDF from ${previewUrl}`);

    const browser = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });

    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 900, deviceScaleFactor: 2 });
    await page.goto(previewUrl, {
      waitUntil: "networkidle0",
      timeout: 60000,
    });
    await page.evaluate(() => document.fonts.ready);
    await sleep(1500);

    await page.pdf({
      path: outputPath,
      format: "A4",
      printBackground: true,
      margin: {
        top: "10mm",
        right: "8mm",
        bottom: "10mm",
        left: "8mm",
      },
    });

    await browser.close();
    console.log(`PDF saved: ${outputPath}`);
  } finally {
    stopPreview();
  }
}

generatePdf().catch((error) => {
  stopPreview();
  console.error(error);
  process.exit(1);
});
