import { Footer } from "@/common/Footer";
import { Nav } from "@/common/Nav";
import { Outlet } from "react-router-dom";

export default function DefaultLayout() {
  return (
    <div className="bg-home min-h-[100vh]">
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
}
