<template>
  <ui-card-content>
    <transition name="fade">
      <form-sign-in-by-password v-if="localSelectedType === FormSignInByPassword.name"
                                class="top-left"
                                :email="user.email"
                                :password="user.password"
                                @on-success="$emit('on-password-way-success', $event)"
                                @on-failed="$emit('on-password-way-failed', $event)"
                                @on-inactive-user-error="$emit('on-password-way-user-inactive-error', $event)"
                                @on-wrong-password-error="$emit('on-password-way-wrong-password-error', $event)"
                                @on-user-not-found="$emit('on-password-way-user-not-found', $event)"
                                @on-server-error="$emit('on-password-way-server-error', $event)"
                                @on-loading="$emit('on-loading', $event)"
                                @on-input="onInput"
      ></form-sign-in-by-password>
    </transition>

    <transition name="fade">
      <form-security-code-send v-if="localSelectedType === FormSecurityCodeSend.name"
                               class="top-right"
                               :email="user.email"
                               :codeType="getSecurityCodeCodeType"
                               @on-success="$emit('on-email-way-send-success', $event)"
                               @on-server-error="$emit('on-email-way-server-error', $event)"
                               @on-loading="$emit('on-loading', $event)"
                               @on-input="onInput"
      ></form-security-code-send>
    </transition>

    <ui-separator-line-text>VIA</ui-separator-line-text>

    <ui-button-group>
      <ui-select-button name="signin-variant"
                        class="button-color__select-orange"
                        label="Password"
                        type="radio"
                        :value="FormSignInByPassword.name"
                        :checked="localSelectedType === FormSignInByPassword.name"
                        @change="onChangeForm"/>

      <ui-select-button name="signin-variant"
                        class="button-color__select-red"
                        label="Email"
                        type="radio"
                        :value="FormSecurityCodeSend.name"
                        :checked="localSelectedType === FormSecurityCodeSend.name"
                        @change="onChangeForm"/>
    </ui-button-group>
  </ui-card-content>
</template>

<script>
  import FormSignInByPassword from "./formSignInByPassword";
  import UiSeparatorLineText from "../../ui/separator/UiSeparatorLineText";
  import UiButtonGroup from "../../ui/button/UiButtonGroup";
  import UiSelectButton from "../../ui/input/UiSelectButton";
  import UiCardForm from "../../ui/card/UiCardForm";
  import UiCardContent from "../../ui/card/UiCardContent";
  import {uiConstants} from "../../../services/constants/ui.constants";
  import FormSecurityCodeSend from "../security-code/formSecurityCodeSend";

  export default {
    name: "formSignInTypeSwitcher",

    components: {
      FormSecurityCodeSend,
      UiCardContent,
      UiCardForm,
      UiSelectButton,
      UiButtonGroup,
      UiSeparatorLineText,
      FormSignInByPassword,
    },

    props: {
      openForm: {
        type: String,
        default: FormSignInByPassword.name
      },
      email: String,
      password: String
    },

    data() { return {
      FormSecurityCodeSend,
      FormSignInByPassword,
      localSelectedType: this.openForm,
      user: {
        email: this.email,
        password: this.password
      }
    }},

    methods: {
      onInput(event) {
        this.user[event.target.name] = event.target.value;
        this.$emit('on-input', event);
      },

      onChangeForm(event) { this.localSelectedType = event.target.value; }
    },

    computed: {
      getSecurityCodeCodeType() { return uiConstants.securityCode.codeType.userActivation; }
    }
  }
</script>

<style scoped lang="scss">
  .fade-leave-active {
    display: none;
  }

  .fade-leave-active,
  .fade-enter-active {
    animation-duration: var(--transition-duration__medium);
  }
</style>