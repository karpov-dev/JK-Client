<template>
  <base-select v-bind="$attrs" type="checkbox"></base-select>
</template>

<script>
  import BaseSelect from "../../base/BaseSelect";

  export default {
    name: "UiCheckbox",
    components: {BaseSelect}
  }
</script>

<style scoped>

</style>