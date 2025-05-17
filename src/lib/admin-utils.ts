
// Simple admin authentication utilities

export const isAdminLoggedIn = (): boolean => {
  return localStorage.getItem("adminAuthenticated") === "true";
};

export const adminLogout = (): void => {
  localStorage.removeItem("adminAuthenticated");
  window.location.href = "/admin/login";
};

export const adminLogin = (): void => {
  localStorage.setItem("adminAuthenticated", "true");
};
