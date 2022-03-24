<template>
  <ui-card-form title="Sign In">
    <template v-slot:description>
      <label>Don't have an account? </label>
      <a href="javascript:void(0);" @click="$emit('on-to-sign-up')">Sign Up</a>
    </template>

    <form-sign-in-by-password v-if="formsVisibility[FormSignInByPassword.name]"
                              @on-loading="this.isLoading = true"
                              @on-loading-done="this.isLoading = false"
                              @on-success="$emit('on-success-sign-in')"
                              @on-error-not-found="$emit('on-error-user-not-found')"
                              @on-error-inactive="$emit('on-error-user-inactive')"/>

    <form-security-code-send v-if="formsVisibility[FormSecurityCodeSend.name]"
                             :method="uiConstants.securityCode.method.email"
                             :code-type="uiConstants.securityCode.codeType.authorization"
                             @on-loading="this.isLoading = true"
                             @on-loading-done="this.isLoading = false"
                             @on-success-send="$emit('on-success-code-send', $event)"
                             @on-error-send="$emit('on-error-code-send')"/>

    <ui-separator-line-text>VIA</ui-separator-line-text>

    <ui-button-group>
      <ui-select-button label="Password"
                        name="sign-in-variant"
                        type="radio"
                        class="button-color__sign-in-password"
                        :value="FormSignInByPassword.name"
                        :checked="getVisibleFormName === FormSignInByPassword.name"
                        @change="changeVisibleFormTo(FormSignInByPassword.name)"/>

      <ui-select-button label="Email Code"
                        name="sign-in-variant"
                        type="radio"
                        class="button-color__sign-in_email-code"
                        :value="FormSecurityCodeSend.name"
                        :checked="getVisibleFormName === FormSecurityCodeSend.name"
                        @change="changeVisibleFormTo(FormSecurityCodeSend.name)"/>
    </ui-button-group>

    <ui-spinner :is-show="isLoading"></ui-spinner>
  </ui-card-form>
</template>

<script>
  import FormSignInByPassword from "./formSignInByPassword";
  import FormSecurityCodeSend from "../security-code/formSecurityCodeSend";
  import UiSeparatorLineText from "../../ui/separator/UiSeparatorLineText";
  import UiButtonGroup from "../../ui/button/UiButtonGroup";
  import UiSelectButton from "../../ui/input/UiSelectButton";
  import UiCardForm from "../../ui/card/UiCardForm";
  import UiSpinner from "../../ui/spinner/UiSpinner";
  import {isContainElement} from "../../../services/arrays.service";
  import {uiConstants} from "../../../services/constants/ui.constants";


  export default {
    name: "formSignInTypeSwitcher",

    components: {
      FormSecurityCodeSend,
      UiSpinner,
      UiCardForm,
      UiSelectButton,
      UiButtonGroup,
      UiSeparatorLineText,
      FormSignInByPassword,
    },

    props: {
      startForm: {
        type: String,
        default: FormSignInByPassword.name,
        validator(value) { return isContainElement(value, [FormSignInByPassword.name, FormSecurityCodeSend.name]); }
      }
    },

    data() { return {
      isLoading: false,
      formsVisibility: {
        [FormSignInByPassword.name]: this.startForm === FormSignInByPassword.name,
        [FormSecurityCodeSend.name]: this.startForm === FormSecurityCodeSend.name
      },
      FormSignInByPassword,
      FormSecurityCodeSend,
      uiConstants
    }},

    methods: {
      changeVisibleFormTo(formName) {
        Object.keys(this.formsVisibility).forEach(key => this.formsVisibility[key] = key === formName)
      },
    },

    computed: {
      getVisibleFormName() {
        return Object.keys(this.formsVisibility).find(key => this.formsVisibility[key] === true);
      }
    }
  }
</script>

<style scoped lang="scss">

</style>