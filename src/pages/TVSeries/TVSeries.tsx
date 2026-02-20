import { useTVSeriesData } from "@/hooks/useTVSeriesData";
import { MediaSection } from "../../components/sections/MediaSection";

export function TVSeries() {
  const { popularSeries, weekTrendingSeries, topRatedSeries } =
    useTVSeriesData();

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
