import { NavLink } from "react-router-dom";
import { House, Clapperboard, LucideTv, Bookmark } from "lucide-react";

export function MobileNavbar() {
  return (
    <div className="fixed bottom-0 z-99 flex h-16 w-full items-center justify-center gap-14 bg-black md:hidden [@media(max-width:360px)]:gap-10">
      <NavLink
        className="font-google flex flex-col items-center gap-1 text-[10px] font-semibold"
        to="/"
      >
        <House />
        <span>INICIO</span>
      </NavLink>

      <NavLink
        className="font-google flex flex-col items-center gap-1 text-[10px] font-semibold"
        to="/movies"
      >
        <Clapperboard />
        <span>FILMES</span>
      </NavLink>

      <NavLink
        className="font-google flex flex-col items-center gap-1 text-[10px] font-semibold"
        to="/tv-series"
      >
        <LucideTv />
        <span>SÉRIES</span>
      </NavLink>

      <NavLink
        className="font-google flex flex-col items-center gap-1 text-[10px] font-semibold"
        to="/watch-later"
      >
        <Bookmark />
        <span>FAVORITOS</span>
      </NavLink>
    </div>
  );
}
