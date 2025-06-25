import { Navigate, Outlet } from "react-router-dom";
import { isAuth } from "../hook/utils";

const PublicRoute = () => {
  const auth = isAuth();

  if (auth) {
    return <Navigate to={"/"} replace />;
  }

  return <Outlet />;
};

export default PublicRoute;
