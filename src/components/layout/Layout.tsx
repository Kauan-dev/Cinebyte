import { Header } from "./Header/Header";
import { Outlet } from "react-router";
import { Footer } from "./Footer";

export function Layout() {
  return (
    <div className="layout">
      <Header />

      <Outlet />

      <Footer />
    </div>
  );
}
