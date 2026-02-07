import { Link } from "react-router-dom";

type WatchListItem = {
  id: number;
  title: string;
  poster_path?: string | null;
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
    <div className="flex flex-wrap gap-3">
      {watchLaterList.map((media) => {
        return (
          <article key={media.id}>
            <Link to={`/movie/${media.id}`} title={media.title}>
              <img
                className="w-54"
                src={`https://image.tmdb.org/t/p/original/${media.poster_path}`}
                alt=""
              />
            </Link>
          </article>
        );
      })}
    </div>
  );
}
