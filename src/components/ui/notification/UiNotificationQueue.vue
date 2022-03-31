<template>
  <div class="notification-queue">
    <div class="notification-queue__container">
      <transition-group name="fade">

        <ui-notification v-for="notification in notificationManager.notifications"
                         :key="notification.id"
                         :notification="notification"
                         class="animation-fade-in-top animation-fade-out-top notification-queue__toast-container "
                         @on-close="this.notificationManager.remove($event.id)"
        ></ui-notification>

      </transition-group>
    </div>
  </div>
</template>

<script>
  import {NotificationManager} from "../../../services/notification/NotificationManager";
  import {uiConstants} from "../../../services/constants/ui.constants";
  import UiNotification from "./UiNotification";
  import UiButton from "../button/UiButton";

  export default {
    name: "UiNotificationQueue",

    components: {
      UiButton,
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
  .notification-queue {
    position: fixed;
    top: 2%;
    left: 0;
    right: 0;
    margin: auto;
    width: 25%;
    min-width: 300px;
    z-index: 1000;
  }

  .notification-queue__container {
    position: relative;
  }

  .notification-queue__toast-container {
    margin-bottom: 10px;
  }
</style>