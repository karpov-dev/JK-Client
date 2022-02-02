<template>
  <ui-card-simple title="Sign In">
    <template v-slot:card-description>
      Don't have an account?
      <a href="javascript:void(0);" @click="onSwitchToSignUp">Sign Up</a>
    </template>

    <template v-slot:default>
      <ui-input name="email"
                title="Email"
                :value="email"
                @input="onUserInput"
      ></ui-input>
      <ui-input name="password"
                title="Password"
                :value="password"
                @input="onUserInput"
      ></ui-input>

      <ui-button variant="common" @click="onSignIn">Sign In</ui-button>
    </template>
  </ui-card-simple>
</template>

<script>
  import UiCardSimple from "../ui/card/UiCardSimple";
  import UiInput from "../ui/input/UiInput";
  import UiButton from "../ui/button/UiButton";

  export default {
    name: "formSignIn",
    components: {
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
        this.$emit('signin', this.user);
      },

      onSwitchToSignUp() {
        this.$emit('tosignup', this.user);
      }
    }
  }
</script>