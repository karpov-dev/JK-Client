<template>
  <div class="notification" :style="getNotificationColorCssVariable" role="alert">
    <div class="notification__content">
      <div v-if="notification.isClosable" class="notification__close" @click="$emit('on-close', {id: this.notification.id})">
        <div class="notification__close-svg"></div>
      </div>

      <div class="notification__title">
        <div v-html="notification.title"/>
      </div>

      <div class="notification__description">
        <div v-html="notification.description"/>
      </div>
    </div>
  </div>
</template>

<script>
  import {Notification} from "../../../services/notification/Notification";

  export default {
    name: "UiNotification",

    props: {
      notification: Notification
    },

    computed: {
      getNotificationColorCssVariable() {
        return `--notification__background-color: var(--color-notification__${this.notification.variant})`;
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "src/styles/design/notification/notification";
</style>