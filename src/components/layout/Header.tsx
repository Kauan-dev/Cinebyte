import { Link } from "react-router-dom";
import { Container } from "./Container";
import logo from "../../assets/images/logo.png";
import FavoritesIcon from "../../assets/icons/favorites.svg?react";

export function Header() {
  return (
    <Container className="font-google sticky top-0 z-100 mb-4 flex h-17 items-center justify-center bg-black font-semibold">
      <header className="flex w-full items-center justify-between">
        <div className="flex items-center gap-10">
          <Link to="/" title="Home">
            <img
              className="h-10 duration-300 ease-in-out hover:scale-105"
              src={logo}
              alt=""
            />
          </Link>

          <div className="hidden gap-8 md:flex">
            <Link className="text-[15px] tracking-wider" to="/movies">
              FILMES
            </Link>
            <Link className="text-[15px]" to="/">
              SÉRIES
            </Link>
          </div>
        </div>

        <Link to="/watch-later" title="Watch list" className="hidden md:block">
          <FavoritesIcon className="size-7.5 duration-300 ease-in-out hover:text-[#e6b91e]" />
        </Link>
      </header>
    </Container>
  );
}
