const THEME_NAMES = {
    dark: 'dark',
    auto: 'auto',
    light: 'light'
}

export default {
  THEME_NAMES,
  AVAILABLE_THEMES: [THEME_NAMES.dark, THEME_NAMES.auto, THEME_NAMES.light],
  DEFAULT_THEME: THEME_NAMES.auto,
  THEME_STORAGE_VARIABLE_NAME: "theme",
  theme: localStorage.getItem("theme"),
};
