<template>
  <ui-input-text v-bind="$attrs"></ui-input-text>
</template>

<script>
  import UiInputText from "./UiInputText";
  export default {
    name: "UiInputEmail",
    components: {
      UiInputText
    },
  }
</script>