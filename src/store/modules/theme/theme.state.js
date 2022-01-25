export default {
  AVAILABLE_THEMES: ["light", "auto", "dark"],
  DEFAULT_THEME: "light",
  THEME_STORAGE_VARIABLE_NAME: "theme",
  theme: localStorage.getItem("theme"),
};
