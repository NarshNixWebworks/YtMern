import { Outlet } from "react-router-dom";
import AppLayout from "../layout/AppLayout";

function Protectedroute() {
  const isAuthenticated = true;
  const loading = false;

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
