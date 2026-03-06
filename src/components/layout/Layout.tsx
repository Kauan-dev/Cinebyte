import { Header } from "./Header";
import { Outlet } from "react-router";
import { MobileNavbar } from "./MobileNavbar";
import { Footer } from "./Footer";
import { Toaster } from "@/components/ui/sonner";

export function Layout() {
  return (
    <div className="page">
      <Header />

      <main className="mx-auto mb-17 md:mb-0">
        <Outlet />
        <Footer />
      </main>

      <Toaster
        position="top-center"
        expand={true}
        richColors
        toastOptions={{
          style: {
            marginTop: "3.8rem",
          },
          duration: 2500,
        }}
      />
      <MobileNavbar />
    </div>
  );
}
