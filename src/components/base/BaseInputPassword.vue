<template>
  <base-input-text v-bind="$attrs"></base-input-text>
</template>

<script>
import BaseInputText from "./BaseInputText";

export default {
  name: "BaseInputPassword",
  components: {BaseInputText}
}
</script>

<style scoped>

</style>