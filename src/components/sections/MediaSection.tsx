import { Link } from "react-router-dom";
import type { Media } from "../../types/media";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type MediaSectionProps = {
  title: string;
  data: Media[];
};

export function MediaSection({ title, data }: MediaSectionProps) {
  if (data.length === 0) return null;

  return (
    <section className="overflow-hidden py-3">
      <h3 className="mb-3 px-4 text-[26px] font-semibold tracking-wide">
        {title}
      </h3>

      <Carousel
        className="w-full select-none"
        opts={{
          align: "start",
          slidesToScroll: "auto",
          dragFree: true,
        }}
      >
        <CarouselContent className="pr-6 pl-6">
          {data.map((media) => (
            <CarouselItem
              key={media.id}
              className="max-w-[50%] basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6"
            >
              <Link
                to={`/movie/${media.id}`}
                title={media.title ?? media.name}
                className="group/card block"
              >
                <div className="relative overflow-hidden rounded-md transition-transform duration-300 hover:scale-105">
                  <img
                    className="aspect-[2/3] w-full object-cover"
                    src={`https://image.tmdb.org/t/p/w500${media.poster_path}`}
                    alt={media.title ?? media.name}
                    loading="lazy"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover/card:opacity-100">
                    <div className="absolute right-0 bottom-0 left-0 p-4">
                      <h4 className="mb-2 line-clamp-2 text-sm font-semibold text-white md:text-base">
                        {media.title ?? media.name}
                      </h4>

                      {media.vote_average > 0 && (
                        <div className="flex items-center gap-1.5">
                          <svg
                            className="h-4 w-4 shrink-0 text-yellow-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <span className="text-xs font-medium text-white md:text-sm">
                            {media.vote_average.toFixed(1)}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            </CarouselItem>
          ))}

          <CarouselItem aria-hidden className="pointer-events-none basis-4" />
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}
