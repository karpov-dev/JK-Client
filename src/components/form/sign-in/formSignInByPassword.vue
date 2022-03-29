<template>
  <ui-card-content>
    <ui-input-email name="email"
                    label="Email"
                    v-model:value="user.email"
                    required="true"
                    ref="email"
                    @input="onInput"
    ></ui-input-email>

    <ui-input-password name="password"
                       label="Password"
                       v-model:value="user.password"
                       required="true"
                       ref="password"
                       @input="onInput"
    ></ui-input-password>

    <ui-button class="button-color__sign-in" @click="onSignIn">Sign In</ui-button>
  </ui-card-content>
</template>

<script>
  import UiInputEmail from "../../ui/input/UiInputEmail";
  import UiInputPassword from "../../ui/input/UiInputPassword";
  import UiButton from "../../ui/button/UiButton";
  import UiCardContent from "../../ui/card/UiCardContent";

  import {ServerApi} from "../../../services/server/ServerApi";
  import {reportValidity} from "../../../services/validation.service";
  import {CODES as SERVER_ERROR_CODES} from "@jira-killer/error-codes";
  import {ServerError} from "../../../services/server/ServerError";
  import {ServerErrorHandler} from "../../../services/server/ServerErrorHandler";

  const errorEventByErrorCode = {
    [SERVER_ERROR_CODES.USER.INACTIVE]: 'on-inactive-user-error',
    [SERVER_ERROR_CODES.USER.WRONG_PASSWORD]: 'on-wrong-password-error',
    [SERVER_ERROR_CODES.USER.NOT_FOUND]: 'on-user-not-found'
  }

  export default {
    name: "formSignInByPassword",

    components: {
      UiCardContent,
      UiButton,
      UiInputPassword,
      UiInputEmail,
    },

    props: {
      email: String,
      password: String
    },

    data() { return {
      user: {
        email: this.email,
        password: this.password
      }
    }},

    methods: {
      onInput(event) { this.$emit('on-input', event); },

      onSignIn() {
        if(!reportValidity([this.$refs.email, this.$refs.password])) return false;
        this.loading(true);

        ServerApi.api.user.signInByPassword.call(this.user.email, this.user.password)
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
        this.$emit('on-success', {response, user: this.user});
      },

      loading(state) {
        this.$emit('on-loading', state);
      },
    },
  }
</script>