export const getToken = () => {
  const token = localStorage.getItem("token");
  return { isAuthenticated: !!token, value: token };
};

export const removeToken = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");

  window.location.reload();
};

export const getUsername = () => {
  const userData = JSON.parse(localStorage.getItem("user") || "{}");
  const { username } = userData;

  return username;
};

export const formatDate = (dateStr: string) => {
  const date = new Date(dateStr);
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
};
