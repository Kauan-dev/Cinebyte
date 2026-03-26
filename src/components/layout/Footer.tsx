import { Link } from "react-router-dom";
import { Container } from "./Container";
import { Linkedin, Github, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-2 border-t-2 border-neutral-500">
      <Container className="flex h-15 items-center justify-center">
        <div className="flex gap-4">
          <Link to="/">
            <Linkedin />
          </Link>
          <Link to="/">
            <Github />
          </Link>
          <Link to="/">
            <Instagram />
          </Link>
        </div>
      </Container>
    </footer>
  );
}
