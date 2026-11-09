import ArrowOutward from "@mui/icons-material/ArrowOutward";
import { Button, Chip, Container } from "@mui/material";

export default function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-glow" aria-hidden="true" />
      <Container maxWidth="lg" className="hero-content">
        <Chip
          className="availability-chip"
          label="WEB DEVELOPER · OPEN TO OPPORTUNITIES"
          size="small"
        />
        <h1>
          I build thoughtful
          <br />
          <span>digital experiences.</span>
        </h1>
        <p className="hero-copy">
          I&apos;m Govardhan, a web developer turning ideas into clear, useful,
          and engaging experiences for the web.
        </p>
        <div className="hero-actions">
          <Button
            component="a"
            href="#work"
            variant="contained"
            endIcon={<ArrowOutward />}
          >
            Explore my work
          </Button>
          <a className="text-link" href="#contact">
            Get in touch <span aria-hidden="true">↓</span>
          </a>
        </div>
        <div className="hero-index" aria-hidden="true">
          <span>01</span>
          <span className="hero-index-line" />
          <span>04</span>
        </div>
      </Container>
    </section>
  );
}
