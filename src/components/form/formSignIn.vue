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

      <ui-button variant="success" @click="onSignIn">Sign In</ui-button>

      <ui-separator-line-text>OR</ui-separator-line-text>

      <ui-button-group>
        <ui-button disabled variant="danger">Google</ui-button>
        <ui-button variant="warning" @click="fireEvent('on-to-email-signin')">Email Code</ui-button>
        <ui-button disabled variant="common">Twitter</ui-button>
      </ui-button-group>

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
  import UiCheckbox from "../ui/input/UiCheckbox";
  import UiRadio from "../ui/input/UiRadio";

  export default {
    name: "formSignIn",
    components: {
      UiRadio,
      UiCheckbox,
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