const getSelectedThemeName = (state) => {
  state.theme = localStorage.getItem(state.THEME_STORAGE_VARIABLE_NAME);
  return state.theme;
}

const getThemeToUse = (state) => {
  let selectedThemeName = getSelectedThemeName(state);

  selectedThemeName = !selectedThemeName
    ? state.DEFAULT_THEME
    : selectedThemeName;

  return (selectedThemeName === state.THEME_NAMES.auto)
    ? getClientSystemTheme(state)
    : selectedThemeName;
}

const getClientSystemTheme = (state) => {
  const isSystemDarkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

  return isSystemDarkTheme
    ? state.THEME_NAMES.dark
    : state.THEME_NAMES.light;
}

export default {
  getSelectedThemeName,
  getThemeToUse,
  getClientSystemTheme
};
