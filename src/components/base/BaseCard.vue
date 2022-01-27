<template>
  <div class="base-сard">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "BaseCard"
  }
</script>

<style scoped lang="scss">
  .base-сard {
    position: relative;
    display: flex;
    flex-direction: column;
    border: 0;
    padding: var(--padding__medium);
    border-radius: var(--border-radius__medium);
    background-color: var(--color-background__card);
    box-shadow: var(--box-shadow__medium);
  }
</style>