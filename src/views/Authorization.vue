<template>
 <form-single-view>
   <template v-slot:header>
     <ui-theme-switcher></ui-theme-switcher>
   </template>

   <flow-sign-in v-if="localOpenForm === FlowSignIn.name"
                 @on-success="onAuthSuccess"
                 @on-to-sign-up="onChangeOpenFlowTo(FlowSignUp.name, $event)"
   ></flow-sign-in>

   <flow-sign-up v-if="localOpenForm === FlowSignUp.name"
                 @on-to-sign-in="onChangeOpenFlowTo(FlowSignIn.name, $event)"
   ></flow-sign-up>

 </form-single-view>

</template>

<script>
  import FlowSignIn from "../components/form/sign-in/flowSignIn";
  import FlowSignUp from "../components/form/sign-up/flowSignUp";
  import FormSingleView from "../components/form/single-view/formSingleView";
  import UiThemeSwitcher from "../components/ui/UiThemeSwitcher";
  import {Notification, NOTIFICATION_VARIANTS} from "../services/notification/Notification";

  export default {
    name: "Authorization",

    components: {
      UiThemeSwitcher,
      FormSingleView,
      FlowSignUp,
      FlowSignIn,
    },

    props: {
      openForm: {
        type: String,
        default: FlowSignUp.name
      },
      email: String
    },

    data() { return {
      localOpenForm: this.openForm,
      localEmail: this.email,
      FlowSignIn,
      FlowSignUp
    }},

    methods: {
      onChangeOpenFlowTo(name, event) {
        this.localEmail = event.email;
        this.localOpenForm = name;
      },

      onAuthSuccess() {
        const notification = new Notification('Success', 'Success logged in', NOTIFICATION_VARIANTS.success);
        this.$notification.show(notification, this);
      }
    }
  }
</script>

<style scoped lang="scss">

</style>