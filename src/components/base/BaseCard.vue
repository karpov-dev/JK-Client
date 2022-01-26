<template>
  <div class="base-bard">
    <div class="base-bard__header">
      <slot name="header"></slot>
    </div>

    <div class="base-bard__content">
      <slot></slot>
    </div>

    <div class="base-bard__footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "BaseCard"
  }
</script>

<style scoped lang="scss">
  .base-bard {
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