import { Navigate, Outlet } from "react-router";
import { useAuth } from "../../hooks/useAuth";

export default function ProtectedPageLayout() {
  const { user, isAuthenticated } = useAuth();

  // if (!user || !isAuthenticated) {
  //   return <Navigate to="/auth/login" replace />;
  // }

  return <Outlet />;
}
