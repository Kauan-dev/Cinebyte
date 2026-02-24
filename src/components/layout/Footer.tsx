import { Link } from "react-router-dom";
import { Container } from "./Container";
import { Linkedin, Github, Instagram } from "lucide-react";

export function Footer() {
  return (
    // mb-17
    <footer className="bg-black sm:mb-0">
      <Container className="flex h-15 items-center justify-between">
        <h3 className="font-google text-[18px]">@Kauan-dev</h3>
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
