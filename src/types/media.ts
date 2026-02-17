export type Media = {
  id: number;
  title?: string;
  name?: string;
  overview?: string;
  vote_average?: number;
  poster_path: string | null;
  backdrop_path?: string | null;
  release_date?: string;
  first_air_date?: string;
  media_type: "movie" | "tv";
};

export type MediaDetails = Media & {
  overview: string;
  vote_average: number;
  backdrop_path: string | null;
};

export type WatchListItem = {
  id: number;
  title?: string;
  name?: string;
  poster_path: string | null;
  media_type: "movie" | "tv";
};
