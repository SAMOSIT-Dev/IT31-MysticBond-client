import { Navigate, Outlet } from "react-router";
import { useAuth } from "../../hooks/useAuth";
import ScrollToTop from "../../components/ScrollToTop";

export default function ProtectedPageLayout() {
  const { user, isAuthenticated, pending } = useAuth();

  if (pending) return null;

  // if (!user || !isAuthenticated) {
  //   return <Navigate to="/auth/login" replace />;
  // }

  return (
    <>
      <ScrollToTop />
      <Outlet />
    </>
  );
}
