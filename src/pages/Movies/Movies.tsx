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
          data={trendingMovies}
        />
        <MediaSection sectionTitle="Filmes em cartaz" data={nowPlayingMovies} />
        <MediaSection
          sectionTitle="Em breve nos cinemas"
          data={upcomingMovies}
        />
        <MediaSection sectionTitle="Filmes populares" data={popularMovies} />
        <MediaSection
          sectionTitle="Filmes mais bem avaliados"
          data={topRatedMovies}
        />
      </div>
    </div>
  );
}
