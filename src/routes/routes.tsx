import type { JSX } from "react";
import Login from "../pages/Login";
import Register from "../pages/Register";

interface RouteConfig {
  path: string;
  element: JSX.Element;
  name?: string;
}

const routes: RouteConfig[] = [
  {
    path: "/login",
    element: <Login />,
    name: "login",
  },
  {
    path: "/register",
    element: <Register />,
    name: "register",
  },
];

export default routes;
