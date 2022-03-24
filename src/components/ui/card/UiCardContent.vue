<template>
  <ui-card>
    <div class="card-content">
      <slot></slot>
    </div>
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
  @import "src/styles/design/card/card-content";
</style>