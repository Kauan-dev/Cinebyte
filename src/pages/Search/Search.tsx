import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "@/services/api";
import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/card";

export function Search() {
  const { query } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    async function loadData() {
      const response = await api.get("search/multi", {
        params: {
          query: query,
        },
      });

      setData(response.data.results);
      console.log(response.data.results);
    }

    loadData();
  }, [query]);

  return (
    <Container className="grid grid-cols-2 gap-3 pb-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
      {data.map((item) => {
        return (
          <Card
            key={item.id}
            id={item.id}
            poster_path={item.poster_path}
            media_type={item.title ? "movie" : "tv"}
          >
            <img
              className="w-44"
              src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
              alt=""
            />
          </Card>
        );
      })}
    </Container>
  );
}
