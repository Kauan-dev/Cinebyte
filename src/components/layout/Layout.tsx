import { Header } from "./Header";
import { Outlet } from "react-router";
import { Footer } from "./Footer";

export function Layout() {
  return (
    <div className="page">
      <Header />

      <main className="mx-auto py-4">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
