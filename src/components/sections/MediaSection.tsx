import type { Media } from "../../types/media";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card } from "../ui/card";
import { NavLink } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { Container } from "../layout/Container";

type MediaSectionProps = {
  sectionTitle: string;
  sectionId: string;
  data: Pick<Media, "id" | "title" | "name" | "poster_path" | "media_type">[];
};

export function MediaSection({
  sectionTitle,
  sectionId,
  data,
}: MediaSectionProps) {
  if (data.length === 0) return null;

  return (
    <section className="overflow-hidden py-3">
      <Container className="mb-1 flex items-end justify-between gap-4 md:gap-0">
        <h3 className="mb-3 text-[20px] font-semibold md:text-[24px]">
          {sectionTitle}
        </h3>
        <NavLink to={`/see-more/${sectionId}`} className="">
          <div className="mb-3.25 flex items-end text-[16px] font-medium text-neutral-400 transition-all duration-300 ease-out hover:translate-x-1 hover:text-neutral-100 md:text-[18px]">
            <span className="whitespace-nowrap">Mostrar mais</span>
            <ChevronRight
              size={24}
              className="transition-all duration-300 ease-out"
            />
          </div>
        </NavLink>
      </Container>

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
              className="max-w-[45%] basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6"
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
