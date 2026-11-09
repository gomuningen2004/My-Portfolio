import { ArrowOutward } from "@mui/icons-material";
import { Avatar, Button, Container } from "@mui/material";

export default function About() {
  return (
    <section className="about-section" id="about">
      <Container maxWidth="lg">
        <div className="about-layout">
          <div className="about-photo-wrap">
            <Avatar
              className="about-photo"
              src="/Assets/images/my-photo.jpg"
              alt="Govardhan Annabathula"
            />
            <span className="photo-caption">A little about me</span>
          </div>
          <div className="about-copy">
            <p className="eyebrow">01 / ABOUT</p>
            <h2>
              Curious by nature.
              <br />
              <span>Developer by choice.</span>
            </h2>
            <p>
              I&apos;m a web developer who enjoys learning by building. I bring
              ideas to life with thoughtful interfaces and practical
              server-side solutions, and I&apos;m always looking for the next
              thing to understand.
            </p>
            <Button
              component="a"
              href="https://www.linkedin.com/in/govardhan-annabathula-69330a257/"
              target="_blank"
              rel="noreferrer"
              variant="text"
              endIcon={<ArrowOutward />}
              className="about-link"
            >
              More about me
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
