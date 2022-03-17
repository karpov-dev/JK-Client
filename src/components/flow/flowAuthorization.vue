<template>
  <form-sign-in v-if="forms.isSignIn"
                :email="user.email"
                :password="user.password"
                @on-to-signup="onSwitchFormToWithCopy('signUp', $event)"
                @on-to-email-signin="onSwitchFormToWithCopy('checkCode', $event)"
  ></form-sign-in>

  <form-sign-up v-if="forms.isSignUp"
                :first-name="user.firstName"
                :last-name="user.lastName"
                :email="user.email"
                :password="user.password"
                @ontosignin="onSwitchFormToWithCopy('signIn', $event)"
                @onsuccess="onSwitchFormTo('checkCode')"
  ></form-sign-up>

  <form-check-code v-if="forms.isCheckCode"
                   title="Security Code"
                   description="Fill security code from email"
                   @oncancel="onSwitchFormTo('signUp')"
  ></form-check-code>
</template>

<script>
  import FormSignIn from "../form/formSignIn";
  import FormSignUp from "../form/formSignUp";
  import FormCheckCode from "../form/formCheckCode";
  import {isComponent} from "../../services/component.service";

  const FORMS = {
    signIn: 'signIn',
    signUp: 'signUp',
    checkCode: 'checkCode'
  }

  export default {
    name: "flowAuthorization",
    components: {FormCheckCode, FormSignUp, FormSignIn},
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
      onSwitchFormToWithCopy(formName, event) {
        Object.assign(this.user, event);
        this.onSwitchFormTo(formName);
      },

      onSwitchFormTo(formName) {
        this.currentForm = FORMS[formName];
      }
    },
    computed: {
      forms() { return isComponent(this.currentForm, FORMS)}
    }
  }
</script>