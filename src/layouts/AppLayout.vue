<template>
  <div id="app" :data-theme="themeName">
    <div class="wrapper">
      <ui-notification-queue></ui-notification-queue>

      <transition name="fade">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
import store from "../store";
import UiNotificationQueue from "../components/ui/notification/UiNotificationQueue";

export default {
  name: "AppLayout",
  components: {UiNotificationQueue},
  computed: {
    themeName() { return store.getters["theme/getThemeToUse"]; }
  }
};
</script>

<style scoped lang="scss">
  @import url("../styles/color-schemas/light-schema.scss");
  @import url("../styles/color-schemas/dark-schema.scss");
</style>
