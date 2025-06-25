export const isAuth = () => {
  const token = localStorage.getItem("token");
  return { isAuthenticated: !!token };
};

export const getUsername = () => {
  const userData = JSON.parse(localStorage.getItem("user") || "{}");
  const { username } = userData;

  return username;
};
