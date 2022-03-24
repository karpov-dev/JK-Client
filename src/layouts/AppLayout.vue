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
    themeName() { return store.getters["theme/getThemeToUse"]; }
  }
};
</script>

<style scoped lang="scss">
  @import url("../styles/color-schemas/light-schema.scss");
  @import url("../styles/color-schemas/dark-schema.scss");
</style>
