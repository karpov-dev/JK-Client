<template>
  <base-select-standard v-if="isStandard" v-bind="$attrs" :type="type"/>
  <base-select-button v-if="isButton" v-bind="$attrs" :type="type"/>
</template>

<script>
  import BaseSelectButton from "../../base/BaseSelectButton";
  import BaseSelectStandard from "../../base/BaseSelectStandard";
  import {isContainElement} from "../../../services/arrays.service";
  import {uiConstants} from "../../../services/constants/ui.constants";

  export default {
    name: 'UiSelect',
    components: {BaseSelectStandard, BaseSelectButton},
    props: {
      variant: {
        type: String,
        default: uiConstants.select.variant.standard,
        validator(value) { return isContainElement(value, Object.values(uiConstants.select.variant)); }
      },
      type: {
        type: String,
        default: uiConstants.select.type.radio,
        validator(value) { return isContainElement(value, Object.values(uiConstants.select.type)); }
      }
    },
    computed: {
      isStandard() { return this.variant === uiConstants.select.variant.standard; },
      isButton() { return this.variant === uiConstants.select.variant.button; },
    },
  }
</script>