import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/card";

type WatchListItem = {
  id: number;
  title?: string;
  name?: string;
  poster_path?: string | null;
  vote_average: number;
  media_type: "movie" | "tv";
};

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
    <Container className="flex flex-wrap gap-3 px-4">
      {watchLaterList.map((media) => {
        return (
          <article key={media.id} className="w-54">
            <Card
              id={media.id}
              vote_average={media.vote_average}
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
