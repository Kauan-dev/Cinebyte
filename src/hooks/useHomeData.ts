import { useState, useEffect } from "react";
import { fetchTMDB } from "@/utils/fetchTMDB";
import type { Media } from "@/types/media";

export function useHomeData() {
  const [nowPlayingMovies, setNowPlayingMovies] = useState<Media[]>([]);
  const [popularSeries, setPopularSeries] = useState<Media[]>([]);
  const [upcomingMovies, setUpcomingMovies] = useState<Media[]>([]);
  const [weekTrendingSeries, setWeekTrendingSeries] = useState<Media[]>([]);
  const [popularMovies, setPopularMovies] = useState<Media[]>([]);
  const [topRatedSeries, setTopRatedSeries] = useState<Media[]>([]);
  const [topRatedMovies, setTopRatedMovies] = useState<Media[]>([]);

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
          fetchTMDB("movie/now_playing", "movie"),
          fetchTMDB("tv/popular", "tv"),
          fetchTMDB("movie/upcoming", "movie"),
          fetchTMDB("trending/tv/week", "tv"),
          fetchTMDB("movie/popular", "movie"),
          fetchTMDB("tv/top_rated", "tv"),
          fetchTMDB("movie/top_rated", "movie"),
        ]);

        setNowPlayingMovies(nowPlayingMoviesResponse);
        setPopularSeries(popularSeriesResponse);
        setUpcomingMovies(upcomingMoviesResponse);
        setWeekTrendingSeries(weekTrendingSeriesResponse);
        setPopularMovies(popularMoviesResponse);
        setTopRatedSeries(topRatedSeriesResponse);
        setTopRatedMovies(topRatedMoviesResponse);
      } catch (error) {
        console.error("Erro ao carregar dados da Home", error);
      }
    }

    loadHomeData();
  }, []);

  return {
    nowPlayingMovies,
    popularSeries,
    upcomingMovies,
    weekTrendingSeries,
    popularMovies,
    topRatedSeries,
    topRatedMovies,
  };
}
