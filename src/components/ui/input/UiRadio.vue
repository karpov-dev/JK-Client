<template>
  <base-select v-bind="$attrs" type="radio"></base-select>
</template>

<script>
import BaseSelect from "../../base/BaseSelect";

export default {
  name: "UiRadio",
  components: {BaseSelect}
}
</script>

<style scoped>

</style>