import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "@/services/api";
import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/card";
import { SearchX } from "lucide-react";
import { Loading } from "@/components/layout/Loading";
import { useTitle } from "@/hooks/useTitle";

export function Search() {
  const [loading, setLoading] = useState(true);
  const { query } = useParams();
  const [data, setData] = useState([]);

  useTitle(query ? `Busca: ${query}` : "Busca");

  useEffect(() => {
    setLoading(true);

    async function loadData() {
      const response = await api.get("search/multi", {
        params: {
          query: query,
        },
      });

      setData(response.data.results);
      setLoading(false);
    }

    loadData();
  }, [query]);

  if (loading) {
    return <Loading />;
  }

  if (data.length == 0) {
    return (
      <div className="flex h-[calc(100vh-84px-60px)] flex-col items-center justify-center gap-4 text-neutral-500">
        <SearchX size={48} />
        <h1 className="text-2xl font-bold text-neutral-500">
          Não foram encontrados resultados!
        </h1>
      </div>
    );
  }

  return (
    <Container className="grid min-h-screen grid-cols-2 gap-3 pb-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
      {data.map((item) => {
        if (item.poster_path) {
          return (
            <Card
              key={item.id}
              id={item.id}
              poster_path={item.poster_path}
              media_type={item.title ? "movie" : "tv"}
              title={item.title ?? item.name}
            >
              <img
                className="w-44"
                src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                alt=""
              />
            </Card>
          );
        }
      })}
    </Container>
  );
}
