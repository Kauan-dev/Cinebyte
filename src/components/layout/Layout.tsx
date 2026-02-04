import { Header } from "./Header";
import { Outlet } from "react-router";
import { Footer } from "./Footer";

export function Layout() {
  return (
    <div className="page">
      <Header />

      <main className="mx-auto max-w-360 px-4 py-6 md:px-8 md:py-8">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
