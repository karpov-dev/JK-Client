<template>
  <label class="select select-color__standard" :data-disabled="disabled">
    <input class="select-checkmark__standard"
           v-bind="$attrs"
           :type="type"
           :disabled="disabled">
    {{label}}
  </label>
</template>

<script>
  import {uiConstants} from "../../../services/constants/ui.constants";
  import {isContainElement} from "../../../services/arrays.service";

  export default {
    name: "UiSelectStandard",
    props: {
      label: String,
      disabled: Boolean,
      type: {
        type: String,
        default: uiConstants.select.type.radio,
        validator(value) { return isContainElement(value, Object.values(uiConstants.select.type)); }
      }
    }
  }
</script>

<style scoped lang="scss">

</style>