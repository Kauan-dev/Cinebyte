import { Routes, Route } from "react-router";

import { Layout } from "../components/layout/Layout";
import { MovieLayout } from "../components/layout/MovieLayout";

import { Home } from "../pages/Home/Home";
import { Movie } from "../pages/Movie/Movie";
import { WatchLater } from "../pages/WatchLater/WatchLater";

import { NotFound } from "../pages/NotFound";

export function AppRoutes() {
  return (
    <Routes>
      {/* Layout padrão do projeto (com padding) */}
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/watch-later" element={<WatchLater />} />
      </Route>

      {/* Layout sem padding */}
      <Route element={<MovieLayout />}>
        <Route path="/movie/:id" element={<Movie />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
