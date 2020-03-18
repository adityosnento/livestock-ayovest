export const isLoggedIn = () => {
  const token = localStorage.getItem("token");

  return !token && (window.location.href = "/");
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("fullname");
  localStorage.removeItem("id");

  return (window.location.href = "/");
};
