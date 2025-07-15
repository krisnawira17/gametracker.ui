import { jwtDecode } from "jwt-decode";
import { useEffect } from "react";
import { getToken, removeToken } from "./utils";
type JwtPayload = { exp: number };

function isTokenExpired(token: string) {
  try {
    const { exp } = jwtDecode<JwtPayload>(token);
    return exp < Date.now() / 1000;
  } catch {
    return true;
  }
}

export function useTokenChecker() {
  useEffect(() => {
    const token = getToken().value;
    const interval = setInterval(() => {
      if (token && isTokenExpired(token)) {
        removeToken();
        window.location.reload();
      }
    }, 60 * 1000);
    return () => clearInterval(interval);
  }, []);
}
