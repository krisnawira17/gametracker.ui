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
    const interval = setInterval(() => {
      const token = getToken().value;
      if (token && isTokenExpired(token)) {
        removeToken();
        window.location.reload();
      }
    }, 60 * 1000);
    return () => clearInterval(interval);
  }, []);
}
