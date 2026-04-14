import { useHomeData } from "@/hooks/useHomeData";
import { Link } from "react-router-dom";
import featuredBanner from "../../assets/images/featuredBanner.jpg";
import { Container } from "@/components/layout/Container";
import { MediaSection } from "../../components/sections/MediaSection";
import { Loading } from "@/components/layout/Loading";
import { useTitle } from "@/hooks/useTitle";

export function Home() {
  useTitle();

  const {
    loading,
    nowPlayingMovies,
    weekTrendingSeries,
    upcomingMovies,
    weekTrendingMovies,
    topRatedSeries,
    topRatedMovies,
  } = useHomeData();

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="homepage">
      <Container className="mb-4 max-h-120 sm:mb-5 sm:h-[45vw] md:h-[40vw] xl:h-[30vw] [@media(min-width:400px)_and_(max-width:640px)]:h-[58vw]">
        <Link to="/movie/872585">
          <img
            className="h-full w-full rounded-md object-cover outline-2 outline-offset-3 outline-transparent transition-all duration-300 ease-in-out select-none hover:outline-neutral-50 focus-visible:outline-neutral-50"
            src={featuredBanner}
            title="Oppenheimer"
            alt=""
          />
        </Link>
      </Container>

      <div className="flex flex-col gap-3">
        <MediaSection
          sectionTitle="Filmes em cartaz"
          sectionId="now-playing-movies"
          data={nowPlayingMovies}
        />
        <MediaSection
          sectionTitle="Series populares da semana"
          sectionId="week-trending-series"
          data={weekTrendingSeries}
        />
        <MediaSection
          sectionTitle="Em breve nos cinemas"
          sectionId="upcoming-movies"
          data={upcomingMovies}
        />

        <section>
          <Container className="m-auto flex max-w-150 flex-col gap-2 py-14 text-center">
            <q className="text-xl italic md:text-2xl">
              Por que caímos, Bruce? Para que possamos aprender a nos levantar
              novamente.
            </q>
            <span className="text-lg text-neutral-400">- Batman Begins</span>
          </Container>
        </section>

        <MediaSection
          sectionTitle="Filmes populares da semana"
          sectionId="week-trending-movies"
          data={weekTrendingMovies}
        />
        <MediaSection
          sectionTitle="Séries mais bem avaliadas"
          sectionId="top-rated-series"
          data={topRatedSeries}
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
