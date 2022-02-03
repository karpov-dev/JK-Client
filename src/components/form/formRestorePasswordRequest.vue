<template>
  <ui-card-simple title="Restore Password Request" description="Fill your email to restore password">
    <ui-input name="email" title="Email" :value="email"></ui-input>

    <ui-button-group>
      <ui-button variant="danger" @click="$emit('oncancel')">Cancel</ui-button>
      <ui-button variant="common" @click="onSendRequest">Send Email</ui-button>
    </ui-button-group>
  </ui-card-simple>
</template>

<script>
  import UiCardSimple from "../ui/card/UiCardSimple";
  import UiInput from "../ui/input/UiInput";
  import UiButton from "../ui/button/UiButton";
  import UiButtonGroup from "../ui/button/UiButtonGroup";

  export default {
    name: "formRestorePasswordRequest",
    components: {UiButtonGroup, UiButton, UiInput, UiCardSimple},
    props: {
      email: String
    },
    methods: {
      onSendRequest() {
        this.$emit('onsendrequest');

        //TODO: Send request
        //TODO: Fire "oncodesend"
      }
    }
  }
</script>