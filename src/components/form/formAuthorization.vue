<template>
  <form-sign-in v-if="isSignIn"
                :email="user.email"
                :password="user.password"
                @tosignup="switchFormTo('signUp', $event)"
  ></form-sign-in>

  <form-sign-up v-if="isSignUp"
                :first-name="user.firstName"
                :last-name="user.lastName"
                :email="user.email"
                :password="user.password"
                @ontorequestpassword="switchFormTo('restorePasswordRequest', $event)"
                @ontosignin="switchFormTo('signIn', $event)"
  ></form-sign-up>

  <form-restore-password-request v-if="isRestorePasswordRequest"
                                 :email="user.email"
                                 @oncancel="switchFormTo('signUp', $event)"
                                 @onsendrequest="switchFormTo('checkCode', $event)"
  ></form-restore-password-request>

  <form-check-code v-if="isCheckCode"
                   @oncancel="switchFormTo('restorePasswordRequest', $event)"
  ></form-check-code>

  <form-restore-password v-if="isRestorePassword"
                         @oncancel="switchFormTo('restorePasswordRequest', $event)"
  ></form-restore-password>
</template>

<script>
  import FormSignIn from "./formSignIn";
  import FormSignUp from "./formSignUp";
  import FormRestorePasswordRequest from "./formRestorePasswordRequest";
  import FormRestorePassword from "./formRestorePassword";
  import UiButton from "../ui/button/UiButton";
  import FormCheckCode from "./formCheckCode";

  const FORMS = {
    signIn: 'signIn',
    signUp: 'signUp',
    restorePassword: 'restorePassword',
    checkCode: 'checkCode',
    restorePasswordRequest: 'restorePasswordRequest',
  }

  export default {
    name: "formAuthorization",
    components: {FormCheckCode, UiButton, FormRestorePassword, FormRestorePasswordRequest, FormSignUp, FormSignIn},
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
      switchFormTo(formName, event) {
        Object.assign(this.user, event);
        this.currentForm = FORMS[formName];
      }
    },
    computed: {
      isSignIn() { return this.currentForm === FORMS.signIn; },
      isSignUp() { return this.currentForm === FORMS.signUp; },
      isRestorePasswordRequest() { return this.currentForm === FORMS.restorePasswordRequest; },
      isCheckCode() { return this.currentForm === FORMS.checkCode; },
      isRestorePassword() { return this.currentForm === FORMS.restorePassword; }
    }
  }
</script>