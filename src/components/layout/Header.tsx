import { Container } from "./Container";
import { Bookmark } from "lucide-react";
import { SearchBar } from "./SearchBar";
import { Button } from "../ui/button";
import { NavLink } from "react-router-dom";

export function Header() {
  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `flex h-full items-center text-[15px] tracking-wide border-b-2 ${
      isActive
        ? "text-yellow-400 border-b-amber-400"
        : "text-neutral-200 border-b-transparent"
    }`;

  const navIconClass = (isActive: boolean, baseClass = "") =>
    [baseClass, isActive ? "stroke-amber-400 stroke-2" : ""]
      .filter(Boolean)
      .join(" ");

  return (
    <Container className="font-google sticky top-0 z-100 mb-4 flex h-16 items-center justify-center bg-black/75 font-semibold backdrop-blur-md">
      <header className="flex h-full w-full items-center justify-between">
        <div className="flex h-full items-center gap-10">
          <NavLink to="/" title="Home" end>
            <div className="text-[27px] font-bold md:mb-1">
              <span>Cine</span>
              <span className="text-amber-400">byte</span>
            </div>
          </NavLink>

          <div className="hidden h-full gap-8 md:flex">
            <NavLink className={navLinkClass} to="/movies">
              FILMES
            </NavLink>
            <NavLink className={navLinkClass} to="/tv-series">
              SÉRIES
            </NavLink>
            <NavLink className={navLinkClass} to="/about">
              SOBRE
            </NavLink>
          </div>
        </div>

        <div className="ml-5 flex items-center gap-3">
          <SearchBar />

          <Button
            size={"icon-lg"}
            variant={"outline"}
            className="hidden md:flex"
            asChild
          >
            <NavLink to="/watch-later" title="Watch list">
              {({ isActive }) => (
                <Button
                  size={"icon-lg"}
                  variant={"secondary"}
                  className={`hidden bg-transparent hover:bg-transparent! md:flex ${isActive ? "border border-amber-400" : "border border-transparent"}`}
                >
                  <Bookmark
                    className={navIconClass(
                      isActive,
                      "size-6 duration-300 ease-in-out hover:text-[#e6b91e]",
                    )}
                  />
                </Button>
              )}
            </NavLink>
          </Button>
        </div>
      </header>
    </Container>
  );
}
