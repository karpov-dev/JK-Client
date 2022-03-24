<template>
  <div class="notification-queue">
    <div class="notification-queue__container">
      <transition-group name="fade">

        <div v-for="notification in notificationManager.notifications" :key="notification.id" class="notification-queue__toast-container top-center">
          <ui-notification :notification="notification" @on-close="onClose"/>
        </div>

      </transition-group>
    </div>
  </div>
  <ui-button class="button-color__warning" @click="add">Add notification</ui-button>
</template>

<script>
  import {Notification} from "../../../services/notification/Notification";
  import {NotificationManager} from "../../../services/notification/NotificationManager";
  import UiNotification from "./UiNotification";
  import UiButton from "../button/UiButton";
  import UiTransitionGroup from "../UiTransitionGroup";

  export default {
    name: "UiNotificationQueue",

    components: {UiTransitionGroup, UiButton, UiNotification},

    data() { return {
      notificationManager: new NotificationManager(),
    }},

    mounted() {
      this.notificationManager = new NotificationManager();
      this.$eventBus.subscribe('on-change-theme', this.add)
    },

    methods: {
      add() {
        const notification = new Notification('Success', 'You logged success', 'success', 3000);
        this.notificationManager.add(notification);
      },

      onClose(event) {
        this.notificationManager.remove(event.id);
      }
    }
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
    width: fit-content;
  }

  .notification-queue__container {
    position: relative;
  }

  .notification-queue__toast-container {
    padding-bottom: 10px;
  }
</style>