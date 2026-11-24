import puppeteer from 'puppeteer';
import {readFile, mkdir} from 'node:fs/promises';
import {existsSync} from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const output=path.resolve(process.argv[2] || path.join(root,'IT_인프라_포트폴리오.pdf'));
const executablePath=process.env.PUPPETEER_EXECUTABLE_PATH || ['C:/Program Files/Google/Chrome/Application/chrome.exe','C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe'].find(existsSync);
const browser=await puppeteer.launch({headless:true,executablePath,args:['--no-sandbox','--disable-setuid-sandbox']});
try {
 const page=await browser.newPage();
 await page.setViewport({width:794,height:1123,deviceScaleFactor:2});
 // Serve the built static site in memory, without changing its assets or requiring a preview server.
 await page.setRequestInterception(true);
 page.on('request', async req=>{
  const url=new URL(req.url());
  if(url.origin!=='http://portfolio.local') return req.continue();
  try {
   const filename=path.resolve(root,'dist','.'+decodeURIComponent(url.pathname==='/'?'/index.html':url.pathname));
   if(!filename.startsWith(path.join(root,'dist')+path.sep)) throw new Error('Invalid asset path');
   const type={'.html':'text/html','.js':'application/javascript','.css':'text/css','.svg':'image/svg+xml','.png':'image/png','.jpg':'image/jpeg'}[path.extname(filename)] || 'application/octet-stream';
   await req.respond({status:200,contentType:type,body:await readFile(filename)});
  }catch{await req.respond({status:404,body:'Not found'});}
 });
 await page.goto('http://portfolio.local/',{waitUntil:'networkidle0'});
 await page.emulateMediaType('print');
 await page.evaluate(async()=>{await document.fonts.ready;await Promise.all([...document.images].map(i=>i.decode().catch(()=>{})));});
 await mkdir(path.dirname(output),{recursive:true});
 await page.pdf({path:output,format:'A4',printBackground:true,preferCSSPageSize:true,tagged:true,scale:0.94});
 console.log(output);
} finally {await browser.close();}
