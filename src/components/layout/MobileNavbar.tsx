import { NavLink } from "react-router-dom";
import {
  House,
  Clapperboard,
  LucideTvMinimal,
  Bookmark,
  LucideInfo,
} from "lucide-react";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `font-google flex flex-col items-center gap-1 text-[10px] font-semibold ${
    isActive ? "text-amber-400" : "text-gray-400"
  }`;

const navIconClass = (isActive: boolean, baseClass = "") =>
  [baseClass, isActive ? "stroke-amber-400 stroke-2" : ""]
    .filter(Boolean)
    .join(" ");

export function MobileNavbar() {
  return (
    <div className="fixed bottom-0 z-99 flex h-16 w-full items-center justify-center gap-10 bg-black md:hidden [@media(max-width:360px)]:gap-7">
      <NavLink className={navLinkClass} to="/" end>
        {({ isActive }) => (
          <>
            <House className={navIconClass(isActive)} />
            <span>INICIO</span>
          </>
        )}
      </NavLink>

      <NavLink className={navLinkClass} to="/movies">
        {({ isActive }) => (
          <>
            <Clapperboard className={navIconClass(isActive)} />
            <span>FILMES</span>
          </>
        )}
      </NavLink>

      <NavLink className={navLinkClass} to="/tv-series">
        {({ isActive }) => (
          <>
            <LucideTvMinimal className={navIconClass(isActive)} />
            <span>SÉRIES</span>
          </>
        )}
      </NavLink>

      <NavLink className={navLinkClass} to="/watch-later">
        {({ isActive }) => (
          <>
            <Bookmark className={navIconClass(isActive)} />
            <span>SALVOS</span>
          </>
        )}
      </NavLink>

      <NavLink className={navLinkClass} to="/about">
        {({ isActive }) => (
          <>
            <LucideInfo className={navIconClass(isActive)} />
            <span>SOBRE</span>
          </>
        )}
      </NavLink>
    </div>
  );
}
