import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import FavoritesIcon from "../../assets/icons/favorites.svg?react";

export function Header() {
  return (
    <header className="font-google sticky top-0 z-100 flex h-17 items-center justify-center bg-black font-semibold">
      <div className="flex w-full items-center justify-between px-4">
        <div className="flex items-center gap-10">
          <Link to="/" title="Home">
            <img
              className="h-10 duration-300 ease-in-out hover:scale-105"
              src={logo}
              alt=""
            />
          </Link>

          <div className="hidden gap-8 md:flex">
            <Link className="text-[15px]" to="/">
              MOVIES
            </Link>
            <Link className="text-[15px]" to="/">
              TV SHOWS
            </Link>
          </div>
        </div>

        <Link to="/watch-later" title="Watch list" className="hidden md:block">
          <FavoritesIcon className="size-7.5 duration-300 ease-in-out hover:text-[#e6b91e]" />
        </Link>
      </div>
    </header>
  );
}
