import { NavLink } from "react-router-dom";
import { House, Clapperboard, LucideTvMinimal, Bookmark } from "lucide-react";
import { getNavIconClass } from "@/utils/navIconClass";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `font-google flex flex-col items-center gap-1 text-[10px] font-semibold ${
    isActive ? "text-neutral-50" : "text-gray-400"
  }`;

export function MobileNavbar() {
  return (
    <div className="fixed bottom-0 z-99 flex h-16 w-full items-center justify-center gap-14 bg-black md:hidden [@media(max-width:360px)]:gap-10">
      <NavLink className={navLinkClass} to="/" end>
        {({ isActive }) => (
          <>
            <House className={getNavIconClass(isActive)} />
            <span>INICIO</span>
          </>
        )}
      </NavLink>

      <NavLink className={navLinkClass} to="/movies">
        {({ isActive }) => (
          <>
            <Clapperboard className={getNavIconClass(isActive)} />
            <span>FILMES</span>
          </>
        )}
      </NavLink>

      <NavLink className={navLinkClass} to="/tv-series">
        {({ isActive }) => (
          <>
            <LucideTvMinimal className={getNavIconClass(isActive)} />
            <span>SÉRIES</span>
          </>
        )}
      </NavLink>

      <NavLink className={navLinkClass} to="/watch-later">
        {({ isActive }) => (
          <>
            <Bookmark className={getNavIconClass(isActive)} />
            <span>FAVORITOS</span>
          </>
        )}
      </NavLink>
    </div>
  );
}
