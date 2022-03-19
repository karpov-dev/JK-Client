<template>
  <ui-card-simple title="Sign In">
    <template v-slot:card-description>
      Don't have an account?
      <a href="javascript:void(0);"
         @click="fireEvent('on-to-signup')">Sign Up</a>
    </template>

    <template v-slot:default>
      <ui-input name="email"
                title="Email"
                :value="email"
                @input="onUserInput"
      ></ui-input>
      <ui-input name="password"
                title="Password"
                type="password"
                :value="user.password"
                @input="onUserInput"
      ></ui-input>

      <ui-button class="button-color__success" @click="onSignIn">Sign In</ui-button>

      <ui-separator-line-text>OR</ui-separator-line-text>

      <ui-spinner :is-show="isLoading"></ui-spinner>
    </template>
  </ui-card-simple>
</template>

<script>
  import UiCardSimple from "../ui/card/UiCardSimple";
  import UiInput from "../ui/input/UiInput";
  import UiButton from "../ui/button/UiButton";
  import UiSeparatorLineText from "../ui/separator/UiSeparatorLineText";
  import UiButtonGroup from "../ui/button/UiButtonGroup";
  import UiSpinner from "../ui/spinner/UiSpinner";
  import {AuthApi} from "../../services/api/AuthApi";

  export default {
    name: "formSignIn",
    components: {
      UiSpinner,
      UiButtonGroup,
      UiSeparatorLineText,
      UiButton,
      UiInput,
      UiCardSimple,
    },
    props: {
      email: String,
      password: String
    },
    data() {
      return {
        isLoading: false,
        user: {
          email: this.email,
          password: this.password
        }
      }
    },
    methods: {
      test(event) {
        console.log(event.target.value)
      },

      onUserInput(event) {
        this.user[event.target.name] = event.target.value;
      },

      onSignIn() {
        this.isLoading = true;
        AuthApi.api.user.signInByPassword.call(this.user.email, this.user.password)
            .then(response => this.onSingInSuccess(response))
            .catch(error => this.onSignInError(error))
            .finally(() => this.isLoading = false);
      },

      onSingInSuccess(response) {
        console.log(response);
      },

      onSignInError(error) {
        console.error(error)
      },

      fireEvent(eventName) {
        this.$emit(eventName, this.user);
      }
    }
  }
</script>