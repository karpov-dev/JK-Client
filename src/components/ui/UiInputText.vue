<template>
  <label v-if="label" :data-required="required" class="input-label">
    {{label}}
  </label>

  <input v-bind="$attrs">
</template>

<script>
  export default {
    name: "UiInputText",
    props: {
      label: {
        type: String,
        default: null
      },

      required: {
        type: Boolean,
        default: false
      },

      message: {
        type: String,
        default: null
      }
    }
  }

</script>

<style scoped lang="scss">
  @import "src/scss/font";

  label {
    display: block;
    font-size: $font-size_small_x;
    color: $color-font__input-label;
    padding-bottom: 2px;
  }

  input {
    display: block;
    width: 100%;
    box-sizing: border-box;
  }
</style>