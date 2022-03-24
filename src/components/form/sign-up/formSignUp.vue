<template>
  <ui-card-form title="Sign Up">
    <template v-slot:description>
      Already have an Account?
      <a href="javascript:void(0);">Sign In</a>
    </template>

    <div class="sign-up__initials">
      <ui-input name="firstName"
                label="First Name"
                :value="user.firstName"
                @input="onInput"
      ></ui-input>

      <ui-input name="lastName"
                label="Last Name"
                :value="user.lastName"
                @input="onInput"
      ></ui-input>
    </div>

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

    <ui-button class="button-color__sign-up" @click="onSignUp">Sign Up</ui-button>
  </ui-card-form>
</template>

<script>
  import UiCardForm from "../../ui/card/UiCardForm";
  import UiInput from "../../ui/input/UiInput";
  import UiInputEmail from "../../ui/input/UiInputEmail";
  import UiInputPassword from "../../ui/input/UiInputPassword";
  import UiButton from "../../ui/button/UiButton";
  import UiSpinner from "../../ui/spinner/UiSpinner";
  import {ServerApi} from "../../../services/api/ServerApi";

  export default {
    name: "formSignUp",
    components: {UiSpinner, UiButton, UiInputPassword, UiInputEmail, UiInput, UiCardForm},
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
      onInput(event) { this.user[event.target.name] = event.target.value; },

      onSignUp() {
        this.$emit('on-loading');

        ServerApi.api.user.signUp.call(this.user)
            .then(() => this.signUpSuccess())
            .catch(error => this.signUpFailed(error))
            .finally(() => this.$emit('on-loading-done'));
      },

      signUpSuccess() {
        this.$emit('on-success-sign-up', this.user);
      },

      signUpFailed(error) {
        console.log(error);
      }
    }
  }
</script>

<style scoped>
  .sign-up__initials {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  @media screen and (min-width: 800px) {
    .sign-up__initials {
      flex-direction: row;
    }
  }
</style>