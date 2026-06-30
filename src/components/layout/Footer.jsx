import { personal } from "../../data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-navy to-navy-light py-8 text-white">
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
          <p className="text-sm font-semibold">
            {personal.name} · IT Infrastructure Portfolio
          </p>
          <p className="text-xs text-white/60">
            © {year} {personal.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
