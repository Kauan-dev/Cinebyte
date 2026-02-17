import { Routes, Route } from "react-router";

import { Layout } from "../components/layout/Layout";

import { Home } from "../pages/Home/Home";
import { MediaDetails } from "../pages/MediaDetails/MediaDetails";
import { WatchLater } from "../pages/WatchLater/WatchLater";

import { NotFound } from "../pages/NotFound";

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path=":media_type/:id" element={<MediaDetails />} />
        <Route path="/watch-later" element={<WatchLater />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
