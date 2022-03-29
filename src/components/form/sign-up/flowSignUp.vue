<template>
  <ui-card-form v-if="localOpenForm === FormSignUp.name" title="Sign Up">

    <template v-slot:description>
      <label>Already have an account? </label>
      <a href="javascript:void(0);" @click="onToSignIn">Sign In</a>
    </template>

    <form-sign-up @on-success="onCreateSuccess"
                  @on-user-duplicate-error="onUserDuplicate"
                  @on-unknown-error="onServerError"
                  @on-loading="onIsLoading"
    ></form-sign-up>

    <ui-spinner :is-show="isLoading"></ui-spinner>
  </ui-card-form>

  <ui-card-form v-if="localOpenForm === FormSignUpActivateUser.name" title="Activate Account">
    <form-sign-up-activate-user :email="user.email"
                                @on-cancel="onCancelActivation"
                                @on-invalid-code-error="onServerError"
    ></form-sign-up-activate-user>

    <ui-spinner :is-show="isLoading"></ui-spinner>
  </ui-card-form>
</template>

<script>
  import UiCardForm from "../../ui/card/UiCardForm";
  import FormSignUp from "./formSignUp";
  import FormSignUpActivateUser from "./formSignUpActivateUser";
  import UiSpinner from "../../ui/spinner/UiSpinner";
  import {Notification, NOTIFICATION_VARIANTS} from "../../../services/notification/Notification";

  export default {
    name: "flowSignUp",

    components: {
      UiSpinner,
      FormSignUpActivateUser,
      FormSignUp,
      UiCardForm
    },

    props: {
      openForm: {
        type: String,
        default: FormSignUp.name
      },
      firstName: String,
      lastName: String,
      email: String,
      password: String
    },

    data() { return {
      localOpenForm: this.openForm,
      isLoading: false,
      user: {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password: this.password
      },
      FormSignUp,
      FormSignUpActivateUser
    }},

    methods: {
      onToSignIn() {
        this.$emit('on-to-sign-in', {email: this.user.email});
      },

      onCreateSuccess() {
        this.localOpenForm = FormSignUpActivateUser.name;
      },

      onCancelActivation() {
        this.localOpenForm = FormSignUp.name;
      },

      onUserDuplicate() {
        const notification = new Notification(
            'Email not available',
            'Found account with same email. Please sign in or restore password',
            NOTIFICATION_VARIANTS.danger
        )

        this.$notification.show(notification, this);
      },

      onServerError() {
        const notification = new Notification('Server Error', 'Server Error. Please contact with system administrator', NOTIFICATION_VARIANTS.danger);
        this.$notification.show(notification, this);
        console.error(event);
      },

      onIsLoading(event) {
        this.isLoading = event
      }
    }
  }
</script>