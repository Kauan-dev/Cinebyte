import { useEffect } from "react";
import { useTVSeriesData } from "@/hooks/useTVSeriesData";
import { MediaSection } from "../../components/sections/MediaSection";
import { Loading } from "@/components/layout/Loading";

export function TVSeries() {
  useEffect(() => {}, [(document.title = "Cinebyte | Séries")]);

  const { loading, popularSeries, weekTrendingSeries, topRatedSeries } =
    useTVSeriesData();

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="tvseries-page">
      <div className="flex flex-col gap-3">
        <MediaSection title="Series populares da semana" data={popularSeries} />
        <MediaSection title="Series em alta" data={weekTrendingSeries} />
        <MediaSection title="Séries mais bem avaliadas" data={topRatedSeries} />
      </div>
    </div>
  );
}
