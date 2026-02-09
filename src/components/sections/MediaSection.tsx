import type { Media } from "../../types/media";
import { Carousel } from "../ui/Carousel";
import { MediaCard } from "../ui/MediaCard";

type MediaSectionProps = {
  title: string;
  data: Media[];
};

export function MediaSection({ title, data }: MediaSectionProps) {
  if (data.length === 0) return null;

  return (
    <Carousel title={title}>
      {data.map((media) => (
        <MediaCard key={media.id} media={media} />
      ))}
    </Carousel>
  );
}
