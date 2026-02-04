import { Link } from "react-router-dom";
import logo from "../../../assets/imdb.png";
import FavoritesIcon from "../../../assets/icons/star.svg?react";

export function Header() {
  return (
    <header className="font-oswald flex h-17 items-center justify-between bg-black px-7 py-4">
      <Link to="/">
        <img className="h-10" src={logo} alt="" />
      </Link>
      <div className="flex gap-8">
        <Link className="tracking-widest" to="/">
          MOVIES
        </Link>
        <Link className="tracking-widest" to="/">
          TV SHOWS
        </Link>
      </div>
      <Link to="/">
        <FavoritesIcon className="size-7.5 hover:text-[#e6b91e]" />
      </Link>
    </header>
  );
}
