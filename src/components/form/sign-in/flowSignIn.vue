<template>
  <transition name="fade">
    <ui-card-form v-if="isDisplaySignInVariants"
                  class="animation-fade-in-left animation-disable-leave"
                  title="Sign In"
                  description=" ">

      <template v-slot:description>
        <label>Don't have an account? </label>
        <a href="javascript:void(0)" @click="onToSignUp">Sign Up</a>
      </template>

      <transition name="fade">
        <form-sign-in-by-password v-if="isOpenSignInByPassword"
                                  class="animation-fade-in-left animation-disable-leave"
                                  :email="user.email"
                                  :password="user.password"
                                  @on-success="onSignInSuccess"
                                  @on-failed="onSignInFailed"
                                  @on-inactive-user-error="onTrySignInInactiveUser"
                                  @on-server-error="onServerError"
                                  @on-loading="onLoading"
                                  @on-input="onInput"
        ></form-sign-in-by-password>
      </transition>

      <transition name="fade">
        <form-security-code-send v-if="isOpenSecurityCodeSend"
                                 class="animation-fade-in-right animation-disable-leave"
                                 ref="codeSend"
                                 :email="user.email"
                                 :code-type="getSecurityCodeType"
                                 @on-success="onSignInCodeSendSuccess"
                                 @on-failed="onSignInFailed"
                                 @on-server-error="onServerError"
                                 @on-loading="onLoading"
                                 @on-input="onInput">

          <template v-slot:send-button-section>
            <ui-button class="button-color__next" @click="onSendSecurityCode">Send</ui-button>
          </template>
        </form-security-code-send>
      </transition>

      <ui-separator-line-text>VIA</ui-separator-line-text>

      <ui-button-group>
        <ui-select-button name="signin-variant"
                          class="button-color__select-orange"
                          label="Password"
                          type="radio"
                          :value="FormSignInByPassword.name"
                          :checked="localOpenForm === FormSignInByPassword.name"
                          @change="onChangeSignInVariant"
        ></ui-select-button>

        <ui-select-button name="signin-variant"
                          class="button-color__select-red"
                          label="Email"
                          type="radio"
                          :value="FormSecurityCodeSend.name"
                          :checked="localOpenForm === FormSecurityCodeSend.name"
                          @change="onChangeSignInVariant"
        ></ui-select-button>
      </ui-button-group>

      <ui-spinner :is-show="isLoading"></ui-spinner>
    </ui-card-form>
  </transition>


  <transition name="fade">
    <ui-card-form v-if="isDisplaySecurityCodeCheck"
                  class="animation-fade-in-right animation-disable-leave"
                  title="Checking the security code"
                  description="We have sent the security code to your email address">

      <form-security-code-check :type="getSecurityCodeType"
                                :email="user.email"
                                @on-success="onSignInSuccess"
                                @on-failed="onSignInFailed"
                                @on-cancel="onCheckCancel"
                                @on-server-error="onServerError"
                                @on-loading="onLoading"
      ></form-security-code-check>

      <ui-spinner :is-show="isLoading"></ui-spinner>
    </ui-card-form>
  </transition>

</template>

<script>
  import FormSecurityCodeCheck from "../security-code/formSecurityCodeCheck";
  import UiCardForm from "../../ui/card/UiCardForm";
  import UiSpinner from "../../ui/spinner/UiSpinner";
  import FormSignInByPassword from "./formSignInByPassword";
  import FormSecurityCodeSend from "../security-code/formSecurityCodeSend";

  import {NotificationFactory} from "../../../services/notification/NotificationFactory";
  import UiSeparatorLineText from "../../ui/separator/UiSeparatorLineText";
  import UiButtonGroup from "../../ui/button/UiButtonGroup";
  import UiSelectButton from "../../ui/input/UiSelectButton";
  import {ServerApi} from "../../../services/server/ServerApi";
  import {ServerError} from "../../../services/server/ServerError";
  import {NOTIFICATION_VARIANTS} from "../../../services/notification/Notification";
  import {API_ERROR_CODES, CODE_TYPE} from "@jira-killer/constants";
  import UiButton from "../../ui/button/UiButton";
  import FormWorkspaceHub from "../workspace-hub/formWorkspaceHub";
  import {PropertyRequiredError} from "../../../services/exceptions/PropertyRequiredError";
  import {ServerException} from "../../../services/exceptions/ServerException";

  export default {
    name: "flowSignIn",

    components: {
      FormWorkspaceHub,
      UiButton,
      FormSecurityCodeCheck,
      UiSelectButton,
      UiButtonGroup,
      UiSeparatorLineText,
      FormSecurityCodeSend,
      FormSignInByPassword,
      UiSpinner,
      UiCardForm,
    },

    props: {
      email: String,
      password: String,
      openForm: {
        type: String,
        default: FormSignInByPassword.name
      }
    },

    data() { return {
      FormSignInByPassword,
      FormSecurityCodeSend,
      FormSecurityCodeCheck,
      localOpenForm: this.openForm,
      isLoading: false,
      user: {
        email: this.email,
        password: this.password,
        isActive: false
      }
    }},

    methods: {
      onChangeSignInVariant(event) { this.localOpenForm = event.target.value; },

      onInput(event) { this.user[event.target.name] = event.target.value; },

      onLoading(event) { this.isLoading = event; },

      async onSendSecurityCode() {
        this.onLoading(true);

        await ServerApi.api.user.isActive.call(this.user.email)
            .then(response => this.onCheckActiveUserSuccess(response))
            .catch(error => this.onCheckActiveUserError(error))
            .finally(() => this.onLoading(false));

        this.$refs.codeSend.localCodeType = this.getSecurityCodeType;
        this.$refs.codeSend.onSend();
      },

      onCheckCancel() {
        this.localOpenForm = FormSecurityCodeSend.name;
      },

      onToSignUp() {
        this.$emit('on-to-sign-up', {email: this.user.email});
      },

      onSignInSuccess(event) {
        this.$emit('on-success', event);
      },

      onSignInCodeSendSuccess() {
        this.localOpenForm = FormSecurityCodeCheck.name;
      },

      onCheckActiveUserSuccess(response) {
        this.user.isActive = response.data;
      },

      onTrySignInInactiveUser(event) {
        const notification = NotificationFactory.getNotificationFromErrorMessage(event);
        notification.variant = NOTIFICATION_VARIANTS.success;

        this.$notification.show(notification, this);
        this.localOpenForm = FormSecurityCodeCheck.name;
      },

      onSignInFailed(event) {
        if (event.code === API_ERROR_CODES.USER.INACTIVE) return;

        NotificationFactory.showFailedApiNotification(event, this);
      },

      onCheckActiveUserError(error) {
        const errorCode = ServerError.getErrorCodeByError(error);

        switch (errorCode) {
          case API_ERROR_CODES.USER.NOT_FOUND: this.onSignInFailed(ServerError.getErrorMessageByCode(errorCode)); break;
          default: this.onServerError(error);
        }

        throw new ServerException(error);
      },

      onServerError(error) {
        NotificationFactory.showServerErrorNotification(this);

        throw new ServerException(error);
      },
    },

    computed: {
      isOpenSignInByPassword() { return this.localOpenForm === FormSignInByPassword.name; },

      isOpenSecurityCodeSend() { return this.localOpenForm === FormSecurityCodeSend.name; },

      isDisplaySecurityCodeCheck() { return this.localOpenForm === FormSecurityCodeCheck.name; },

      isDisplaySignInVariants() { return this.isOpenSignInByPassword ||this.isOpenSecurityCodeSend; },

      getSecurityCodeType() { return this.user.isActive ? CODE_TYPE.AUTHORIZATION : CODE_TYPE.USER_ACTIVATION; }
    }
  }
</script>