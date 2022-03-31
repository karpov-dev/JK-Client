<template>
  <ui-card>
    <template v-slot:header>
      <div class="card-content__header">
        <slot name="header"></slot>
      </div>
    </template>

    <template v-slot:default>
      <div class="card-content__content">
        <slot></slot>
      </div>
    </template>

    <template v-slot:footer>
      <div class="card-content__footer">
        <slot name="footer"></slot>
      </div>
    </template>

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