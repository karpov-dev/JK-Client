<template>
  <ui-input v-bind="$attrs" type="password"></ui-input>
</template>

<script>
  import UiInput from "./UiInput";

  export default {
    name: "UiInputPassword",
    components: {UiInput}
  }
</script>