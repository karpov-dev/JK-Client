<template>
  <ui-card-simple title="Restore password" description="Fill new password">
    <ui-input name="password" title="Password"></ui-input>
    <ui-input name="repeatPassword" title="Repeat password"></ui-input>

    <ui-button-group>
      <ui-button variant="danger" @click="$emit('oncancel')">Cancel</ui-button>
      <ui-button variant="success">Restore</ui-button>
    </ui-button-group>

  </ui-card-simple>
</template>

<script>
  import UiCardSimple from "../ui/card/UiCardSimple";
  import UiInput from "../ui/input/UiInput";
  import UiButton from "../ui/button/UiButton";
  import UiInputGroup from "../ui/input/UiInputGroup";
  import UiButtonGroup from "../ui/button/UiButtonGroup";
  export default {
    name: "formRestorePassword",
    components: {UiButtonGroup, UiInputGroup, UiButton, UiInput, UiCardSimple}
  }
</script>