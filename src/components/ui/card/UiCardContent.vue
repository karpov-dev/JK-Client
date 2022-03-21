<template>
  <ui-card class="card-content">
    <slot></slot>
  </ui-card>
</template>

<script>
import UiCard from "./UiCard";
export default {
  name: "UiCardContent",
  components: {UiCard}
}
</script>

<style scoped lang="scss">
  @import "src/scss/design/cards";
</style>