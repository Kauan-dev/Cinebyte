import { Link } from "react-router-dom";
import { Container } from "@/components/layout/Container";
import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export function About() {
  return (
    <Container className="mt-10 flex h-[calc(100vh-64px)] flex-col gap-8">
      <div className="flex flex-col gap-8">
        <h1 className="text-3xl font-bold">Sobre o Cinebyte</h1>
        <div className="flex max-w-150 flex-col gap-6">
          <span>
            O Cinebyte é um projeto front-end de navegação e exploração de
            filmes e séries, com listagens, páginas de detalhes e gerenciamento
            de favoritos, inspirado no IMDb.
          </span>

          <span>
            Foi construído utilizando React, TypeScript, Tailwind e a API do
            TMDB.
          </span>

          <span>
            Seu propósito é apenas estudo e prática de desenvolvimento web, sem
            fins comerciais.
          </span>
        </div>
      </div>
      <div className="font-google flex items-center gap-2">
        <Link to="https://github.com/Kauan-dev/Cinebyte" target="blank">
          <Button
            size={"icon-lg"}
            className="h-12 w-12 rounded-full"
            variant={"secondary"}
          >
            <Github className="size-6" />
          </Button>
        </Link>
        <Link to="https://github.com/Kauan-dev/Cinebyte" target="blank">
          <span>@Kauan-dev</span>
        </Link>
      </div>
    </Container>
  );
}
