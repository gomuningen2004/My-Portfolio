import { ArrowUpward } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { socialLinks } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <a className="wordmark" href="#home" aria-label="Back to top">
          GA<span>.</span>
        </a>
        <p>Designed and built with care by Govardhan.</p>
        <div className="footer-socials" aria-label="Social profiles">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noreferrer"
              aria-label={social.label}
            >
              <img src={social.icon} alt="" />
            </a>
          ))}
        </div>
        <p className="copyright">© {new Date().getFullYear()} Govardhan</p>
        <IconButton
          component="a"
          href="#home"
          className="back-to-top"
          aria-label="Back to top"
        >
          <ArrowUpward />
        </IconButton>
      </div>
    </footer>
  );
}
