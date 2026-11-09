import { ArrowOutward, ChatBubbleOutline } from "@mui/icons-material";

export default function Contact() {
  return (
    <section className="py-[82px] md:py-28" id="contact">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex min-h-0 flex-col items-start justify-between gap-7 rounded-[20px] border border-accent/20 bg-[radial-gradient(ellipse_at_85%_50%,rgba(197,244,103,0.1),transparent_43%),#121820] p-6 sm:p-8 md:min-h-[310px] md:flex-row md:items-center md:gap-9 md:p-[clamp(32px,6vw,72px)]">
          <div>
            <p className="font-mono text-[0.72rem] tracking-[0.08em] text-accent">
              HAVE A PROJECT IN MIND?
            </p>
            <h2 className="mt-4 font-display text-[clamp(2.3rem,10vw,3.3rem)] leading-[1.08] font-bold tracking-[-0.075em] md:text-[clamp(2.3rem,4.5vw,4rem)]">
              Let&apos;s make
              <br />
              something meaningful.
            </h2>
            <p className="mt-[18px] max-w-[480px] text-[0.95rem] leading-[1.75] text-muted">
              I&apos;m always happy to connect, exchange ideas, and explore
              what we could build together.
            </p>
          </div>
          <a
            className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-accent px-[19px] py-3 font-semibold text-[#11170a] transition-colors hover:bg-[#d7f69a]"
            href="https://www.linkedin.com/in/govardhan-annabathula-69330a257/"
            target="_blank"
            rel="noreferrer"
          >
            <ChatBubbleOutline fontSize="small" />
            Connect on LinkedIn
            <ArrowOutward fontSize="small" />
          </a>
        </div>
      </div>
    </section>
  );
}
