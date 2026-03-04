import { useState, useEffect } from "react";
import { fetchTMDB } from "@/utils/fetchTMDB";
import type { Media } from "@/types/media";

export function useHomeData() {
  const [loading, setLoading] = useState(true);

  const [nowPlayingMovies, setNowPlayingMovies] = useState<Media[]>([]);
  const [weekTrendingSeries, setWeekTrendingSeries] = useState<Media[]>([]);
  const [upcomingMovies, setUpcomingMovies] = useState<Media[]>([]);
  const [trendingMovies, setTrendingMovies] = useState<Media[]>([]);
  const [topRatedSeries, setTopRatedSeries] = useState<Media[]>([]);
  const [topRatedMovies, setTopRatedMovies] = useState<Media[]>([]);

  useEffect(() => {
    async function loadHomeData() {
      try {
        const [
          nowPlayingMoviesResponse,
          weekTrendingSeriesResponse,
          upcomingMoviesResponse,
          trendingMoviesResponse,
          topRatedSeriesResponse,
          topRatedMoviesResponse,
        ] = await Promise.all([
          fetchTMDB("movie/now_playing", "movie"),
          fetchTMDB("trending/tv/week", "tv"),
          fetchTMDB("movie/upcoming", "movie"),
          fetchTMDB("trending/movie/week", "movie"),
          fetchTMDB("tv/top_rated", "tv"),
          fetchTMDB("movie/top_rated", "movie"),
        ]);

        setNowPlayingMovies(nowPlayingMoviesResponse);
        setWeekTrendingSeries(weekTrendingSeriesResponse);
        setUpcomingMovies(upcomingMoviesResponse);
        setTrendingMovies(trendingMoviesResponse);
        setTopRatedSeries(topRatedSeriesResponse);
        setTopRatedMovies(topRatedMoviesResponse);
      } catch (error) {
        console.error("Erro ao carregar dados da Home", error);
      } finally {
        setLoading(false);
      }
    }

    loadHomeData();
  }, []);

  return {
    loading,
    nowPlayingMovies,
    weekTrendingSeries,
    upcomingMovies,
    trendingMovies,
    topRatedSeries,
    topRatedMovies,
  };
}
