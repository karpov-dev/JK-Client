<template>
  <div class="select-button__container button-color__common button-group__allowed">
    <input :id="value"
           :type="type"
           class="select-button__checkmark"
           v-bind="$attrs" >
    <div class="select-button__label-container">
      <label :for="value" class="select-button__label">{{label}}</label>
    </div>
  </div>
</template>

<script>
import {uiConstants} from "../../services/constants/ui.constants";
import {isContainElement} from "../../services/arrays.service";

export default {
  name: "BaseSelectButton",
  props: {
    label: String,
    value: String,
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