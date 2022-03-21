<template>
  <ui-card-content>
    <div class="card-form__content">
      <ui-input-email name="email"
                      label="Email"
                      :value="user.email"
                      @input="onInput"
      ></ui-input-email>

      <ui-input-password name="password"
                         label="Password"
                         :value="user.password"
                         @input="onInput"
      ></ui-input-password>

      <ui-button class="button-color__sign-in" @click="onSignIn">Sign In</ui-button>
    </div>
  </ui-card-content>
</template>

<script>
  import UiCardForm from "../ui/card/UiCardForm";
  import UiInputEmail from "../ui/input/UiInputEmail";
  import UiInputPassword from "../ui/input/UiInputPassword";
  import UiButton from "../ui/button/UiButton";
  import UiSpinner from "../ui/spinner/UiSpinner";
  import {AuthApi} from "../../services/api/AuthApi";
  import UiCard from "../ui/card/UiCard";
  import UiCardContent from "../ui/card/UiCardContent";

  //TODO: do after sign up

  export default {
    name: "formSignInByPassword",
    components: {UiCardContent, UiCard, UiSpinner, UiButton, UiInputPassword, UiInputEmail, UiCardForm},
    props: {
      email: String,
      password: String
    },
    data() {return {
      user: {
        email: this.email,
        password: this.password
      },
    }},
    methods: {
      onInput(event) { this.user[event.target.name] = event.target.value; },

      onSignIn() {
        this.$emit('on-loading');

        AuthApi.api.user.signInByPassword.call(this.user.email, this.user.password)
            .then(response => this.signInSuccess(response))
            .catch(error => this.signInFailed(error))
            .finally(() => this.$emit('on-loading-done'));
      },

      signInSuccess(response) {

      },

      signInFailed(error) {
        const responseMessage = error.response.data.message;

        switch (responseMessage) {
          case 'ERROR:USER-NOT_FOUND': {
            this.$emit('on-error-not-found', this.user);
            break;
          }
          case 'ERROR:USER-INACTIVE': {
            this.$emit('on-error-inactive', this.user);
            break;
          }
        }
      },

      onToSignUp() {
        this.$emit('on-to-sign-up', this.user);
      },
    }
  }
</script>

<style scoped lang="scss">
  @import "src/scss/design/buttons";
  @import "src/scss/design/cards";
</style>