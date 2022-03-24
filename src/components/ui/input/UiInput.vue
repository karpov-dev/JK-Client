<template>
  <div class="input input-color__standard">
    <slot name="over">
      <label v-if="label" class="input__label" :data-required="required">{{label}}</label>
    </slot>

    <div class="input__horizontal-content">
      <slot name="before"></slot>
      <input class="input__input-tag" v-bind="$attrs" v-model="inputValue">
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
      required: Boolean,
      value: String
    },
    data() { return {
      inputValue: this.value
    }}
  }
</script>

<style scoped lang="scss">
  @import "src/styles/design/input/input-base";
</style>