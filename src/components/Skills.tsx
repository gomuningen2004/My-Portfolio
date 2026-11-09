import { Container } from "@mui/material";
import { skillGroups } from "../data/portfolio";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section className="section skills-section" id="skills">
      <Container maxWidth="lg">
        <SectionHeading
          eyebrow="03 / TOOLKIT"
          title="Tools I work with."
          description="A growing set of tools and technologies I use to bring ideas to life."
        />
        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <article className="skill-group" key={group.title}>
              <span className="skill-group-index">0{index + 1}</span>
              <h3>{group.title}</h3>
              <div className="skill-list">
                {group.skills.map((skill) => (
                  <span className="skill-pill" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
