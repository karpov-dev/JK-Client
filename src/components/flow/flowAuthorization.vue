<template>
  <form-sign-in v-if="forms.isSignIn"
                :email="user.email"
                :password="user.password"
                @ontosignup="switchFormTo('signUp', $event)"
                @onforgotpassword="$emit('onforgotpassword', this.user)"
  ></form-sign-in>

  <form-sign-up v-if="forms.isSignUp"
                :first-name="user.firstName"
                :last-name="user.lastName"
                :email="user.email"
                :password="user.password"
                @ontosignin="switchFormTo('signIn', $event)"
  ></form-sign-up>
</template>

<script>
  import FormSignIn from "../form/formSignIn";
  import FormSignUp from "../form/formSignUp";
  import {isComponent} from "../../services/component.service";

  const FORMS = {
    signIn: 'signIn',
    signUp: 'signUp'
  }

  export default {
    name: "flowAuthorization",
    components: {FormSignUp, FormSignIn},
    props: {
      form: {
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
        currentForm: this.form,
        user: {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          password: this.password
        }
      }
    },
    methods: {
      switchFormTo(formName, event) {
        Object.assign(this.user, event);
        this.currentForm = FORMS[formName];
      }
    },
    computed: {
      forms() { return isComponent(this.currentForm, FORMS)}
    }
  }
</script>