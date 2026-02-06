import { Header } from "./Header";
import { Footer } from "./Footer";
import { Outlet } from "react-router";

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
