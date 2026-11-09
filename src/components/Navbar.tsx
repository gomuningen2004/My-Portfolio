import { useState } from "react";
import { Close, Menu } from "@mui/icons-material";

const links = [
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#work" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="absolute inset-x-0 top-0 z-10 border-b border-white/10">
      <nav
        className="mx-auto flex h-[68px] w-[calc(100%-2.5rem)] max-w-6xl items-center justify-between sm:w-[calc(100%-4rem)] md:h-[76px]"
        aria-label="Main navigation"
      >
        <a
          className="font-display text-[1.45rem] font-extrabold tracking-[-0.08em]"
          href="#home"
          onClick={closeMenu}
        >
          GA<span className="text-accent">.</span>
        </a>
        <div
          className={`${menuOpen ? "flex" : "hidden md:flex"} absolute left-0 right-0 top-[67px] flex-col items-stretch gap-0 border-b border-white/10 bg-page/95 px-5 py-3 md:static md:flex-row md:items-center md:gap-[34px] md:border-0 md:bg-transparent md:p-0`}
        >
          {links.map((link, index) => (
            <a
              className={`py-3 text-sm text-[#d3d8d5] transition-colors hover:text-accent md:py-0 ${
                index < links.length - 1 ? "max-md:border-b max-md:border-white/10" : ""
              }`}
              key={link.href}
              href={link.href}
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}
          <a
            className="mt-3 inline-flex min-h-[38px] w-fit items-center gap-2 rounded-md border border-accent/50 px-4 py-[5px] text-sm font-semibold text-accent transition-colors hover:border-accent hover:bg-accent/10 md:mt-0"
            href="#contact"
            onClick={closeMenu}
          >
            Let&apos;s talk <span aria-hidden="true">↗</span>
          </a>
        </div>
        <button
          className="inline-flex items-center justify-center rounded-full p-2 text-white md:hidden"
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <Close fontSize="small" /> : <Menu fontSize="small" />}
        </button>
      </nav>
    </header>
  );
}
