import ArrowOutward from "@mui/icons-material/ArrowOutward";

export default function Hero() {
  return (
    <section
      className="hero-backdrop relative flex min-h-[min(820px,100svh)] items-center overflow-hidden"
      id="home"
    >
      <div
        className="pointer-events-none absolute right-[4%] top-[15%] h-[460px] w-[460px] rounded-full bg-[#9dd35d]/10 blur-[115px]"
        aria-hidden="true"
      />
      <div className="relative mx-auto w-full max-w-6xl px-5 pt-20">
        <span className="inline-flex rounded-md border border-accent/25 bg-accent/[0.07] px-[10px] py-[7px] font-mono text-[0.64rem] tracking-[0.06em] text-accent">
          GRADUATE ENGINEER TRAINEE · DATA ENGINEERING
        </span>
        <h1 className="mt-7 font-display text-[clamp(3.2rem,7.5vw,6.8rem)] font-bold leading-[0.99] tracking-[-0.075em]">
          I build thoughtful
          <br />
          <span className="text-accent">digital experiences.</span>
        </h1>
        <p className="mt-7 max-w-[540px] text-[1.07rem] leading-[1.8] text-[#bac1bf]">
          I&apos;m Govardhan, a Graduate Engineer Trainee in Data Engineering
          at Surgevector, currently working on a hiring platform and
          continuing to build thoughtful experiences for the web.
        </p>
        <div className="mt-[34px] flex items-center gap-[27px]">
          <a
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-[19px] py-3 font-semibold text-[#11170a] transition-colors hover:bg-[#d7f69a]"
            href="#work"
          >
            Explore my work <ArrowOutward fontSize="small" />
          </a>
          <a
            className="text-[0.92rem] text-[#e4e9e5] transition-colors hover:text-accent"
            href="#contact"
          >
            Get in touch <span className="ml-[5px]" aria-hidden="true">↓</span>
          </a>
        </div>
        <div
          className="absolute -bottom-[125px] right-[25px] flex items-center gap-3 font-mono text-[0.72rem] text-[#adb6b4]"
          aria-hidden="true"
        >
          <span className="text-accent">01</span>
          <span className="h-px w-[75px] bg-white/35" />
          <span>04</span>
        </div>
      </div>
    </section>
  );
}
