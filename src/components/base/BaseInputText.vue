<template>
  <div class="input__container">
    <slot name="before"></slot>
    <input>
    <slot name="after"></slot>
  </div>
</template>

<script>
  export default {
    name: "BaseInputText"
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
    border-radius: var(--border-radius__small);
    background-color: var(--color-input__background);
  }
</style>