import { CalendarToday } from "@mui/icons-material";
import { Container } from "@mui/material";
import { education } from "../data/portfolio";
import SectionHeading from "./SectionHeading";

export default function EducationTimeline() {
  return (
    <section className="section education-section" id="education">
      <Container maxWidth="lg">
        <SectionHeading
          eyebrow="04 / THE JOURNEY"
          title="Education, along the way."
          description="Each chapter added a new perspective and a little more curiosity."
        />
        <ol className="education-timeline">
          {education.map((item, index) => (
            <li
              className={`timeline-item${index % 2 === 0 ? " timeline-top" : " timeline-bottom"}`}
              key={item.institution}
            >
              <span className="timeline-dot" aria-hidden="true" />
              <article className="education-card">
                <div className="education-icon">
                  <img src={item.icon} alt="" aria-hidden="true" />
                </div>
                <p className="education-level">{item.level}</p>
                <h3>{item.institution}</h3>
                <p className="education-qualification">{item.qualification}</p>
                <p className="education-years">
                  <CalendarToday fontSize="inherit" />
                  {item.years}
                </p>
              </article>
              <span className="timeline-year">{item.years.split(" ")[0]}</span>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
