import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";
import featuredBanner from "../../assets/images/featuredBanner.jpg";

export function Home() {
  type Media = {
    id: number;
    title: string;
    vote_average: number;
    poster_path?: string | null;
  };

  const itemLimit = 5;

  const [movieList, setMovieList] = useState<Media[]>([]);

  useEffect(() => {
    async function loadMovies() {
      const response = await api.get("movie/now_playing");
      setMovieList(response.data.results.slice(0, itemLimit));
    }

    loadMovies();
  }, []);

  return (
    <div className="homepage">
      <div className="mb-9">
        <Link to="/movie/872585">
          <img
            className="h-105 w-full rounded-sm object-cover"
            src={featuredBanner}
            title="Oppenheimer"
            alt=""
          />
        </Link>
      </div>

      <div>
        <h3 className="mb-4 text-[25px] font-semibold tracking-wider uppercase">
          Filmes em cartaz
        </h3>

        <div className="flex flex-wrap gap-x-5 gap-y-6">
          {movieList.map((movie) => {
            return (
              <article key={movie.id}>
                <Link to={`movie/${movie.id}`} title={movie.title}>
                  <img
                    className="w-60"
                    src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                    alt=""
                  />
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}
