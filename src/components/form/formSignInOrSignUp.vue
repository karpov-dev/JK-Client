<template>
  <form-sign-in v-if="isSignIn"
                :email="user.email"
                :password="user.password"
                @tosignup="onToSignUp">
  </form-sign-in>
  <form-sign-up v-if="isSignUp"
                :first-name="user.firstName"
                :last-name="user.lastName"
                :email="user.email"
                :password="user.password"
                @tosignin="onToSignIn">
  </form-sign-up>
</template>

<script>
  import FormSignIn from "./formSignIn";
  import FormSignUp from "./formSignUp";

  const FORMS = {
    signIn: 'signIn',
    signUp: 'signUp'
  }

  export default {
    name: "formSignInOrSignUp",
    components: {FormSignUp, FormSignIn},
    props: {
      formName: {
        type: String,
        default: FORMS.signIn,
        validator(value) { return Object.values(FORMS).indexOf(value) !== -1; }
      },
      firstName: String,
      lastName: String,
      email: String,
      password: String
    },
    data() {
      return {
        currentForm: this.formName,
        user: {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          password: this.password
        }
      }
    },
    methods: {
      onToSignUp(event) {
        Object.assign(this.user, event);
        this.currentForm = FORMS.signUp;
      },

      onToSignIn(event) {
        Object.assign(this.user, event);
        this.currentForm = FORMS.signIn;
      }
    },
    computed: {
      isSignIn() { return this.currentForm === FORMS.signIn; },
      isSignUp() { return this.currentForm === FORMS.signUp; }
    }
  }
</script>