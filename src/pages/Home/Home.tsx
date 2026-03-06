import { useHomeData } from "@/hooks/useHomeData";
import { Link } from "react-router-dom";
import featuredBanner from "../../assets/images/featuredBanner.jpg";
import { Container } from "@/components/layout/Container";
import { MediaSection } from "../../components/sections/MediaSection";
import { Loading } from "@/components/layout/Loading";
import { useEffect } from "react";

export function Home() {
  useEffect(() => {
    document.title = "Cinebyte";
  }, []);

  const {
    loading,
    nowPlayingMovies,
    weekTrendingSeries,
    upcomingMovies,
    trendingMovies,
    topRatedSeries,
    topRatedMovies,
  } = useHomeData();

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="homepage">
      <Container className="mb-4 h-[60vw] sm:mb-5 sm:h-[45vw] md:h-[40vw] xl:h-[30vw] [@media(min-width:400px)_and_(max-width:640px)]:h-[58vw]">
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
        <MediaSection title="Filmes em cartaz" data={nowPlayingMovies} />
        <MediaSection
          title="Series populares da semana"
          data={weekTrendingSeries}
        />
        <MediaSection title="Em breve nos cinemas" data={upcomingMovies} />

        <section>
          <Container className="m-auto flex max-w-150 flex-col gap-2 py-8 text-center">
            <q className="text-xl italic md:text-2xl">
              Por que caímos, Bruce? Para que possamos aprender a nos levantar
              novamente.
            </q>
            <span className="text-lg text-neutral-400">- Batman Begins</span>
          </Container>
        </section>

        <MediaSection
          title="Filmes populares da semana"
          data={trendingMovies}
        />
        <MediaSection title="Séries mais bem avaliadas" data={topRatedSeries} />
        <MediaSection title="Filmes mais bem avaliados" data={topRatedMovies} />
      </div>
    </div>
  );
}
