<template>
  <div class="input__container">
    <slot name="before"></slot>
    <input v-bind="$attrs">
    <slot name="after"></slot>
  </div>
</template>

<script>
  export default {
    name: "BaseInput",
  }
</script>

<style scoped>
  input {
    color: var(--color-font);
    background: transparent;
    border-width: 0;
    width: 100%;
    box-sizing: border-box;
    padding: var(--padding__medium) var(--padding__large);
  }

  .input__container {
    display: flex;
    flex-direction: row;
    margin-top: var(--margin__small-xxx);
    margin-bottom: var(--margin__small-xx);
    border-radius: var(--border-radius__small);
    background-color: var(--color-input__background);
    border: 1px solid var(--color-input__border);
  }
</style>