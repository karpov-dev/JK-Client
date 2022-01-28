<template>
  <base-button-outline v-if="isOutline" v-bind="$attrs">
    <slot></slot>
  </base-button-outline>

  <base-button-fill v-if="isFill" v-bind="$attrs">
    <slot></slot>
  </base-button-fill>
</template>

<script>
  import BaseButtonOutline from "../../base/BaseButtonOutline";
  import BaseButtonFill from "../../base/BaseButtonFill";

  const BUTTON_TYPES = {
    fill: 'fill',
    outline: 'outline'
  }

  export default {
    name: "UiButton",
    components: {BaseButtonFill, BaseButtonOutline},
    props: {
      type: {
        type: String,
        default: BUTTON_TYPES.outline,
        validator(value) { return Object.values(BUTTON_TYPES).indexOf(value) !== -1; }
      }
    },
    computed: {
      isFill() { return this.type === BUTTON_TYPES.fill; },
      isOutline() { return this.type === BUTTON_TYPES.outline; }
    }
  }
</script>