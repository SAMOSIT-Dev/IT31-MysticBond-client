import { Outlet } from "react-router";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ScrollToHash from "../components/ScrollToHash";

export default function RootLayout() {
  return (
    <>
      <ScrollToHash />
      {/* <NavBar isRootPage /> */}
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
