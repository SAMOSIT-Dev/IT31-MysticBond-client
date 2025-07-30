import { Outlet, useLocation } from "react-router";
import NavBar from "../components/NavBar";
import ScrollToHash from "../components/ScrollToHash";
import { AnimatePresence } from "framer-motion";
import AnimatedOutlet from "../components/AnimatedOutlet";

export default function RootLayout() {
  const location = useLocation();
  return (
    <>
      <ScrollToHash />
      <NavBar isRootPage />
      <main>
        <AnimatedOutlet />
      </main>
    </>
  );
}
