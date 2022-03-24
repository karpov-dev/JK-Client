<template>
  <flow-sign-in-switcher v-if="formsVisibility[FlowSignInSwitcher.name]"
                         @on-to-sign-up="$emit('on-to-sign-up')"
                         @on-success-sign-in="$emit('on-success-sign-in')"
                         @on-success-code-send="onSecurityCodeSend"
                         @on-error-user-not-found=""
                         @on-error-user-inactive=""
                         @on-error-code-send=""/>

  <flow-sign-in-code-check v-if="formsVisibility[FlowSignInCodeCheck.name]"
                           :email="this.user.email"
                           @on-cancel="changeVisibleFormTo(FlowSignInSwitcher.name)"/>
</template>

<script>
  import FlowSignInSwitcher from "../form/sign-in/formSignInTypeSwitcher";
  import UiCardForm from "../ui/card/UiCardForm";
  import {uiConstants} from "../../services/constants/ui.constants";
  import FlowSignInCodeCheck from "./flowSignInCodeCheck";

  export default {
    name: "flowSignIn",

    components: {
      FlowSignInCodeCheck,
      UiCardForm,
      FlowSignInSwitcher
    },

    data() { return {
      user: {
        email: null,
        password: null
      },
      formsVisibility: {
        [FlowSignInSwitcher.name]: true,
        [FlowSignInCodeCheck.name]: false
      },
      FlowSignInSwitcher,
      FlowSignInCodeCheck,
      uiConstants
    }},

    methods: {
      onSecurityCodeSend(event) {
        this.user.email = event.email;
        this.changeVisibleFormTo(FlowSignInCodeCheck.name);
      },

      changeVisibleFormTo(formName) {
        Object.keys(this.formsVisibility).forEach(key => this.formsVisibility[key] = key === formName)
      },
    }
  }
</script>
