<template>
  <button v-bind="$attrs"
          class="button button-group__allowed"
          role="button"
          tabindex="0"
          :class="{'button-outlined' : isOutlined, 'button-filled' : isFilled}">
    <slot></slot>
  </button>
</template>

<script>
  import {uiConstants} from "../../../services/constants/ui.constants";
  import {isContainElement} from "../../../services/arrays.service";

  export default {
    name: "UiButton",
    props: {
      type: {
        type: String,
        default: uiConstants.button.type.outline,
        validator(value) { return isContainElement(value, Object.values(uiConstants.button.type)); }
      }
    },
    computed: {
      isFilled() { return this.type === uiConstants.button.type.fill; },
      isOutlined() { return this.type === uiConstants.button.type.outline; }
    }
  }
</script>

<style scoped lang="scss">
  @import "src/styles/design/button/style";
</style>