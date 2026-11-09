import { ArrowUpward } from "@mui/icons-material";
import { socialLinks } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex min-h-0 w-[calc(100%-2.5rem)] max-w-6xl flex-wrap items-center justify-between gap-5 py-6 sm:w-[calc(100%-4rem)] md:min-h-[90px] md:flex-nowrap md:py-0">
        <a
          className="font-display text-[1.45rem] font-extrabold tracking-[-0.08em]"
          href="#home"
          aria-label="Back to top"
        >
          GA<span className="text-accent">.</span>
        </a>
        <p className="w-[calc(100%-65px)] text-right text-xs text-[#899391] md:w-auto">
          Designed and built with care by Govardhan.
        </p>
        <div className="order-2 flex items-center gap-[17px]" aria-label="Social profiles">
          {socialLinks.map((social) => (
            <a
              className="grid h-[23px] w-[23px] place-items-center opacity-70 transition-opacity hover:opacity-100"
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noreferrer"
              aria-label={social.label}
            >
              <img className="h-[18px] w-[18px] brightness-0 invert" src={social.icon} alt="" />
            </a>
          ))}
        </div>
        <p className="order-3 ml-auto text-xs text-[#899391] md:ml-0">
          © {new Date().getFullYear()} Govardhan
        </p>
        <a
          className="order-4 -mr-2 inline-flex items-center justify-center rounded-full p-2 text-accent transition-colors hover:bg-accent/10"
          href="#home"
          aria-label="Back to top"
        >
          <ArrowUpward />
        </a>
      </div>
    </footer>
  );
}
