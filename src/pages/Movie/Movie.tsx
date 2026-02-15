import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";
import logo from "../../assets/images/logo.png";
import { Button } from "../../components/ui/button";

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
  vote_average: number;
};

const WATCHLIST_KEY = "cinebyte:watchList";

export function Movie() {
  const { media_type, id } = useParams();
  const [movieDetails, setMovieDetails] = useState<MediaDetails | null>(null);

  useEffect(() => {
    async function loadMovieDetails() {
      const response = await api.get(`${media_type}/${id}`);
      setMovieDetails(response.data);
    }

    loadMovieDetails();
  }, []);

  function handleWatchTrailer() {
    if (!movieDetails) return;

    const trailerUrl = `https://www.youtube.com/results?search_query=${movieDetails.title}+oficial+trailer`;
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
      vote_average: movieDetails.vote_average,
    });

    localStorage.setItem(WATCHLIST_KEY, JSON.stringify(watchList));

    alert("Filme salvo com sucesso!");
  }

  if (!movieDetails) {
    return <div>Carregando detalhes...</div>;
  }

  // const releaseYear = movieDetails.release_date.split("-")[0];

  return (
    <div
      className="-mt-4 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movieDetails.backdrop_path})`,
      }}
    >
      <div className="bg-black/85">
        <div className="m-auto flex justify-between px-4 py-8 md:h-[calc(100vh-68px)] md:px-6 lg:px-8">
          <div className="flex h-fit w-full items-center justify-between">
            <div className="flex flex-col gap-8">
              <h2>FILME</h2>

              <div className="flex items-baseline gap-2.5">
                <h1 className="flex text-3xl">{movieDetails.title}</h1>
                <span className="text-[15px] text-neutral-500"></span>
              </div>

              <div>
                <img
                  className="w-full md:hidden"
                  src={`https://image.tmdb.org/t/p/original/${movieDetails.backdrop_path}`}
                  alt=""
                />
              </div>

              <p className="max-w-137.5">{movieDetails.overview}</p>

              <div className="flex items-center gap-4 text-lg">
                <img src={logo} alt="" className="w-15" />
                <span>{movieDetails.vote_average.toFixed(1)}</span>
              </div>

              <div className="font-google flex gap-4">
                <Button
                  variant="outline"
                  size={"lg"}
                  onClick={handleWatchTrailer}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-tv-minimal-play-icon lucide-tv-minimal-play"
                  >
                    <path d="M15.033 9.44a.647.647 0 0 1 0 1.12l-4.065 2.352a.645.645 0 0 1-.968-.56V7.648a.645.645 0 0 1 .967-.56z" />
                    <path d="M7 21h10" />
                    <rect width="20" height="14" x="2" y="3" rx="2" />
                  </svg>
                  <span>Assistir trailer</span>
                </Button>

                <Button
                  variant={"outline"}
                  onClick={handleAddToWatchLater}
                  size={"lg"}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-bookmark-icon lucide-bookmark"
                  >
                    <path d="M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z" />
                  </svg>
                  <span>Favoritar</span>
                </Button>
              </div>
            </div>

            <div className="ml-50 hidden md:block">
              <img
                className="w-74"
                src={`https://image.tmdb.org/t/p/original/${movieDetails.poster_path}`}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
