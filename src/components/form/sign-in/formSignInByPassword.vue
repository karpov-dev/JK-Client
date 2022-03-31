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
  import {API_ERROR_CODES} from "@jira-killer/constants";
  import {ServerError} from "../../../services/server/ServerError";

  const errorEventByErrorCode = {
    [API_ERROR_CODES.USER.INACTIVE]: 'on-inactive-user-error',
    [API_ERROR_CODES.USER.WRONG_PASSWORD]: 'on-wrong-password-error',
    [API_ERROR_CODES.USER.NOT_FOUND]: 'on-user-not-found'
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

        ServerApi.api.user.signIn.credentials.call(this.user.email, this.user.password)
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
    },
  }
</script>