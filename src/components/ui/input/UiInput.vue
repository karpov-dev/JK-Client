<template>
  <div class="input input-color__standard">
    <slot name="over">
      <label v-if="label" class="input__label" :data-required="required">{{label}}</label>
    </slot>

    <div class="input__horizontal-content">
      <slot name="before"></slot>
      <input class="input__input-tag" v-bind="$attrs">
      <slot name="after"></slot>
    </div>

    <slot name="under"></slot>
  </div>

</template>

<script>
  export default {
    name: "UiInput",
    props: {
      label: String,
      required: Boolean
    }
  }
</script>

<style scoped lang="scss">
  @import "src/scss/design/inputs";
</style>