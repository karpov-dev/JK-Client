export default {
  setTheme: (state, themeName) => {
    if (state.AVAILABLE_THEMES.indexOf(themeName) === -1) return false;

    localStorage.setItem(state.THEME_STORAGE_VARIABLE_NAME, themeName);
    state.theme = themeName;
  },
};
