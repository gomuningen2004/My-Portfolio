import { ArrowOutward, Code } from "@mui/icons-material";
import { Button, Card, CardContent, Chip } from "@mui/material";
import type { Project } from "../data/portfolio";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <Card className={`project-card project-card-${index + 1}`} elevation={0}>
      <a
        className="project-image-link"
        href={project.liveUrl}
        target="_blank"
        rel="noreferrer"
        aria-label={`View ${project.title} live`}
      >
        <img className="project-image" src={project.image} alt={project.imageAlt} />
        <span className="project-number">0{index + 1}</span>
      </a>
      <CardContent className="project-content">
        <p className="project-category">{project.category}</p>
        <h3>{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <div className="project-tags" aria-label="Technologies used">
          {project.stack.map((item) => (
            <Chip key={item} label={item} size="small" variant="outlined" />
          ))}
        </div>
        <div className="project-links">
          <Button
            component="a"
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            endIcon={<ArrowOutward />}
          >
            Live site
          </Button>
          <Button
            component="a"
            href={project.sourceUrl}
            target="_blank"
            rel="noreferrer"
            endIcon={<Code />}
          >
            Source
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
