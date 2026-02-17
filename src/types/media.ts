export type Media = {
  id: number;
  title?: string;
  name?: string;
  poster_path?: string | null;
  vote_average: number | 0;
  media_type: "movie" | "tv";
};
