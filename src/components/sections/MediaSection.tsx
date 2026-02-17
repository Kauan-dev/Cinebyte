import type { Media } from "../../types/media";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card } from "../ui/card";

type MediaSectionProps = {
  title: string;
  data: Media[];
};

export function MediaSection({ title, data }: MediaSectionProps) {
  if (data.length === 0) return null;

  return (
    <section className="overflow-hidden py-3">
      <h3 className="mb-3 px-4 text-[26px] font-semibold tracking-wide md:px-6 lg:px-8">
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
        <CarouselContent className="pr-5 pl-6 md:pr-7 md:pl-8 lg:pr-9 lg:pl-10">
          {data.map((media) => (
            <CarouselItem
              key={media.id}
              className="max-w-[50%] basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6"
            >
              <Card
                id={media.id}
                title={media.title}
                name={media.name}
                poster_path={media.poster_path}
                media_type={media.media_type}
              />
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
