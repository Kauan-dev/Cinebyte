export const sectionMap: Record<
  string,
  { path: string; mediaType: "movie" | "tv"; title: string }
> = {
  "now-playing-movies": {
    path: "movie/now_playing",
    mediaType: "movie",
    title: "Filmes em cartaz",
  },
  "week-trending-series": {
    path: "trending/tv/week",
    mediaType: "tv",
    title: "Séries populares da semana",
  },
  "upcoming-movies": {
    path: "movie/upcoming",
    mediaType: "movie",
    title: "Em breve nos cinemas",
  },
  "week-trending-movies": {
    path: "trending/movie/week",
    mediaType: "movie",
    title: "Filmes populares da semana",
  },
  "top-rated-series": {
    path: "tv/top_rated",
    mediaType: "tv",
    title: "Séries mais bem avaliadas",
  },
  "top-rated-movies": {
    path: "movie/top_rated",
    mediaType: "movie",
    title: "Filmes mais bem avaliados",
  },
  "popular-movies": {
    path: "movie/popular",
    mediaType: "movie",
    title: "Filmes em alta",
  },
  "popular-series": {
    path: "tv/popular",
    mediaType: "tv",
    title: "Series em alta",
  },
};
