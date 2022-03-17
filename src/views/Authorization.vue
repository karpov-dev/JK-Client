<template>
 <form-single-view>
   <template v-slot:header>
     <ui-theme-switcher></ui-theme-switcher>
   </template>

    <flow-authorization v-if="flows.isAuthorization"
                        :first-name="currentUser.firstName"
                        :last-name="currentUser.lastName"
                        :email="currentUser.email"
                        :password="currentUser.password"
                        @onforgotpassword="switchFlowTo('restorePassword', $event)"
    ></flow-authorization>

   <flow-restore-password v-if="flows.isRestorePassword"
                          :email="currentUser.email"
                          @oncancel="switchFlowTo('authorization', $event)"
   ></flow-restore-password>
 </form-single-view>
</template>

<script>
  import FormSingleView from "../components/form/formSingleView";
  import FlowAuthorization from "../components/flow/flowAuthorization";
  import FlowRestorePassword from "../components/flow/flowRestorePassword";
  import { isComponent } from "../services/component.service";
  import UiThemeSwitcher from "../components/ui/UiThemeSwitcher";

  const FLOWS = {
    authorization: 'authorization',
    restorePassword: 'restorePassword'
  }

  export default {
    name: "Authorization",
    components: {
      UiThemeSwitcher,
      FlowRestorePassword,
      FlowAuthorization,
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