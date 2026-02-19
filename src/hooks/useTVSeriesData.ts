import { useState, useEffect } from "react";
import { fetchTMDB } from "@/utils/fetchTMDB";
import type { Media } from "@/types/media";

export function useTVSeriesData() {
  const [popularSeries, setPopularSeries] = useState<Media[]>([]);
  const [weekTrendingSeries, setWeekTrendingSeries] = useState<Media[]>([]);
  const [topRatedSeries, setTopRatedSeries] = useState<Media[]>([]);

  useEffect(() => {
    async function loadTVSeriesData() {
      try {
        const [
          popularSeriesResponse,
          weekTrendingSeriesResponse,
          topRatedSeriesResponse,
        ] = await Promise.all([
          fetchTMDB("tv/popular", "tv"),
          fetchTMDB("trending/tv/week", "tv"),
          fetchTMDB("tv/top_rated", "tv"),
        ]);

        setPopularSeries(popularSeriesResponse);
        setWeekTrendingSeries(weekTrendingSeriesResponse);
        setTopRatedSeries(topRatedSeriesResponse);
      } catch (error) {
        console.error("Erro ao carregar dados da página Series", error);
      }
    }

    loadTVSeriesData();
  }, []);

  return {
    popularSeries,
    weekTrendingSeries,
    topRatedSeries,
  };
}
