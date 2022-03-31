<template>
  <ui-card-content>
    <ui-input name="firstName"
              label="First Name"
              placeholder="Billie"
              v-model:value="user.firstName"
              required="true"
              ref="firstName"
    ></ui-input>

    <ui-input name="lastName"
              label="Last Name"
              placeholder="Armstrong"
              v-model:value="user.lastName"
              required="true"
              ref="lastName"
    ></ui-input>

    <ui-input-email name="email"
                    label="Email"
                    v-model:value="user.email"
                    required="true"
                    ref="email"
    ></ui-input-email>

    <ui-input-password name="password"
                       label="Password"
                       v-model:value="user.password"
                       required="true"
                       ref="password"
    ></ui-input-password>

    <template v-slot:footer>
      <ui-button class="button-color__success" @click="onSignUp">Sign Up</ui-button>
    </template>

  </ui-card-content>
</template>

<script>
  import UiInput from "../../ui/input/UiInput";
  import UiInputEmail from "../../ui/input/UiInputEmail";
  import UiInputPassword from "../../ui/input/UiInputPassword";
  import UiSelectStandard from "../../ui/input/UiSelectStandard";
  import UiButton from "../../ui/button/UiButton";

  import {reportValidity} from "../../../services/validation.service";
  import {ServerApi} from "../../../services/server/ServerApi";
  import {API_ERROR_CODES} from "@jira-killer/constants";
  import {ServerError} from "../../../services/server/ServerError";
  import UiCardContent from "../../ui/card/UiCardContent";

  const errorEventByErrorCode = {
    [API_ERROR_CODES.USER.DUPLICATE]: 'on-inactive-user-error',
  }

  export default {
    name: "formSignUp",

    components: {
      UiCardContent,
      UiButton,
      UiSelectStandard,
      UiInputPassword,
      UiInputEmail,
      UiInput
    },

    props: {
      firstName: String,
      lastName: String,
      email: String,
      password: String
    },

    data() { return {
      user: {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password: this.password
      }
    }},

    methods: {
      onSignUp() {
        if (!reportValidity([this.$refs.firstName, this.$refs.lastName, this.$refs.email, this.$refs.password])) return false;
        this.loading(true);

        ServerApi.api.user.signUp.call(...Object.values(this.user))
            .then(response => this.success(response))
            .catch(error => ServerError.handleErrorResponse(error, errorEventByErrorCode, this))
            .finally(() => this.loading(false));
      },

      success(response) {
        this.$emit('on-success', {user: this.user});
      },

      duplicateError(error) {
        this.$emit('on-user-duplicate-error', {error, user: this.user});
      },

      unknownError(error) {
        this.$emit('on-unknown-error', {error, user: this.user});
      },

      loading(state) {
        this.$emit('on-loading', state)
      }
    }
  }
</script>