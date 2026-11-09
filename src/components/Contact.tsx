import { ArrowOutward, ChatBubbleOutline } from "@mui/icons-material";
import { Button, Container } from "@mui/material";

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <Container maxWidth="lg">
        <div className="contact-panel">
          <div>
            <p className="eyebrow">HAVE A PROJECT IN MIND?</p>
            <h2>
              Let&apos;s make
              <br />
              something meaningful.
            </h2>
            <p className="contact-copy">
              I&apos;m always happy to connect, exchange ideas, and explore
              what we could build together.
            </p>
          </div>
          <Button
            component="a"
            href="https://www.linkedin.com/in/govardhan-annabathula-69330a257/"
            target="_blank"
            rel="noreferrer"
            variant="contained"
            size="large"
            startIcon={<ChatBubbleOutline />}
            endIcon={<ArrowOutward />}
          >
            Connect on LinkedIn
          </Button>
        </div>
      </Container>
    </section>
  );
}
