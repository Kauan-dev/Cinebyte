import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import type { Media } from "@/types/media";
import { sectionMap } from "@/utils/sectionMap";
import { fetchTMDB } from "@/utils/fetchTMDB";
import { Loading } from "@/components/layout/Loading";
import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/card";
import { useTitle } from "@/hooks/useTitle";

export function SeeMore() {
  const [loading, setLoading] = useState(true);
  const { sectionId } = useParams();
  const [data, setData] = useState<Media[]>([]);

  const section = sectionId ? sectionMap[sectionId] : null;

  useTitle(section?.title ?? "");

  useEffect(() => {
    async function loadData() {
      if (!section) return;

      const results = await fetchTMDB(section.path, section.mediaType, 20);
      setData(results);
      setLoading(false);
    }

    loadData();
  }, [section]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="mt-3">
      <h3 className="mb-6 px-4 text-center text-[24px] font-semibold md:px-6 md:text-[26px] lg:px-8">
        {section?.title}
      </h3>

      <Container className="grid min-h-screen grid-cols-2 gap-3 pb-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {data.map((item) => {
          if (item.poster_path) {
            return (
              <Card
                key={item.id}
                id={item.id}
                poster_path={item.poster_path}
                media_type={item.media_type}
                title={item.title ?? item.name}
              />
            );
          }
        })}
      </Container>
    </div>
  );
}
