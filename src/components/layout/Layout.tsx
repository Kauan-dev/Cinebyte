import { Header } from "./Header";
import { Outlet } from "react-router";
import { Footer } from "./Footer";

export function Layout() {
  return (
    <div className="page">
      <Header />

      <main className="mx-auto px-4 py-4">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
