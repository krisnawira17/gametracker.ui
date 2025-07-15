import { Navigate, Outlet } from "react-router-dom";
import { getToken } from "../hook/utils";

const PublicRoute = () => {
  const auth = getToken();
  console.log(auth);

  if (auth.isAuthenticated) {
    return <Navigate to={"/"} replace />;
  }

  return <Outlet />;
};

export default PublicRoute;
