import api from "@/services/api";
import type { Media } from "@/types/media";

const itemsLimit = 16;

export function normalize(
  items: any[] = [],
  mediaType: "movie" | "tv",
): Media[] {
  return items.map((item) => ({
    id: item.id,
    title: item.title ?? item.name ?? "",
    vote_average: item.vote_average ?? 0,
    poster_path: item.poster_path ?? null,
    media_type: mediaType,
  }));
}

export async function fetchTMDB(path: string, mediaType: "movie" | "tv") {
  const response = await api.get(path);
  return normalize(response.data.results.slice(0, itemsLimit), mediaType);
}
