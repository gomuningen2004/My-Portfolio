import { projects } from "../data/portfolio";
import ProjectCard from "./ProjectCard";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <section className="bg-[#0e1319] py-[82px] md:py-28" id="work">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="04 / SELECTED WORK"
          title="A few things I&apos;ve built."
          description="A selection of projects where I’ve explored the full stack, from interface to API."
        />
        <div className="flex flex-col gap-[18px] md:gap-7">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
