export const applyAdminTheme = (theme) => {
  const root = document.documentElement;

  if (theme === "dark") {
    root.classList.add("dark");
  } else if (theme === "light") {
    root.classList.remove("dark");
  } else {
    const isDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    root.classList.toggle("dark", isDark);
  }
};

export const getAdminTheme = () => {
  return localStorage.getItem("admin-theme") || "system";
};

export const setAdminTheme = (theme) => {
  localStorage.setItem("admin-theme", theme);
  applyAdminTheme(theme);
};
