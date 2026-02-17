import api from "@/services/api";
import type { Media } from "@/types/media";

const itemsLimit = 16;

export function normalize(
  items: any[] = [],
  mediaType: "movie" | "tv",
): Media[] {
  return items.map((item) => ({
    id: item.id,
    media_type: mediaType,
    title: item.title ?? item.name,
    overview: item.overview ?? "Sinopse indisponível.",
    vote_average: item.vote_average ?? 0,
    poster_path: item.poster_path ?? null,
    backdrop_path: item.backdrop_path ?? null,
    release_date: item.release_date ?? item.first_air_date,
  }));
}

export async function fetchTMDB(path: string, mediaType: "movie" | "tv") {
  const response = await api.get(path);
  console.log(response.data.results);
  return normalize(response.data.results.slice(0, itemsLimit), mediaType);
}
