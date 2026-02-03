import { Routes, Route } from "react-router";

import { Layout } from "../components/layout/Layout";
import { Home } from "../pages/Home/Home.tsx";
import { NotFound } from "../pages/NotFound.tsx";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
