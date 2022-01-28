<template>
  <base-button v-bind="$attrs">
    <slot></slot>
  </base-button>
</template>

<script>
  import BaseButton from "./BaseButton";

  export default {
    name: "BaseButtonOutline",
    components: {BaseButton}
  }
</script>

<style scoped lang="scss">
  button {
    color: var(--accent-color);
    border: 1px solid var(--accent-color);
    background-color: transparent;
    transition: background-color var(--transition-duration__fast) linear;
  }

  button:after {
    top: 0;
    left: 0;
    opacity: .1;
    position: absolute;
    content: '';
    background-color: var(--accent-color);
    width: 100%;
    height: 100%;
  }

  button:hover:not(:disabled) {
    color: var(--color-button-font__filled);
    background-color: var(--accent-color);
  }
</style>