import { Navigate, Outlet } from "react-router-dom";
import { getToken } from "../hook/utils";

const ProtectedRoute = () => {
  const auth = getToken();
  console.log(auth);

  if (!auth.isAuthenticated) {
    return <Navigate to={"/login"} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
