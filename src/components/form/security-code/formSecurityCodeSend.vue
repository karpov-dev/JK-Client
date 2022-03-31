<template>
  <ui-card-content>
    <ui-input-email name="email"
                    label="Email"
                    v-model:value="localEmail"
                    required="true"
                    ref="input"
                    @input="onInput"
                    @blur="onInputBlur"
    ></ui-input-email>

    <slot name="send-button-section">
      <ui-button class="button-color__next" @click="onSend">Send</ui-button>
    </slot>

  </ui-card-content>
</template>

<script>
  import UiCardContent from "../../ui/card/UiCardContent";
  import UiInputEmail from "../../ui/input/UiInputEmail";
  import UiButton from "../../ui/button/UiButton";

  import {reportValidity} from "../../../services/validation.service";
  import {ServerApi} from "../../../services/server/ServerApi";
  import {ServerError} from "../../../services/server/ServerError";
  import {API_ERROR_CODES} from "@jira-killer/constants";

  const errorEventByErrorCode = {
    [API_ERROR_CODES.USER.NOT_FOUND]: 'on-invalid-code-error',
  }

  export default {
    name: "formSecurityCodeSend",

    components: {UiButton, UiInputEmail, UiCardContent},

    props: {
      email: String,
      codeType: String,
    },

    data() { return {
      localEmail: this.email,
      localCodeType: this.codeType
    }},

    methods: {
      onInput(event) { this.$emit('on-input', event); },

      onInputBlur(event) { this.$emit('on-input-blur', event); },

      onSend() {
        if (!reportValidity([this.$refs.input])) return false;
        this.loading(true);

        ServerApi.api.code.send.email.call(this.localEmail, this.localCodeType)
            .then(response => this.success(response))
            .catch(error => ServerError.handleErrorResponse(error, errorEventByErrorCode, this))
            .finally(() => this.loading(false));
      },

      success(response) {
        this.$emit('on-success', {response, email: this.email, codeType: this.codeType})
      },

      loading(state) {
        this.$emit('on-loading', state);
      }
    }
  }
</script>