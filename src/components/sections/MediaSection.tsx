import { Link } from "react-router-dom";
import type { Media } from "../../types/media";

type MediaSectionProps = {
  title: string;
  data: Media[];
};

export function MediaSection({ title, data }: MediaSectionProps) {
  if (data.length === 0) return null;

  return (
    <section>
      <div className="flex">
        <h3 className="mb-3 text-[26px] font-semibold tracking-wider">
          {title}
        </h3>
      </div>

      <div className="flex flex-wrap gap-x-5 gap-y-6">
        {data.map((movie) => {
          return (
            <article key={movie.id}>
              <Link to={`movie/${movie.id}`} title={movie.title ?? movie.name}>
                <img
                  className="w-60 rounded-md"
                  src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                  alt=""
                />
              </Link>
            </article>
          );
        })}
      </div>
    </section>
  );
}
