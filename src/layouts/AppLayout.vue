<template>
  <div id="app" :data-theme="themeName">
    <div class="wrapper">
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
import store from "../store";

export default {
  name: "AppLayout",
  computed: {
    themeName() { return store.getters["storage/getThemeToUse"] }
  }
};
</script>

<style scoped lang="scss">
@import url("../scss/themes/light.scss");
@import url("../scss/themes/dark.scss");
</style>
