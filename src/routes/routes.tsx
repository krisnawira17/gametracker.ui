import type { JSX } from "react";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import Search from "../pages/Search";

interface RouteConfig {
  path: string;
  element: JSX.Element;
  name?: string;
}

export const routesProtected: RouteConfig[] = [
  {
    path: "/",
    element: <Home />,
    name: "home",
  },
  {
    path: "/search",
    element: <Search />,
    name: "search",
  },
];

export const routesPublic: RouteConfig[] = [
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
