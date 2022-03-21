<template>
  <div class="select-button__container button-color__common button-group__allowed" :data-disabled="disabled">
    <input :id="value"
           :type="type"
           :value="value"
           :disabled="disabled"
           class="select-button__checkmark"
           v-bind="$attrs">
    <div class="select-button__label-container">
      <label :for="value" class="select-button__label"><slot>{{label}}</slot></label>
    </div>
  </div>
</template>

<script>
  import {uiConstants} from "../../../services/constants/ui.constants";
  import {isContainElement} from "../../../services/arrays.service";

  export default {
    name: "UiSelectButton",
    props: {
      label: String,
      value: String,
      disabled: Boolean,
      type: {
        type: String,
        default: uiConstants.select.type.radio,
        validator(value) {
          return isContainElement(value, Object.values(uiConstants.select.type));
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "src/scss/design/selects";
</style>