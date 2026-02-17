import { useHomeData } from "@/hooks/useHomeData";
import { Link } from "react-router-dom";
import featuredBanner from "../../assets/images/featuredBanner.jpg";
import { Container } from "@/components/layout/Container";
import { MediaSection } from "../../components/sections/MediaSection";

export function Home() {
  const {
    nowPlayingMovies,
    popularSeries,
    upcomingMovies,
    weekTrendingSeries,
    popularMovies,
    topRatedSeries,
    topRatedMovies,
  } = useHomeData();

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
        <MediaSection title="Series populares" data={popularSeries} />
        <MediaSection title="Em breve nos cinemas" data={upcomingMovies} />
        <MediaSection title="Series em alta" data={weekTrendingSeries} />
        <MediaSection title="Filmes populares" data={popularMovies} />
        <MediaSection title="Séries mais bem avaliadas" data={topRatedSeries} />
        <MediaSection title="Filmes mais bem avaliados" data={topRatedMovies} />
      </div>
    </div>
  );
}
