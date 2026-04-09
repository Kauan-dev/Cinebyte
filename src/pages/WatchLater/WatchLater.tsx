import { Container } from "@/components/layout/Container";
import type { WatchListItem } from "@/types/media";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Bookmark } from "lucide-react";
import { Loading } from "@/components/layout/Loading";
import { useTitle } from "@/hooks/useTitle";
import { toast } from "sonner";
import { LucideX } from "lucide-react";

export function WatchLater() {
  const [loading, setLoading] = useState(true);
  const [favoritesList, setFavoritesList] = useState<WatchListItem[]>([]);

  useTitle("FAVORITOS");

  useEffect(() => {
    const watchLaterList: WatchListItem[] = JSON.parse(
      localStorage.getItem("cinebyte:watchList") ?? "[]",
    );

    setFavoritesList(watchLaterList);
    setLoading(false);
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

    const mediaFilter = favoritesList.filter((media) => {
      return media.id !== mediaToRemoveID;
    });

    localStorage.setItem("cinebyte:watchList", JSON.stringify(mediaFilter));
    setFavoritesList(mediaFilter);
    toast.success("Mídia removida com sucesso!");
  }

  if (loading) {
    return <Loading />;
  }

  if (favoritesList.length == 0) {
    return (
      <div className="flex h-[calc(100vh-84px-60px)] flex-col items-center justify-center gap-4 text-neutral-500">
        <Bookmark size={48} />
        <h1 className="text-2xl font-bold text-neutral-500">
          Sua lista está vazia!
        </h1>
      </div>
    );
  }

  return (
    <div className="mt-3">
      <h3 className="mb-3 px-4 text-[24px] font-semibold tracking-wide md:px-6 md:text-[26px] lg:px-8">
        Favoritos
      </h3>
      <Container>
        <div className="grid grid-cols-2 gap-3 pb-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
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
                  variant={"destructive"}
                  size={"icon-sm"}
                  className="absolute top-1.5 right-1.5 z-30 rounded-full opacity-0 transition-opacity duration-200 sm:group-hover:opacity-100"
                >
                  <LucideX />
                </Button>
              </article>
            );
          })}
        </div>
      </Container>
    </div>
  );
}
