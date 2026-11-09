import { useState } from "react";
import { Close, Menu } from "@mui/icons-material";
import { Button, IconButton } from "@mui/material";

const links = [
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Main navigation">
        <a className="wordmark" href="#home" onClick={closeMenu}>
          GA<span>.</span>
        </a>
        <div className={`nav-links${menuOpen ? " is-open" : ""}`}>
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          ))}
          <Button
            component="a"
            href="#contact"
            variant="outlined"
            size="small"
            className="nav-cta"
            onClick={closeMenu}
          >
            Let&apos;s talk <span aria-hidden="true">↗</span>
          </Button>
        </div>
        <IconButton
          className="menu-toggle"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <Close /> : <Menu />}
        </IconButton>
      </nav>
    </header>
  );
}
