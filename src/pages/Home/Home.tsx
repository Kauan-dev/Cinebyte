import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";
import featuredBanner from "../../assets/images/featuredBanner.jpg";

import type { Media } from "../../types/media";
import { MediaSection } from "../../components/sections/MediaSection";

export function Home() {
  const [nowPlaying, setNowPlaying] = useState<Media[]>([]);
  const [upcoming, setUpcoming] = useState<Media[]>([]);
  const [onTheAir, setOnTheAir] = useState<Media[]>([]);
  const [popular, setPopular] = useState<Media[]>([]);

  const itemLimit = 20;

  useEffect(() => {
    async function loadHomeData() {
      try {
        const [
          nowPlayingResponse,
          upcomingResponse,
          onTheAirResponse,
          popularResponse,
        ] = await Promise.all([
          api.get("movie/now_playing"),
          api.get("movie/upcoming"),
          api.get("tv/on_the_air"),
          api.get("tv/popular"),
        ]);

        setNowPlaying(nowPlayingResponse.data.results.slice(0, itemLimit));
        setUpcoming(upcomingResponse.data.results.slice(0, itemLimit));
        setOnTheAir(onTheAirResponse.data.results.slice(0, itemLimit));
        setPopular(popularResponse.data.results.slice(0, itemLimit));
      } catch (error) {
        console.error("Erro ao carregar dados da Home", error);
      }
    }

    loadHomeData();
  }, []);

  return (
    <div className="homepage">
      <div className="mb-7 px-4">
        <Link to="/movie/872585">
          <img
            className="h-60 w-full rounded-md object-cover"
            src={featuredBanner}
            title="Oppenheimer"
            alt=""
          />
        </Link>
      </div>

      <div className="flex flex-col gap-3">
        <MediaSection title="Filmes em cartaz" data={nowPlaying} />
        <MediaSection title="Em breve nos cinemas" data={upcoming} />
        <MediaSection title="Series em exibição" data={onTheAir} />
        <MediaSection title="Series populares da semana" data={popular} />
      </div>
    </div>
  );
}
