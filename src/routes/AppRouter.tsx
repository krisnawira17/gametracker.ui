import { Navigate, Route, Routes } from "react-router-dom";
import routes from "./routes";
function AppRouter() {
  return (
    <Routes>
      {routes.map(({ path, name, element }) => (
        <Route key={name} path={path} element={element} />
      ))}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}

export default AppRouter;
