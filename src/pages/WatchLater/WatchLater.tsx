import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/card";
import type { WatchListItem } from "@/types/media";

export function WatchLater() {
  const watchLaterList: WatchListItem[] = JSON.parse(
    localStorage.getItem("cinebyte:watchList") ?? "[]",
  );

  if (watchLaterList.length == 0) {
    return (
      <div>
        <h1>NÃO HÁ FILMES SALVOS!</h1>
      </div>
    );
  }

  return (
    <Container className="grid grid-cols-2 gap-3 px-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
      {watchLaterList.map((media) => {
        return (
          <article key={media.id} className="w-full">
            <Card
              id={media.id}
              poster_path={media.poster_path}
              name={media.name}
              title={media.title}
              media_type={media.media_type}
            />
          </article>
        );
      })}
    </Container>
  );
}
