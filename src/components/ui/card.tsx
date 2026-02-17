import { Link } from "react-router-dom";
import type { Media } from "@/types/media";

export function Card(media: Media) {
  return (
    <article>
      <Link
        to={`/${media.media_type}/${media.id}`}
        className="block rounded-sm outline-2 outline-offset-3 outline-transparent transition-all duration-300 ease-in-out hover:scale-102 hover:outline-neutral-50 focus-visible:scale-102 focus-visible:outline-neutral-50"
      >
        <img
          className="aspect-2/3 w-full rounded-sm object-cover"
          src={`https://image.tmdb.org/t/p/w500${media.poster_path}`}
          title={media.title ?? media.name}
          alt={media.title ?? media.name}
          loading="lazy"
        />
      </Link>
    </article>
  );
}
