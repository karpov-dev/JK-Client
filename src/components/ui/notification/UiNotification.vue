<template>
  <div class="notification" :style="getNotificationColorCssVariable">
    <div class="notification__content">
      <div class="notification__close" @click="$emit('on-close')"></div>

      <div class="notification__title" role="alert">
        <label>{{title}}</label>
      </div>

      <div class="notification__description">
        <slot><label>{{description}}</label></slot>
      </div>
    </div>
  </div>
</template>

<script>
  import {uiConstants} from "../../../services/constants/ui.constants";
  import {isContainElement} from "../../../services/arrays.service";

  export default {
    name: "UiNotification",

    props: {
      title: {
        type: String,
        required: true
      },
      description: String,
      variant: {
        type: String,
        default: uiConstants.notification.variant.default,
        validator(value) { return isContainElement(value, Object.values(uiConstants.notification.variant)); }
      }
    },

    computed: {
      getNotificationColorCssVariable() {
        return `--notification__background-color: var(--color-notification__${this.variant})`;
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "src/styles/design/notification/notification";
</style>