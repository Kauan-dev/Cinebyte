import { Container } from "@/components/layout/Container";
import type { WatchListItem } from "@/types/media";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export function WatchLater() {
  const [favoritesList, setFavoritesList] = useState<WatchListItem[]>([]);

  useEffect(() => {
    const watchLaterList: WatchListItem[] = JSON.parse(
      localStorage.getItem("cinebyte:watchList") ?? "[]",
    );

    setFavoritesList(watchLaterList);
  }, []);

  function handleRemoveFavorite(
    mediaToRemoveID: number,
    mediaToRemoveTitle: string,
  ) {
    const hasConfirm = confirm(
      `Tem certeza que deseja remover "${mediaToRemoveTitle}" dos favoritos?`,
    );

    if (!hasConfirm) {
      return;
    }

    let mediaFilter = favoritesList.filter((media) => {
      return media.id !== mediaToRemoveID;
    });

    localStorage.setItem("cinebyte:watchList", JSON.stringify(mediaFilter));
    setFavoritesList(mediaFilter);
  }

  if (favoritesList.length == 0) {
    return (
      <div>
        <h1>NÃO HÁ FILMES SALVOS!</h1>
      </div>
    );
  }

  return (
    <Container className="grid grid-cols-2 gap-3 px-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
      {favoritesList.map((media) => {
        return (
          <article key={media.id} className="group relative w-full">
            <Card
              id={media.id}
              poster_path={media.poster_path}
              name={media.name}
              title={media.title}
              media_type={media.media_type}
            />
            <Button
              onClick={() =>
                handleRemoveFavorite(
                  media.id,
                  media.title ?? media.name ?? "Título indisponível",
                )
              }
              variant={"outline"}
              size={"icon-sm"}
              className="absolute top-1.5 right-1.5 z-30 rounded-full opacity-100 transition-opacity duration-200 sm:opacity-0 sm:group-hover:opacity-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-x-icon lucide-x"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </Button>
          </article>
        );
      })}
    </Container>
  );
}
