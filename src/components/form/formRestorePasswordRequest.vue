<template>
  <ui-card-simple title="Restore Password Request" description="Fill your email to restore password">
    <div class="card__content">
      <ui-input name="email" title="Email"></ui-input>

      <ui-button variant="common">Send Email</ui-button>
    </div>
  </ui-card-simple>
</template>

<script>
  import UiCardSimple from "../ui/card/UiCardSimple";
  import UiInput from "../ui/input/UiInput";
  import UiButton from "../ui/button/UiButton";

  export default {
    name: "formRestorePasswordRequest",
    components: {UiButton, UiInput, UiCardSimple}
  }
</script>

<style scoped>
  .card__content {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
</style>