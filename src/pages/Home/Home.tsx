import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";
import featuredBanner from "../../assets/images/featuredBanner.jpg";

import type { Media } from "../../types/media";
import { MediaSection } from "../../components/sections/MediaSection";
import { Container } from "@/components/layout/Container";

export function Home() {
  const [nowPlayingMovies, setNowPlayingMovies] = useState<Media[]>([]);
  const [popularSeries, setPopularSeries] = useState<Media[]>([]);
  const [upcomingMovies, setUpcomingMovies] = useState<Media[]>([]);
  const [weekTrendingSeries, setWeekTrendingSeries] = useState<Media[]>([]);
  const [popularMovies, setPopularMovies] = useState<Media[]>([]);
  const [topRatedSeries, setTopRatedSeries] = useState<Media[]>([]);
  const [topRatedMovies, setTopRatedMovies] = useState<Media[]>([]);

  const itemLimit = 16;

  useEffect(() => {
    async function loadHomeData() {
      try {
        const [
          nowPlayingMoviesResponse,
          popularSeriesResponse,
          upcomingMoviesResponse,
          weekTrendingSeriesResponse,
          popularMoviesResponse,
          topRatedSeriesResponse,
          topRatedMoviesResponse,
        ] = await Promise.all([
          api.get("movie/now_playing"),
          api.get("tv/popular"),
          api.get("movie/upcoming"),
          api.get("trending/tv/week"),
          api.get("movie/popular"),
          api.get("tv/top_rated"),
          api.get("movie/top_rated"),
        ]);

        setNowPlayingMovies(
          nowPlayingMoviesResponse.data.results.slice(0, itemLimit),
        );
        setPopularSeries(
          popularSeriesResponse.data.results.slice(0, itemLimit),
        );
        setUpcomingMovies(
          upcomingMoviesResponse.data.results.slice(0, itemLimit),
        );
        setWeekTrendingSeries(
          weekTrendingSeriesResponse.data.results.slice(0, itemLimit),
        );
        setPopularMovies(
          popularMoviesResponse.data.results.slice(0, itemLimit),
        );
        setTopRatedSeries(
          topRatedSeriesResponse.data.results.slice(0, itemLimit),
        );
        setTopRatedMovies(
          topRatedMoviesResponse.data.results.slice(0, itemLimit),
        );
      } catch (error) {
        console.error("Erro ao carregar dados da Home", error);
      }
    }

    loadHomeData();
  }, []);

  return (
    <div className="homepage">
      <Container className="mb-4 h-[60vw] sm:mb-5 sm:h-[45vw] md:h-[40vw] xl:h-[30vw] [@media(min-width:400px)_and_(max-width:640px)]:h-[58vw]">
        <Link to="/movie/872585">
          <img
            className="h-full w-full rounded-md object-cover"
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
