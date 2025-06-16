import { useState } from "react";
import * as authService from "../Services/authServices";

type AuthState = {
  token: string;
  user: {
    id: string;
    email: string;
  };
};
export const useLogin = () => {
  const [user, setUser] = useState<AuthState | null>(null);

  const login = async (email: string, password: string) => {
    try {
      const userData = await authService.login({ email, password });
      setUser(userData);
    } catch (err) {
      console.error("Login failed", err);
    }
  };

  return { login, user };
};

export const useRegister = () => {
  const register = async (
    email: string,
    username: string,
    password: string
  ) => {
    try {
      await authService.register({
        email,
        username,
        password,
      });
      window.location.href = "/login";
    } catch (err) {
      console.error("Register failed", err);
    }
  };

  return { register };
};
