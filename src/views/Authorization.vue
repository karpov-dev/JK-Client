<template>
 <form-single-view>
   <template v-slot:header>
     <ui-theme-switcher></ui-theme-switcher>
   </template>

   <transition name="fade">
     <div v-if="isOpenSignIn" class="animation-fade-in-left animation-disable-leave">
       <flow-sign-in :email="localEmail"
                     @on-success="onAuthSuccess"
                     @on-to-sign-up="onChangeFlowTo(FlowSignUp.name, $event)"
       ></flow-sign-in>
     </div>
   </transition>


   <transition name="fade">
     <div v-if="isOpenSignUp" class="animation-fade-in-right animation-disable-leave">
       <flow-sign-up :email="localEmail"
                     @on-success="onAuthSuccess"
                     @on-to-sign-in="onChangeFlowTo(FlowSignIn.name, $event)"
       ></flow-sign-up>
     </div>
   </transition>

 </form-single-view>

</template>

<script>
  import FlowSignIn from "../components/form/sign-in/flowSignIn";
  import FlowSignUp from "../components/form/sign-up/flowSignUp";
  import FormSingleView from "../components/form/single-view/formSingleView";
  import UiThemeSwitcher from "../components/ui/UiThemeSwitcher";
  import {Notification, NOTIFICATION_VARIANTS} from "../services/notification/Notification";
  import {routes} from "../router/routes";

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
        default: FlowSignIn.name
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
      onChangeFlowTo(name, event) {
        this.localEmail = event?.email;
        this.localOpenForm = name;
      },

      onAuthSuccess() {
        const notification = new Notification('Success', 'Success logged in', NOTIFICATION_VARIANTS.success);
        this.$notification.show(notification, this);

        this.$router.push(routes.workspaceHub.path);
      }
    },

    computed: {
      isOpenSignIn() { return this.localOpenForm === FlowSignIn.name; },

      isOpenSignUp() { return this.localOpenForm === FlowSignUp.name; }
    }
  }
</script>