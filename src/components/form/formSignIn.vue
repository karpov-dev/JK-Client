<template>
  <ui-card-simple title="Sign In">
    <template v-slot:card-description>
      Don't have an account?
      <a href="javascript:void(0);"
         @click="fireEvent('ontosignup')">Sign Up</a>
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
      >
        <template v-slot:under>
          <a href="javascript:void(0);"
             class="forgot-password__link"
             @click="fireEvent('onforgotpassword')">Forgot password?</a>
        </template>
      </ui-input>

      <ui-button variant="success" @click="onSignIn">Sign In</ui-button>

      <ui-separator-line-text>OR</ui-separator-line-text>

      <ui-button-group>
        <ui-button disabled variant="danger">Google</ui-button>
        <ui-button disabled variant="warning">Email Code</ui-button>
        <ui-button disabled variant="common">Twitter</ui-button>
      </ui-button-group>
    </template>
  </ui-card-simple>
</template>

<script>
  import UiCardSimple from "../ui/card/UiCardSimple";
  import UiInput from "../ui/input/UiInput";
  import UiButton from "../ui/button/UiButton";
  import UiSeparatorLineText from "../ui/separator/UiSeparatorLineText";
  import UiButtonGroup from "../ui/button/UiButtonGroup";

  export default {
    name: "formSignIn",
    components: {
      UiButtonGroup,
      UiSeparatorLineText,
      UiButton,
      UiInput,
      UiCardSimple
    },
    props: {
      email: String,
      password: String
    },
    data() {
      return {
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
        this.fireEvent('signin');

        //TODO: Add send sign in send request
        //TODO: fire event signed
      },

      fireEvent(eventName) {
        this.$emit(eventName, this.user);
      }
    }
  }
</script>

<style scoped>
  .forgot-password__link {
    font-size: var(--font-size__small-xx);
  }
</style>