<template>
  <ui-card-form title="Sign In">
    <template v-slot:description>
      Don't have an account?
      <a href="javascript:void(0);" @click="fireEvent('on-to-signup')">Sign Up</a>
    </template>

    <component :is="activeComponent"
               @on-loading="isLoading = true"
               @on-loading-done="isLoading = false"
    ></component>

    <ui-separator-line-text>OR</ui-separator-line-text>

    <ui-button-group>
      <ui-select-button class="button-color__sign-in-password"
                        name="sign-in-variant"
                        type="radio"
                        :value="FormSignInByPassword.name"
                        :checked="activeComponent === FormSignInByPassword.name"
                        label="Use Password"
                        @change="activeComponent = $event.target.value"
      ></ui-select-button>

      <ui-select-button class="button-color__sign-in_email-code"
                        name="sign-in-variant"
                        type="radio"
                        :value="FormSignInByEmail.name"
                        :checked="activeComponent === FormSignInByEmail.name"
                        label="Use Email Code"
                        @change="activeComponent = $event.target.value"
      ></ui-select-button>
    </ui-button-group>

    <ui-spinner :is-show="isLoading"></ui-spinner>
  </ui-card-form>
</template>

<script>
  import FormSignInByPassword from "../form/formSignInByPassword";
  import FormSignInByEmail from "../form/formSignInByEmail";
  import UiSeparatorLineText from "../ui/separator/UiSeparatorLineText";
  import UiButtonGroup from "../ui/button/UiButtonGroup";
  import UiSelectButton from "../ui/input/UiSelectButton";
  import UiCardForm from "../ui/card/UiCardForm";
  import UiSpinner from "../ui/spinner/UiSpinner";

  export default {
    name: "flowSignInSwitcher",
    components: {
      UiSpinner,
      UiCardForm,
      UiSelectButton,
      UiButtonGroup,
      UiSeparatorLineText,
      FormSignInByPassword,
      FormSignInByEmail
    },
    props: {
      activeComponentName: {
        type: String,
        default: FormSignInByPassword.name,
        required: true
      }
    },
    data() { return {
      isLoading: false,
      activeComponent: this.activeComponentName,
      FormSignInByEmail,
      FormSignInByPassword
    }}
  }
</script>

<style scoped lang="scss">
  @import "src/scss/design/buttons";
</style>