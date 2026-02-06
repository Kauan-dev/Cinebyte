import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";
import logo from "../../assets/images/logo.png";

type MediaDetails = {
  id: number;
  title: string;
  overview: string;
  release_date: string;
  vote_average: number;
  poster_path?: string | null;
  backdrop_path?: string | null;
};

export function Movie() {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState<MediaDetails | null>(null);

  useEffect(() => {
    async function loadMovieDetails() {
      const response = await api.get(`movie/${id}`);
      setMovieDetails(response.data);
      console.log(response.data);
    }

    loadMovieDetails();
  }, []);

  if (!movieDetails) {
    return <div>Carregando detalhes...</div>;
  }

  return (
    <div
      className="bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movieDetails.backdrop_path})`,
      }}
    >
      <div className="flex h-[calc(100vh-68px)] justify-between bg-black/85 px-8 py-8">
        <div className="flex max-w-137.5 flex-col gap-6">
          <h2 className="font-inter">MOVIE</h2>

          <div>
            <h1 className="text-3xl">{movieDetails.title}</h1>
            <span className="text-[14px]">
              {movieDetails.release_date.split("-")[0]}
            </span>
          </div>

          <p>{movieDetails.overview}</p>

          <div className="flex items-center gap-4 text-lg">
            <img src={logo} alt="" className="w-15" />
            <span>{movieDetails.vote_average.toFixed(1)}</span>
          </div>
        </div>

        <div>
          <img
            className="w-74"
            src={`https://image.tmdb.org/t/p/original/${movieDetails.poster_path}`}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
