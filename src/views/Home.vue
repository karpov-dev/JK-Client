<template>
  <ui-theme-switcher></ui-theme-switcher>
</template>

<script>
  import {LocalStorage} from "../services/localStorage";
  import UiThemeSwitcher from "../components/UiThemeSwitcher";

  export default {
    name: "Home",
    components: {UiThemeSwitcher},
    methods: {
      changeTheme(event) {
        const themeName = LocalStorage.getItem('theme');

        if (!themeName || themeName === 'dark') {
          LocalStorage.setItem('theme', 'light');
        } else {
          LocalStorage.setItem('theme', 'dark');
        }
      }
    }
  };
</script>

<style scoped lang="scss">
  button {
    color: red;
  }
</style>