import { Container } from "@mui/material";
import { projects } from "../data/portfolio";
import ProjectCard from "./ProjectCard";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <section className="section projects-section" id="work">
      <Container maxWidth="lg">
        <SectionHeading
          eyebrow="02 / SELECTED WORK"
          title="A few things I&apos;ve built."
          description="A selection of projects where I’ve explored the full stack, from interface to API."
        />
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}
