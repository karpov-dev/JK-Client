export default {
  getTheme: (state) => {
    const theme = localStorage.getItem(state.THEME_STORAGE_VARIABLE_NAME);

    state.theme = theme ? theme : state.DEFAULT_THEME;
    return state.theme;
  },

  getAvailableThemes: (state) => {
    return state.AVAILABLE_THEMES;
  },
};
