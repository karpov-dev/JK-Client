<template>
 <form-single-view>
   <template v-slot:header>
     <ui-theme-switcher></ui-theme-switcher>
   </template>

   <flow-sign-in-switcher></flow-sign-in-switcher>
 </form-single-view>
</template>

<script>
  import FormSingleView from "../components/form/formSingleView";
  import { isComponent } from "../services/component.service";
  import UiThemeSwitcher from "../components/ui/UiThemeSwitcher";
  import UiCard from "../components/ui/card/UiCard";
  import UiCardForm from "../components/ui/card/UiCardForm";
  import UiInput from "../components/ui/input/UiInput";
  import FormSignInByPassword from "../components/form/formSignInByPassword";
  import FormSignUp from "../components/form/formSignUp";
  import FlowSignInSwitcher from "../components/flow/flowSignInSwitcher";

  const FLOWS = {
    authorization: 'authorization',
    restorePassword: 'restorePassword'
  }

  export default {
    name: "Authorization",
    components: {
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
  @import "src/scss/design/_input/input-base";
</style>