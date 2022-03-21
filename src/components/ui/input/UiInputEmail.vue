<template>
  <ui-input v-bind="$attrs"></ui-input>
</template>

<script>
  import UiInput from "./UiInput";

  export default {
    name: "UiInputEmail",
    components: {UiInput}
  }
</script>