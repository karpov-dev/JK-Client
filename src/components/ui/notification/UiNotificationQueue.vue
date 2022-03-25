<template>
  <div class="notification-queue">
    <div class="notification-queue__container">
      <transition-group name="fade">

        <div v-for="notification in notificationManager.notifications" :key="notification.id" class="notification-queue__toast-container top-center">
          <ui-notification :notification="notification" @on-close="this.notificationManager.remove($event.id)"/>
        </div>

      </transition-group>
    </div>
  </div>
</template>

<script>
  import {NotificationManager} from "../../../services/notification/NotificationManager";
  import {Notification} from "../../../services/notification/Notification";
  import {uiConstants} from "../../../services/constants/ui.constants";
  import UiNotification from "./UiNotification";
  import UiTransitionGroup from "../UiTransitionGroup";
  import UiButton from "../button/UiButton";

  export default {
    name: "UiNotificationQueue",

    components: {
      UiButton,
      UiTransitionGroup,
      UiNotification
    },

    mounted() {
      this.$eventBus.subscribe(uiConstants.globalEvents.notification.show, (notification) => {
        this.notificationManager.add(notification);
      });

      this.$eventBus.subscribe(uiConstants.globalEvents.notification.hide, (id) => {
        this.notificationManager.remove(id);
      });
    },

    data() { return {
      notificationManager: new NotificationManager(),
    }},
  }
</script>

<style scoped lang="scss">
  @import "src/styles/design/animations/fade";

  .notification-queue {
    position: fixed;
    top: 2%;
    left: 0;
    right: 0;
    margin: auto;
    width: 22%;
    min-width: 100px;
    z-index: 1000;
  }

  .notification-queue__container {
    position: relative;
  }

  .notification-queue__toast-container {
    padding-bottom: 10px;
  }
</style>