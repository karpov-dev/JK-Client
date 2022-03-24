<template>
  <ui-card-content>
    <form-security-code-send v-if="componentsToShow[FormSecurityCodeSend.name]"
                             :code-type="codeType"
                             :method="method"
                             @on-is-loading="$emit('on-is-loading')"
                             @on-is-loading-done="$emit('on-is-loading-done')"
                             @on-code-send-success="changeActiveFormTo(FormSecurityCodeCheck.name)"
                             @on-code-send-error="$emit('on-code-send-error')"
    ></form-security-code-send>

    <form-security-code-check v-if="componentsToShow[FormSecurityCodeCheck.name]"
                              :code-type="codeType"
                              :method="method"
                              email=""
    ></form-security-code-check>
  </ui-card-content>
</template>

<script>
  import UiCardContent from "../../ui/card/UiCardContent";
  import FormSecurityCodeSend from "./formSecurityCodeSend";
  import FormSecurityCodeCheck from "./formSecurityCodeCheck";
  import {uiConstants} from "../../../services/constants/ui.constants";
  import {isContainElement} from "../../../services/arrays.service";
  import UiSpinner from "../../ui/spinner/UiSpinner";

  export default {
    name: "formSecurityCode",

    components: {
      UiSpinner,
      FormSecurityCodeCheck,
      FormSecurityCodeSend:
      FormSecurityCodeSend,
      UiCardContent
    },

    props: {
      codeType: {
        type: String,
        required: true,
        validator(value) { return isContainElement(value, Object.values(uiConstants.securityCode.codeType)); }
      },
      method: {
        type: String,
        required: true,
        validator(value) { return isContainElement(value, Object.values(uiConstants.securityCode.method)); }
      },
      componentToOpen: {
        type: String,
        default: FormSecurityCodeSend.name,
        validator(value) { return isContainElement(value, [FormSecurityCodeSend.name, FormSecurityCodeCheck.name]); }
      }
    },

    data() { return {
      isLoading: false,
      componentsToShow: {
        [FormSecurityCodeSend.name]: this.componentToOpen === FormSecurityCodeSend.name,
        [FormSecurityCodeCheck.name]: this.componentToOpen === FormSecurityCodeCheck.name
      },
      FormSecurityCodeSend,
      FormSecurityCodeCheck
    }},

    methods: {
      changeActiveFormTo(formName) {
        Object.keys(this.componentsToShow).forEach(key => this.componentsToShow[key] = key === formName)
      }
    },
  }
</script>