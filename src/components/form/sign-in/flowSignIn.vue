<template>
  <transition name="fade">
    <ui-card-form v-if="localOpenForm === FormSignInTypeSwitcher.name" title="Sign In" class="top-left">

      <template v-slot:description>
        <label>Don't have an account? </label>
        <a href="javascript:void(0);" @click="onToSignUp">Sign Up</a>
      </template>

      <form-sign-in-type-switcher :open-form="localSwitcherOpenForm"
                                  :email="user.email"
                                  :password="user.password"
                                  @on-password-way-success="onSignInSuccess"
                                  @on-email-way-send-success="onEmailWayCodeSendSuccess"
                                  @on-password-way-failed="onFailed"
                                  @on-password-way-user-inactive-error="onPasswordWayInactiveUser"
                                  @on-password-way-server-error="onServerError"
                                  @on-email-way-server-error="onServerError"
                                  @on-loading="onLoading"
                                  @on-input="onInput"
      ></form-sign-in-type-switcher>

      <ui-spinner :is-show="isLoading"/>
    </ui-card-form>
  </transition>

  <transition name="fade">
    <ui-card-form v-if="localOpenForm === FormSecurityCodeCheck.name" title="Security code check" class="top-right">
      <form-sign-up-activate-user :email="user.email"
                                  @on-success="onSignInSuccess"
                                  @on-failed="onFailed"
                                  @on-server-error="onServerError"
                                  @on-cancel="onActivateUserWayCancel"
                                  @on-loading="onLoading"
      ></form-sign-up-activate-user>

      <ui-spinner :is-show="isLoading"/>
    </ui-card-form>
  </transition>
</template>

<script>
  import FormSignInTypeSwitcher from "./formSignInTypeSwitcher";
  import FormSecurityCodeCheck from "../security-code/formSecurityCodeCheck";
  import UiCardForm from "../../ui/card/UiCardForm";
  import UiSpinner from "../../ui/spinner/UiSpinner";
  import FormSignInByPassword from "./formSignInByPassword";
  import FormSignUpActivateUser from "../sign-up/formSignUpActivateUser";
  import FormSecurityCodeSend from "../security-code/formSecurityCodeSend";

  import {CODES, CODES as SERVER_ERROR_CODES} from "@jira-killer/error-codes";
  import {NOTIFICATION_VARIANTS} from "../../../services/notification/Notification";
  import {getNotificationByErrorResponse, getServerErrorNotification} from "../../../services/server-errors.service";
  import {NotificationFactory} from "../../../services/notification/NotificationFactory";

  export default {
    name: "flowSignIn",

    components: {
      FormSignUpActivateUser,
      UiSpinner,
      UiCardForm,
      FormSecurityCodeCheck,
      FormSignInTypeSwitcher
    },

    props: {
      email: String,
      password: String,
      openForm: {
        type: String,
        default: FormSignInTypeSwitcher.name
      },
      switcherOpenForm: {
        type: String,
        default: FormSignInByPassword.name
      },
    },

    data() { return {
      FormSignInTypeSwitcher,
      FormSecurityCodeCheck,
      localOpenForm: this.openForm,
      localSwitcherOpenForm: this.switcherOpenForm,
      isLoading: false,
      user: {
        email: this.email,
        password: this.password
      }
    }},

    methods: {
      onInput(event) { this.user[event.target.name] = event.target.value; },

      onLoading(event) { this.isLoading = event; },

      onToSignUp() { this.$emit('on-to-sign-up', {email: this.email}); },

      onSignInSuccess(event) { this.$emit('on-success', event); },

      onEmailWayCodeSendSuccess(event) {
        this.user.email = event.email;
        this.localOpenForm = FormSecurityCodeCheck.name;
      },

      onActivateUserWayCancel() {
        this.localOpenForm = FormSignInTypeSwitcher.name;
        this.localSwitcherOpenForm = FormSecurityCodeSend.name;
      },

      onFailed(event) {
        if (event?.code === CODES.USER.INACTIVE) return;

        const notification = NotificationFactory.getServerFiledNotification(event);
        this.$notification.show(notification, this);
      },

      onPasswordWayInactiveUser(event) {
        const notification = NotificationFactory.getServerFiledNotification(event);
        notification.variant = NOTIFICATION_VARIANTS.success;

        this.$notification.show(notification, this);
        this.localOpenForm = FormSecurityCodeCheck.name;
      },

      onServerError() {
        const notification = NotificationFactory.getServerErrorNotification();
        this.$notification.show(notification, this);
      },
    }
  }
</script>

<style scoped lang="scss">
  .fade-leave-active {
    display: none;
  }

  .fade-leave-active,
  .fade-enter-active {
    animation-duration: var(--transition-duration__medium);
  }
</style>