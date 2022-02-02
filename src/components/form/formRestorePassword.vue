<template>
  <ui-card-simple title="Restore password" description="Fill new password">
    <ui-input name="password" title="Password"></ui-input>
    <ui-input name="repeatPassword" title="Repeat password"></ui-input>

    <ui-button variant="success">Restore</ui-button>
  </ui-card-simple>
</template>

<script>
  import UiCardSimple from "../ui/card/UiCardSimple";
  import UiInput from "../ui/input/UiInput";
  import UiButton from "../ui/button/UiButton";
  export default {
    name: "formRestorePassword",
    components: {UiButton, UiInput, UiCardSimple}
  }
</script>