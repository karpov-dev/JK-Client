<template>
  <ui-card-simple title="Checking security code" description="Fill security code from email">
    <ui-input title="Security code"></ui-input>

    <ui-button-group>
      <ui-button variant="danger" @click="$emit('oncancel')">Cancel</ui-button>
      <ui-button variant="common" @click="onCheck">Check</ui-button>
    </ui-button-group>
  </ui-card-simple>
</template>

<script>
  import UiCardSimple from "../ui/card/UiCardSimple";
  import UiInput from "../ui/input/UiInput";
  import UiButtonGroup from "../ui/button/UiButtonGroup";
  import UiButton from "../ui/button/UiButton";

  export default {
    name: "formCheckCode",
    components: {UiButtonGroup, UiInput, UiCardSimple, UiButton},
    methods: {
      onCheck() {
        //TODO: add check code request
        this.$emit('onsuccess')
      }
    }
  }
</script>

<style scoped>

</style>