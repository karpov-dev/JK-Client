<template>
  <base-input-text v-bind="$attrs">
    <template v-slot:under><slot name="under"></slot></template>
    <template v-slot:over><slot name="over"></slot></template>
    <template v-slot:before><slot name="before"></slot></template>
    <template v-slot:after><slot name="after"></slot></template>
  </base-input-text>
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