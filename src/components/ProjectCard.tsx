import { Code } from "@mui/icons-material";
import type { Project } from "../data/portfolio";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <article className="grid items-center overflow-hidden rounded-[17px] border border-[rgba(164,196,187,0.14)] bg-[radial-gradient(ellipse_at_12%_0%,rgba(197,244,103,0.055),transparent_50%),linear-gradient(135deg,#141b22,#10161c)] transition duration-200 hover:-translate-y-[3px] hover:border-accent/35 md:grid-cols-[minmax(0,0.88fr)_minmax(300px,1.12fr)]">
      <div
        className={`relative mx-3 mt-3 aspect-[2.08] max-h-none min-w-0 overflow-hidden rounded-[11px] border border-white/10 bg-[#0c1116] md:m-[18px] md:max-h-[250px] ${
          index % 2 === 1 ? "md:order-2" : ""
        }`}
      >
        <img
          className="block h-full w-full object-contain"
          src={project.image}
          alt={project.imageAlt}
        />
        <span className="absolute left-[15px] top-[15px] rounded-md border border-accent/30 bg-page/90 px-[11px] py-2 font-mono text-[0.78rem] text-[#d7f69a]">
          0{index + 1}
        </span>
      </div>
      <div className="p-5 md:p-[clamp(25px,4vw,52px)]">
        <p className="mb-[18px] flex items-center gap-[10px] font-mono text-[0.68rem] tracking-[0.08em] text-accent uppercase before:h-px before:w-[18px] before:bg-accent before:content-['']">
          {project.category}
        </p>
        <h3 className="m-0 font-display text-[1.85rem] leading-[1.1] font-bold tracking-[-0.04em] md:text-[clamp(1.8rem,3.2vw,2.65rem)]">
          {project.title}
        </h3>
        <p className="my-[14px] max-w-[440px] text-[0.89rem] leading-[1.8] text-muted md:my-[18px] md:mb-[23px] md:text-[0.94rem]">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2" aria-label="Technologies used">
          {project.stack.map((item) => (
            <span
              className="inline-flex h-[27px] items-center rounded-full border border-accent/20 bg-accent/[0.035] px-2.5 text-[0.69rem] text-[#cbd6c1]"
              key={item}
            >
              {item}
            </span>
          ))}
        </div>
        <div className="mt-5 flex flex-wrap gap-3 md:mt-[26px]">
          <a
            className="-ml-2 inline-flex items-center gap-2 rounded-md px-2 py-2 text-[0.84rem] font-semibold text-accent transition-colors hover:bg-accent/10"
            href={project.sourceUrl}
            target="_blank"
            rel="noreferrer"
          >
            View source <Code fontSize="small" />
          </a>
        </div>
      </div>
    </article>
  );
}
