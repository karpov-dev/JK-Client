<template>
  <ui-card-content>
    <ui-input-password label="Security code"
                       v-model:value="localCode"
                       ref="input"
                       pattern="[0-9]+"
                       required="true"
    ></ui-input-password>

    <ui-button-group>
      <ui-button class="button-color__cancel" @click="onCancel">Cancel</ui-button>
      <ui-button class="button-color__next" @click="onCheck">Check</ui-button>
    </ui-button-group>

  </ui-card-content>
</template>

<script>
  import UiCardContent from "../../ui/card/UiCardContent";
  import UiInputPassword from "../../ui/input/UiInputPassword";
  import UiButtonGroup from "../../ui/button/UiButtonGroup";
  import UiButton from "../../ui/button/UiButton";

  import {reportValidity} from "../../../services/validation.service";
  import {ServerApi} from "../../../services/server/ServerApi";
  import {CODES as SERVER_ERROR_CODES} from "@jira-killer/error-codes";
  import {ServerError} from "../../../services/server/ServerError";
  import {ServerErrorHandler} from "../../../services/server/ServerErrorHandler";

  const errorEventByErrorCode = {
    [SERVER_ERROR_CODES.CODE.INVALID]: 'on-invalid-code-error',
    [SERVER_ERROR_CODES.CODE.EXPIRED]: 'on-expired-code-error',
    [SERVER_ERROR_CODES.CODE.WRONG_RELATED_TO]: 'on-wrong-related-to-error'
  }

  export default {
    name: "formSignUpActivateUser",

    components: {
      UiButton,
      UiButtonGroup,
      UiInputPassword,
      UiCardContent
    },

    props: {
      email: {
        type: String,
        required: true
      },
      code: String
    },

    data() { return {
      localCode: this.code
    }},

    methods: {
      onCancel() {
        this.$emit('on-cancel');
      },

      onCheck() {
        if (!reportValidity([this.$refs.input])) return false;
        this.loading(true);

        ServerApi.api.user.activate.call(this.email, Number(this.localCode))
            .then(response => this.success(response))
            .catch(error => this.error(error))
            .finally(() => this.loading(false));
      },

      error(error) {
        const errorCode = ServerError.getErrorCodeByError(error);
        const handler = ServerErrorHandler.getErrorHandlerByErrorCode(errorCode, errorEventByErrorCode);
        handler.bind(this)(errorCode, errorEventByErrorCode[errorCode]);
      },

      success(response) {
        this.$emit('on-success', response);
      },

      loading(state) {
        this.$emit('on-loading', state);
      },
    }
  }
</script>