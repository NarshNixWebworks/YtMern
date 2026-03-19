import { Navigate, Outlet } from "react-router-dom";
import AppLayout from "../layout/AppLayout";
import { useAuth } from "../../context/AuthContext";

function Protectedroute() {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return <div className="">Loading......</div>;
  }
  return isAuthenticated ? (
    <AppLayout>
      <Outlet />
    </AppLayout>
  ) : (
    <Navigate to="/login" replace />
  );
}

export default Protectedroute;
