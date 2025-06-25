import { Navigate, Outlet } from "react-router-dom";
import { isAuth } from "../hook/utils";

const ProtectedRoute = () => {
  const auth = isAuth();

  if (!auth) {
    return <Navigate to={"/login"} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
