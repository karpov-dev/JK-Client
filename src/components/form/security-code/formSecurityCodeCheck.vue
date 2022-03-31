<template>
  <ui-card-content>
    <ui-input-password label="Security code"
                       v-model:value="localCode"
                       ref="input"
                       pattern="[0-9]+"
                       required="true"
    ></ui-input-password>

    <template v-slot:footer>
      <ui-button-group>
        <ui-button class="button-color__cancel" @click="onCancel">Cancel</ui-button>
        <ui-button class="button-color__next" @click="onCheck">Check</ui-button>
      </ui-button-group>
    </template>

  </ui-card-content>
</template>

<script>
import UiCardContent from "../../ui/card/UiCardContent";
import UiInputPassword from "../../ui/input/UiInputPassword";
import UiButtonGroup from "../../ui/button/UiButtonGroup";
import UiButton from "../../ui/button/UiButton";

import {reportValidity} from "../../../services/validation.service";
import {ServerApi} from "../../../services/server/ServerApi";
import {API_ERROR_CODES, CODE_TYPE} from "@jira-killer/constants";
import {ServerError} from "../../../services/server/ServerError";

const errorEventByErrorCode = {
  [API_ERROR_CODES.CODE.INVALID]: 'on-invalid-code-error',
  [API_ERROR_CODES.CODE.EXPIRED]: 'on-expired-code-error',
  [API_ERROR_CODES.CODE.WRONG_RELATED_TO]: 'on-wrong-related-to-error'
}

export default {
  name: "formSecurityCodeCheck",

  components: {
    UiButton,
    UiButtonGroup,
    UiInputPassword,
    UiCardContent
  },

  props: {
    code: String,
    type: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },

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

      switch (this.type) {
        case CODE_TYPE.AUTHORIZATION: return this.signIn();
        case CODE_TYPE.USER_ACTIVATION: return this.userActivation();
        default: console.error('Invalid code type');
      }
    },

    userActivation() {
      this.invokeApi(ServerApi.api.user.activate, {email: this.email, code: this.localCode});
    },

    signIn() {
      this.invokeApi(ServerApi.api.user.signIn.code, {email: this.email, code: this.localCode});
    },

    invokeApi(method, payload) {
      this.loading(true);

      method.call(payload)
          .then(response => this.success(response))
          .catch(error => ServerError.handleErrorResponse(error, errorEventByErrorCode, this))
          .finally(() => this.loading(false));
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