<template>
 <form-single-view>
   <template v-slot:header>
     <ui-theme-switcher></ui-theme-switcher>
   </template>

   <flow-sign-in-switcher></flow-sign-in-switcher>
 </form-single-view>

</template>

<script>
  import FormSingleView from "../components/form/single-view/formSingleView";
  import { isComponent } from "../services/component.service";
  import UiThemeSwitcher from "../components/ui/UiThemeSwitcher";
  import UiCard from "../components/ui/card/UiCard";
  import UiCardForm from "../components/ui/card/UiCardForm";
  import UiInput from "../components/ui/input/UiInput";
  import FormSignInByPassword from "../components/form/sign-in/formSignInByPassword";
  import FormSignUp from "../components/form/sign-up/formSignUp";
  import FlowSignInSwitcher from "../components/form/sign-in/formSignInTypeSwitcher";
  import FlowSignIn from "../components/flow/flowSignIn";
  import FormSecurityCodeSend from "../components/form/security-code/formSecurityCodeSend";
  import UiNotification from "../components/ui/notification/UiNotification";
  import UiButton from "../components/ui/button/UiButton";
  import UiNotificationQueue from "../components/ui/notification/UiNotificationQueue";

  const FLOWS = {
    authorization: 'authorization',
    restorePassword: 'restorePassword'
  }

  export default {
    name: "Authorization",
    components: {
      UiNotificationQueue,
      UiButton,
      UiNotification,
      FormSecurityCodeSend,
      FlowSignIn,
      FlowSignInSwitcher,
      FormSignUp,
      FormSignInByPassword,
      UiInput,
      UiCardForm,
      UiCard,
      UiThemeSwitcher,
      FormSingleView
    },
    props: {
      flow: {
        type: String,
        default: FLOWS.authorization,
        validator(value) { return Object.values(FLOWS).indexOf(value) !== -1; }
      },
      firstName: String,
      lastName: String,
      email: String,
      password: String
    },
    data() {
      return {
        currentFlow: this.flow,
        currentUser: {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          password: this.password
        }
      }
    },
    methods: {
      switchFlowTo(flowName, event) {
        Object.assign(this.currentUser, event);
        this.currentFlow = FLOWS[flowName];
      }
    },
    computed: {
      flows() { return isComponent(this.currentFlow, FLOWS); }
    }
  }
</script>

<style scoped lang="scss">

</style>