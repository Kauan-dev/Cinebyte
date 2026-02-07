import { Header } from "./Header";
import { Outlet } from "react-router";
import { Footer } from "./Footer";

// Layout exclusivo para páginas que não devem herdar os paddings do layout padrão
// (ex: Movie, que usa backdrop full-width)
export function MovieLayout() {
  return (
    <div className="page">
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
