import { useState, useEffect } from "react";
import { fetchTMDB } from "@/utils/fetchTMDB";
import type { Media } from "@/types/media";

export function useMoviesData() {
  const [nowPlayingMovies, setNowPlayingMovies] = useState<Media[]>([]);
  const [upcomingMovies, setUpcomingMovies] = useState<Media[]>([]);
  const [popularMovies, setPopularMovies] = useState<Media[]>([]);
  const [topRatedMovies, setTopRatedMovies] = useState<Media[]>([]);

  useEffect(() => {
    async function loadMoviesData() {
      try {
        const [
          nowPlayingMoviesResponse,
          upcomingMoviesResponse,
          popularMoviesResponse,
          topRatedMoviesResponse,
        ] = await Promise.all([
          fetchTMDB("movie/now_playing", "movie"),
          fetchTMDB("movie/upcoming", "movie"),
          fetchTMDB("movie/popular", "movie"),
          fetchTMDB("movie/top_rated", "movie"),
        ]);

        setNowPlayingMovies(nowPlayingMoviesResponse);
        setUpcomingMovies(upcomingMoviesResponse);
        setPopularMovies(popularMoviesResponse);
        setTopRatedMovies(topRatedMoviesResponse);
      } catch (error) {
        console.error("Erro ao carregar dados da página Filmes", error);
      }
    }

    loadMoviesData();
  }, []);

  return {
    nowPlayingMovies,
    upcomingMovies,
    popularMovies,
    topRatedMovies,
  };
}
