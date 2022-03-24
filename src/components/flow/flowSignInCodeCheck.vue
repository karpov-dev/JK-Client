<template>
  <ui-card-form title="Check security code" description="Fill security code from email message">
    <form-security-code-check :email="email"
                              :code-type="uiConstants.securityCode.codeType.authorization"
                              @on-cancel="$emit('on-cancel')"/>
  </ui-card-form>
</template>

<script>
  import UiCardForm from "../ui/card/UiCardForm";
  import FormSecurityCodeCheck from "../form/security-code/formSecurityCodeCheck";
  import {uiConstants} from "../../services/constants/ui.constants";

  export default {
    name: "flowSignInCodeCheck",

    components: {
      FormSecurityCodeCheck,
      UiCardForm
    },

    props: {
      email: {
        type: String,
        required: true
      }
    },

    data() { return {
      uiConstants
    }}
  }
</script>