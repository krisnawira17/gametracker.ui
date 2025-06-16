import axios from "./axios";

export const login = async (credential: {
  email: string;
  password: string;
}) => {
  const res = await axios.post("/api/user/login", credential);

  console.log(res.data);
  const { token, user } = res.data;

  localStorage.setItem("token", token);
  localStorage.setItem("user", JSON.stringify(user));

  return { token, user };
};

export const register = async (credential: {
  email: string;
  username: string;
  password: string;
}) => {
  const res = await axios.post("/api/user/register", credential);
  return res.data;
};
