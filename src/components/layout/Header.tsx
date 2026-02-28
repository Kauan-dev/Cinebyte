import { Link } from "react-router-dom";
import { Container } from "./Container";
import logo from "../../assets/images/logo.png";
import FavoritesIcon from "../../assets/icons/favorites.svg?react";
import { SearchBar } from "./SearchBar";
import { Button } from "../ui/button";

export function Header() {
  return (
    <Container className="font-google sticky top-0 z-100 mb-4 flex h-17 items-center justify-center bg-black font-semibold">
      <header className="flex w-full items-center justify-between">
        <div className="flex items-center gap-10">
          <Link to="/" title="Home">
            <img
              className="h-10 min-w-20 duration-300 ease-in-out hover:scale-105"
              src={logo}
              alt=""
            />
          </Link>

          <div className="hidden gap-8 md:flex">
            <Link className="text-[15px] tracking-wide" to="/movies">
              FILMES
            </Link>
            <Link className="text-[15px] tracking-wide" to="/tv-series">
              SÉRIES
            </Link>
          </div>
        </div>

        <div className="ml-8 flex items-center gap-3">
          <SearchBar />

          <Button
            size={"icon-lg"}
            variant={"secondary"}
            className="hidden md:flex"
          >
            <Link to="/watch-later" title="Watch list">
              <FavoritesIcon className="size-5.5 duration-300 ease-in-out hover:text-[#e6b91e]" />
            </Link>
          </Button>
        </div>
      </header>
    </Container>
  );
}
