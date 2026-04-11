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
          sectionId="week-trending-series"
          data={weekTrendingSeries}
        />

        <MediaSection
          sectionTitle="Series em alta"
          sectionId="popular-series"
          data={popularSeries}
        />

        <MediaSection
          sectionTitle="Séries mais bem avaliadas"
          sectionId="top-rated-series"
          data={topRatedSeries}
        />
      </div>
    </div>
  );
}
