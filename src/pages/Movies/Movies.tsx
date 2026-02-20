import { useMoviesData } from "@/hooks/useMoviesData";
import { MediaSection } from "../../components/sections/MediaSection";

export function Movies() {
  const {
    trendingMovies,
    nowPlayingMovies,
    upcomingMovies,
    popularMovies,
    topRatedMovies,
  } = useMoviesData();

  return (
    <div className="movies-page">
      <div className="flex flex-col gap-3">
        <MediaSection
          title="Filmes populares da semana"
          data={trendingMovies}
        />
        <MediaSection title="Filmes em cartaz" data={nowPlayingMovies} />
        <MediaSection title="Em breve nos cinemas" data={upcomingMovies} />
        <MediaSection title="Filmes populares" data={popularMovies} />
        <MediaSection title="Filmes mais bem avaliados" data={topRatedMovies} />
      </div>
    </div>
  );
}
