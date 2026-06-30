import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems } from "../../data/portfolio";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-blue/10 bg-white/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4 md:px-8">
        <a
          href="#home"
          className="text-base font-bold text-navy md:text-lg"
          onClick={handleNavClick}
        >
          Portfolio
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="rounded-md px-3 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-brand-blue/5 hover:text-brand-blue"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="rounded-md p-2 text-navy md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "메뉴 닫기" : "메뉴 열기"}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-brand-blue/10 bg-white px-5 py-3 md:hidden">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={handleNavClick}
                  className="block rounded-md px-3 py-2.5 text-sm font-medium text-gray-600"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
