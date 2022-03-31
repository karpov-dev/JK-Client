<template>
  <transition name="fade">
    <ui-card-form v-if="isOpenSignUp"
                  class="animation-fade-in-left animation-disable-leave"
                  title="Sign Up">

      <template v-slot:description>
        <label>Already have an account? </label>
        <a href="javascript:void(0);" @click="onToSignIn">Sign In</a>
      </template>

      <form-sign-up @on-success="onSignUpSuccess"
                    @on-failed="onSignUpFailed"
                    @on-server-error="onServerError"
                    @on-loading="onLoading"
      ></form-sign-up>

      <ui-spinner :is-show="isLoading"></ui-spinner>
    </ui-card-form>
  </transition>


  <transition name="fade">
    <ui-card-form v-if="isOpenCheckCode"
                  class="animation-fade-in-right animation-disable-leave"
                  title="Checking the security code"
                  description="We have sent the security code to your email address">

      <form-security-code-check :email="user.email"
                                :type="CODE_TYPE.USER_ACTIVATION"
                                @on-success="onCheckCodeSuccess"
                                @on-failed="onSignUpFailed"
                                @on-cancel="onCheckCodeCancel"
                                @on-server-error="onServerError"
                                @on-loading="onLoading"
      ></form-security-code-check>
    </ui-card-form>
  </transition>
</template>

<script>
  import UiCardForm from "../../ui/card/UiCardForm";
  import FormSignUp from "./formSignUp";
  import FormSecurityCodeCheck from "../security-code/formSecurityCodeCheck";
  import UiSpinner from "../../ui/spinner/UiSpinner";
  import {CODE_TYPE} from "@jira-killer/constants";
  import {NotificationFactory} from "../../../services/notification/NotificationFactory";
  import {ServerException} from "../../../services/exceptions/ServerException";

  export default {
    name: "flowSignUp",

    components: {
      UiSpinner,
      FormSignUp,
      FormSecurityCodeCheck,
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
      FormSecurityCodeCheck,
      CODE_TYPE
    }},

    methods: {
      onSignUpSuccess(event) {
        this.user = event.user;
        this.localOpenForm = FormSecurityCodeCheck.name;
      },

      onCheckCodeSuccess() {
        this.$emit('on-success', {user: this.user});
      },

      onToSignIn() {
        this.$emit('on-to-sign-in', {email: this.user.email});
      },

      onCheckCodeCancel() {
        this.localOpenForm = FormSignUp.name
      },

      onLoading(event) {
        this.isLoading = event
      },

      onSignUpFailed(event) {
        NotificationFactory.showFailedApiNotification(event, this);
      },

      onServerError(error) {
        NotificationFactory.showServerErrorNotification(this);

        throw new ServerException(error);
      },
    },

    computed: {
      isOpenSignUp() { return this.localOpenForm === FormSignUp.name; },

      isOpenCheckCode() { return this.localOpenForm === FormSecurityCodeCheck.name; }
    }
  }
</script>