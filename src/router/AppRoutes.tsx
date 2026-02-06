import { Routes, Route } from "react-router";

import { Layout } from "../components/layout/Layout";
import { MovieLayout } from "../components/layout/MovieLayout";

import { Home } from "../pages/Home/Home";
import { Movie } from "../pages/Movie/Movie";
import { NotFound } from "../pages/NotFound";

export function AppRoutes() {
  return (
    <Routes>
      {/* Layout padrão (com padding) */}
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
      </Route>

      {/* Layout sem padding (Movie) */}
      <Route element={<MovieLayout />}>
        <Route path="/movie/:id" element={<Movie />} />
      </Route>

      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
