import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";
import type { Media, WatchListItem } from "@/types/media";
import imdbLogo from "../../assets/images/imdbLogo.png";
import { Button } from "../../components/ui/button";
import { Bookmark, BookmarkPlus } from "lucide-react";
import { toast } from "sonner";
import { MonitorPlay } from "lucide-react";
import { useTitle } from "@/hooks/useTitle";
import { Loading } from "@/components/layout/Loading";

const WATCHLIST_KEY = "cinebyte:watchList";

export function MediaDetails() {
  const { media_type: mediaType, id } = useParams();
  const [mediaDetails, setMediaDetails] = useState<Media | null>(null);
  const [isFavorited, setIsFavorited] = useState(false);

  useTitle(mediaDetails ? `${mediaDetails.title ?? mediaDetails.name}` : "");

  useEffect(() => {
    async function loadMediaDetails() {
      const response = await api.get(`${mediaType}/${id}`);
      setMediaDetails(response.data);

      const watchList: WatchListItem[] = JSON.parse(
        localStorage.getItem(WATCHLIST_KEY) ?? "[]",
      );

      const alreadySaved = watchList.some(
        (savedMovie) => savedMovie.id === response.data.id,
      );
      setIsFavorited(alreadySaved);
    }

    loadMediaDetails();
  }, [mediaType, id]);

  function handleWatchTrailer() {
    if (!mediaDetails) return;

    const trailerUrl = `https://www.youtube.com/results?search_query=${mediaDetails.title ?? mediaDetails.name}+${releaseYear}+oficial+trailer`;
    window.open(trailerUrl, "_blank", "noopener,noreferrer");
  }

  function handleAddToWatchLater() {
    if (!mediaDetails) return;

    const watchList: WatchListItem[] = JSON.parse(
      localStorage.getItem(WATCHLIST_KEY) ?? "[]",
    );

    const hasMovie = watchList.some(
      (savedMovie) => savedMovie.id === mediaDetails.id,
    );

    if (hasMovie) {
      alert("Você já possui essa mídia salva!");
      return;
    }

    watchList.unshift({
      id: mediaDetails.id,
      title: mediaDetails.title ?? mediaDetails.name,
      poster_path: mediaDetails.poster_path,
      media_type: mediaType as "movie" | "tv",
    });

    localStorage.setItem(WATCHLIST_KEY, JSON.stringify(watchList));

    setIsFavorited(true);
    toast.success("Mídia salva com sucesso!");
  }

  function handleRemoveFavorite(
    mediaToRemoveID: number,
    mediaToRemoveTitle: string,
  ) {
    const hasConfirm = confirm(
      `Tem certeza que deseja remover "${mediaToRemoveTitle}" dos favoritos?`,
    );

    if (!hasConfirm) return;

    const watchList: WatchListItem[] = JSON.parse(
      localStorage.getItem(WATCHLIST_KEY) ?? "[]",
    );

    const mediaFilter = watchList.filter(
      (media) => media.id !== mediaToRemoveID,
    );

    localStorage.setItem(WATCHLIST_KEY, JSON.stringify(mediaFilter));
    setIsFavorited(false);
    toast.success("Mídia removida com sucesso!");
  }

  if (!mediaDetails) {
    return <Loading />;
  }

  const releaseYear = (
    mediaDetails.release_date ??
    mediaDetails.first_air_date ??
    ""
  ).split("-")[0];

  return (
    <div className="-mt-4">
      {/* MOBILE */}
      <div className="md:hidden">
        <img
          className="w-full mask-[linear-gradient(to_bottom,black_65%,transparent)]"
          src={`https://image.tmdb.org/t/p/original/${mediaDetails.backdrop_path}`}
          alt=""
        />

        <div className="m-auto flex justify-between px-4 py-8">
          <div className="flex h-fit w-full items-center justify-between">
            <div className="flex flex-col gap-8">
              <div>
                <h1 className="flex items-end gap-2 text-3xl">
                  {mediaDetails.title ?? mediaDetails.name}
                </h1>
                <div className="mt-1 flex gap-1 text-[15px] text-neutral-500">
                  <span>{mediaType === "movie" ? "FILME" : "SÉRIE"}</span>
                  <span>- {releaseYear}</span>
                </div>
              </div>

              <p className="max-w-137.5">{mediaDetails.overview}</p>

              <div className="flex items-center gap-4 text-lg">
                <img src={imdbLogo} alt="" className="w-15" />
                <span>
                  {mediaDetails.vote_average === 0
                    ? "N/A"
                    : mediaDetails.vote_average.toFixed(1)}
                </span>
              </div>

              <div className="font-google flex gap-4">
                <Button
                  size={"lg"}
                  variant={"outline"}
                  onClick={handleWatchTrailer}
                  className="flex gap-3"
                >
                  <MonitorPlay className="size-5" />
                  <span className="text-[15px]">Assistir trailer</span>
                </Button>

                <Button
                  onClick={() => {
                    if (isFavorited) {
                      handleRemoveFavorite(
                        mediaDetails.id,
                        mediaDetails.title ?? mediaDetails.name ?? "",
                      );
                    } else {
                      handleAddToWatchLater();
                    }
                  }}
                  variant={"outline"}
                  size={"icon-lg"}
                >
                  {isFavorited ? (
                    <Bookmark fill="#FFFFFF" className="size-5" />
                  ) : (
                    <BookmarkPlus className="size-5" />
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PC */}
      <div
        className="hidden bg-cover bg-center bg-no-repeat md:block"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${mediaDetails.backdrop_path})`,
        }}
      >
        <div className="bg-black/85">
          <div className="m-auto flex min-h-[calc(100vh-68px)] items-center justify-between px-4 py-8 md:px-6 lg:h-[calc(100vh-68px)] lg:px-8">
            <div className="flex h-fit w-full items-center justify-between">
              <div className="flex flex-col gap-8">
                <h2>{mediaType === "movie" ? "FILME" : "SÉRIE"}</h2>

                <div className="flex items-baseline gap-2.5">
                  <div>
                    <h1 className="flex items-end gap-2 text-3xl">
                      {mediaDetails.title ?? mediaDetails.name}
                    </h1>

                    <span className="mb-0.75 text-[15px] text-neutral-500">
                      {releaseYear}
                    </span>
                  </div>
                </div>

                <p className="max-w-137.5">{mediaDetails.overview}</p>

                <div className="flex items-center gap-4 text-lg">
                  <img src={imdbLogo} alt="" className="w-15" />
                  <span>
                    {mediaDetails.vote_average === 0
                      ? "N/A"
                      : mediaDetails.vote_average.toFixed(1)}
                  </span>
                </div>

                <div className="font-google flex gap-4">
                  <Button
                    size={"lg"}
                    variant={"outline"}
                    onClick={handleWatchTrailer}
                    className="flex gap-3"
                  >
                    <MonitorPlay className="size-5.5" />
                    <span>Assistir trailer</span>
                  </Button>

                  <Button
                    onClick={() => {
                      if (isFavorited) {
                        handleRemoveFavorite(
                          mediaDetails.id,
                          mediaDetails.title ?? mediaDetails.name ?? "",
                        );
                      } else {
                        handleAddToWatchLater();
                      }
                    }}
                    variant={"outline"}
                    size={"icon-lg"}
                  >
                    {isFavorited ? (
                      <Bookmark fill="#FFFFFF" className="size-4.5" />
                    ) : (
                      <BookmarkPlus className="size-4.5" />
                    )}
                  </Button>
                </div>
              </div>

              <div className="ml-50">
                <img
                  className="w-74"
                  src={`https://image.tmdb.org/t/p/original/${mediaDetails.poster_path}`}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
