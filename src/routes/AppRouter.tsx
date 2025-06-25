import { Navigate, Route, Routes } from "react-router-dom";
import { routesProtected, routesPublic } from "./routes";
import Layout from "../pages/Layout";
import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";
function AppRouter() {
  return (
    <Routes>
      {/* Protected */}
      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<Layout />}>
          {routesProtected.map(({ path, name, element }) => (
            <Route key={name} path={path} element={element} />
          ))}
        </Route>
      </Route>

      {/* Public */}
      <Route element={<PublicRoute />}>
        <Route path="/" element={<Layout />}>
          {routesPublic.map(({ path, name, element }) => (
            <Route key={name} path={path} element={element} />
          ))}
        </Route>
      </Route>

      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}

export default AppRouter;
