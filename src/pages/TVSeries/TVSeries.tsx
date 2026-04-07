import { useTVSeriesData } from "@/hooks/useTVSeriesData";
import { MediaSection } from "../../components/sections/MediaSection";
import { Loading } from "@/components/layout/Loading";
import { useTitle } from "@/hooks/useTitle";

export function TVSeries() {
  useTitle("SÉRIES");

  const { loading, popularSeries, weekTrendingSeries, topRatedSeries } =
    useTVSeriesData();

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="tvseries-page">
      <div className="flex flex-col gap-3">
        <MediaSection
          sectionTitle="Series populares da semana"
          data={popularSeries}
        />
        <MediaSection sectionTitle="Series em alta" data={weekTrendingSeries} />
        <MediaSection
          sectionTitle="Séries mais bem avaliadas"
          data={topRatedSeries}
        />
      </div>
    </div>
  );
}
