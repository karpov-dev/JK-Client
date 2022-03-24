<template>
  <ui-card-content>
    <ui-input-email :label="getFieldDescribe.label"
                    :name="getFieldDescribe.name"
                    v-model="user.email"
    ></ui-input-email>

    <ui-button class="button-color__next" @click="onSendCode">Send code</ui-button>
  </ui-card-content>
</template>

<script>
  import UiCardContent from "../../ui/card/UiCardContent";
  import UiInputEmail from "../../ui/input/UiInputEmail";
  import UiButtonGroup from "../../ui/button/UiButtonGroup";
  import UiButton from "../../ui/button/UiButton";
  import {uiConstants} from "../../../services/constants/ui.constants";
  import {isContainElement} from "../../../services/arrays.service";
  import {ServerApi} from "../../../services/api/ServerApi";
  import {Http} from "../../../services/http/Http";

  export default {
    name: "formSecurityCodeSend",

    components: {
      UiButton,
      UiButtonGroup,
      UiInputEmail,
      UiCardContent
    },

    props: {
      email: String,
      codeType: {
        type: String,
        required: true,
        validator(value) { return isContainElement(value, Object.values(uiConstants.securityCode.codeType)); }
      },
      method: {
        type: String,
        required: true,
        validator(value) { return isContainElement(value, Object.values(uiConstants.securityCode.method)); }
      }
    },

    data() { return {
      user: {
        email: this.email
      }
    }},

    methods: {
      onSendCode() {
        switch (this.method) {
          case uiConstants.securityCode.method.email: {
            this.sendToEmail(this.user.email);
            break;
          }
          case uiConstants.securityCode.method.phone: {
            this.sendToPhone();
            break;
          }
        }
      },

      sendToEmail(email) {
        this.$emit('on-loading');

        ServerApi.api.code.send.email.call(email, this.codeType)
            .then(response => this.sendCodeSuccess(response))
            .catch(error => this.sendCodeFailed(error))
            .finally(() => this.$emit('on-loading-done'));
      },

      sendToPhone() {
        //TODO: Add phone support
      },

      sendCodeSuccess(response) {
        if (response.status === Http.STATUS.CREATED) {
          this.$emit('on-success-send', {email: this.user.email});
        }
      },

      sendCodeFailed(error) {
        this.$emit('on-error-send', error);
      },
    },

    computed: {
      getFieldDescribe() {
        return (this.method === uiConstants.securityCode.method.email)
            ? {label: 'Email', name: 'email'}
            : {label: 'Phone', name: 'phone'}
      }
    }
  }
</script>