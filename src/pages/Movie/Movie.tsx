import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";
import logo from "../../assets/images/logo.png";
import { Button } from "../../components/ui/Button";

type MediaDetails = {
  id: number;
  title: string;
  overview: string;
  release_date: string;
  vote_average: number;
  poster_path?: string | null;
  backdrop_path?: string | null;
};

type WatchListItem = {
  id: number;
  title: string;
  poster_path?: string | null;
};

const WATCHLIST_KEY = "cinebyte:watchList";

export function Movie() {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState<MediaDetails | null>(null);

  useEffect(() => {
    async function loadMovieDetails() {
      const response = await api.get(`movie/${id}`);
      setMovieDetails(response.data);
    }

    loadMovieDetails();
  }, []);

  function handleWatchTrailer() {
    if (!movieDetails) return;

    const trailerUrl = `https://www.youtube.com/results?search_query=${movieDetails.title}+${releaseYear}+oficial+trailer`;
    window.open(trailerUrl, "_blank", "noopener,noreferrer");
  }

  function handleAddToWatchLater() {
    if (!movieDetails) return;

    let watchList: WatchListItem[] = JSON.parse(
      localStorage.getItem(WATCHLIST_KEY) ?? "[]",
    );

    const hasMovie = watchList.some(
      (savedMovie) => savedMovie.id === movieDetails.id,
    );

    if (hasMovie) {
      alert("Você já possui esse filme salvo!");
      return;
    }

    watchList.unshift({
      id: movieDetails.id,
      title: movieDetails.title,
      poster_path: movieDetails.poster_path,
    });

    localStorage.setItem(WATCHLIST_KEY, JSON.stringify(watchList));

    alert("Filme salvo com sucesso!");
  }

  if (!movieDetails) {
    return <div>Carregando detalhes...</div>;
  }

  const releaseYear = movieDetails.release_date.split("-")[0];

  return (
    <div
      className="bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movieDetails.backdrop_path})`,
      }}
    >
      <div className="flex h-[calc(100vh-68px)] items-center justify-between bg-black/85 px-8 py-8">
        <div className="flex max-w-137.5 flex-col gap-8">
          <h2>MOVIE</h2>

          <div className="flex items-end gap-2.5">
            <h1 className="text-3xl">{movieDetails.title}</h1>
            <span className="mb-0.5 text-[15px] text-neutral-500">
              {releaseYear}
            </span>
          </div>

          <p>{movieDetails.overview}</p>

          <div className="flex items-center gap-4 text-lg">
            <img src={logo} alt="" className="w-15" />
            <span>{movieDetails.vote_average.toFixed(1)}</span>
          </div>

          <div className="flex gap-4">
            <Button label="Watch trailer" onClick={handleWatchTrailer}></Button>

            <Button
              label="Add to Watchlist"
              onClick={handleAddToWatchLater}
            ></Button>
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
