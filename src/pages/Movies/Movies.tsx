import { useMoviesData } from "@/hooks/useMoviesData";
import { MediaSection } from "../../components/sections/MediaSection";
import { Loading } from "@/components/layout/Loading";
import { useTitle } from "@/hooks/useTitle";

export function Movies() {
  useTitle("FILMES");

  const {
    loading,
    trendingMovies,
    nowPlayingMovies,
    upcomingMovies,
    popularMovies,
    topRatedMovies,
  } = useMoviesData();

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="movies-page">
      <div className="flex flex-col gap-3">
        <MediaSection
          sectionTitle="Filmes populares da semana"
          sectionId="week-trending-movies"
          data={trendingMovies}
        />
        <MediaSection
          sectionTitle="Filmes em cartaz"
          sectionId="now-playing-movies"
          data={nowPlayingMovies}
        />
        <MediaSection
          sectionTitle="Em breve nos cinemas"
          sectionId="upcoming-movies"
          data={upcomingMovies}
        />
        <MediaSection
          sectionTitle="Filmes em alta"
          sectionId="popular-movies"
          data={popularMovies}
        />
        <MediaSection
          sectionTitle="Filmes mais bem avaliados"
          sectionId="top-rated-movies"
          data={topRatedMovies}
        />
      </div>
    </div>
  );
}
