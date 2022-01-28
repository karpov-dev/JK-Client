<template>
  <base-button v-bind="$attrs">
    <slot></slot>
  </base-button>
</template>

<script>
  import BaseButton from "./BaseButton";

  export default {
    name: "ButtonBaseFill",
    components: {BaseButton}
  }
</script>

<style scoped lang="scss">
  button {
    color: var(--color-button-font__filled);
    background-color: var(--accent-color);
  }

  button:hover:not(:disabled) {
    filter: var(--brightness__hover);
  }
</style>