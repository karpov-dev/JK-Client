<template>
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

  <ui-button class="button-color__success" @click="onSignUp">Sign Up</ui-button>
</template>

<script>
  import UiInput from "../../ui/input/UiInput";
  import UiInputEmail from "../../ui/input/UiInputEmail";
  import UiInputPassword from "../../ui/input/UiInputPassword";
  import UiSelectStandard from "../../ui/input/UiSelectStandard";
  import UiButton from "../../ui/button/UiButton";
  import {reportValidity} from "../../../services/validation.service";
  import {ServerApi} from "../../../services/server/ServerApi";
  import {CODES} from "@jira-killer/error-codes";
  import {getErrorCode} from "../../../services/http/Http";

  export default {
    name: "formSignUp",

    components: {
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
            .catch(error => this.error(error))
            .finally(() => this.loading(false));
      },

      success(response) {
        this.$emit('on-success', {response, user: this.user});
      },

      error(error) {
        switch (getErrorCode(error)) {
          case CODES.USER.DUPLICATE: return this.duplicateError(error);
          default: return  this.unknownError(error);
        }
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