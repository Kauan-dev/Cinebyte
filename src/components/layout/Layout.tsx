import { Header } from "./Header";
import { Outlet } from "react-router";
import { MobileNavbar } from "./MobileNavbar";
import { Toaster } from "@/components/ui/sonner";

export function Layout() {
  return (
    <div className="page">
      <Header />

      <main className="mx-auto mb-16 flex min-h-screen flex-col justify-between md:mb-0">
        <Outlet />
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
