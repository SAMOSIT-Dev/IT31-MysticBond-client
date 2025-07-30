import { Navigate, Outlet, useLocation } from "react-router";
import { useAuth } from "../../hooks/useAuth";
import ScrollToTop from "../../components/ScrollToTop";
import { AnimatePresence } from "framer-motion";
import AnimatedOutlet from "../../components/AnimatedOutlet";

export default function ProtectedPageLayout() {
  const { user, isAuthenticated, pending } = useAuth();
  const location = useLocation();

  if (pending) return null;

  // if (!user || !isAuthenticated) {
  //   return <Navigate to="/auth/login" replace />;
  // }

  return (
    <>
      <ScrollToTop />
      <AnimatedOutlet />
    </>
  );
}
