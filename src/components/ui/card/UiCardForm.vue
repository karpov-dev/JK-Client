<template>
  <ui-card class="card-form">
    <template v-slot:header>
      <div class="card-form__header">
        <div class="card-form__header-title">
          <slot name="title">
            <div v-html="title"></div>
          </slot>
        </div>

        <div class="card-form__header-description">
          <slot name="description">
            <div v-html="description"></div>
          </slot>
        </div>
      </div>
    </template>

    <template v-slot:default>
      <div class="card-form__content">
        <slot></slot>
      </div>
    </template>

    <template v-slot:footer>
      <slot name="footer"></slot>
    </template>
  </ui-card>
</template>

<script>
  import UiCard from "./UiCard";
  export default {
    name: "UiCardForm",
    components: {UiCard},
    props: {
      title: String,
      description: String
    }
  }
</script>

<style scoped lang="scss">
  @import "src/styles/design/card/card-form";
</style>