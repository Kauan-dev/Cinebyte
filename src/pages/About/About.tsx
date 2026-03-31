import { Link } from "react-router-dom";
import { Container } from "@/components/layout/Container";
import { Github } from "lucide-react";

export function About() {
  return (
    <Container className="mt-3 flex flex-col gap-8">
      <div className="flex flex-col gap-8">
        <h1 className="text-[26px] font-bold">Sobre o Cinebyte</h1>
        <div className="flex max-w-180 flex-col gap-5">
          <span>
            O Cinebyte é um projeto front-end que desenvolvi com foco em
            aprender e praticar desenvolvimento web. A proposta foi criar uma
            aplicação inspirada no IMDb, onde é possível explorar e pesquisar
            filmes e séries, visualizar detalhes e salvar favoritos.
          </span>

          <span>
            A aplicação foi feita com React, TypeScript e Tailwind CSS,
            consumindo dados da API do TMDB. É uma SPA (Single Page
            Application), o que permite uma navegação mais fluida, sem
            recarregamento de página, além de ser responsiva, funcionando bem
            tanto no celular quanto no desktop.
          </span>

          <span>
            No geral, é um projeto voltado totalmente para estudo, sem fins
            comerciais.
          </span>
        </div>
      </div>
      <div className="font-google text-xl font-semibold">
        <Link
          to="https://github.com/Kauan-dev"
          target="blank"
          className="flex items-center gap-2"
        >
          <Github className="size-7" />
          <span>@Kauan-dev</span>
        </Link>
      </div>
    </Container>
  );
}
