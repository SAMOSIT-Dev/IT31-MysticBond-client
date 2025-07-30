import { AnimatePresence } from "framer-motion";
import { Outlet, useLocation } from "react-router";
import AnimatedOutlet from "../../components/AnimatedOutlet";
import AnimatedLayout from "../../components/AnimatedLayout";

export default function AuthLayout() {
  return (
    <div className="w-screen h-screen min-h-0 max-h-screen flex flex-col p-7 bg-black max-sm:p-0">
      <AnimatedOutlet />
    </div>
  );
}
