<template>
  <div class="card">
    <div class="card__header">
      <slot name="header"></slot>
    </div>

    <div class="card__content">
      <slot></slot>
    </div>

    <div class="card__footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "UiCard"
}
</script>

<style scoped lang="scss">
  @import "src/scss/design/cards";
</style>