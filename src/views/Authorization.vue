<template>
 <form-single-view>
   <form-sign-in-or-sign-up></form-sign-in-or-sign-up>
 </form-single-view>
</template>

<script>
  import UiThemeSwitcher from "../components/ui/UiThemeSwitcher";
  import FormSignInOrSignUp from "../components/form/formSignInOrSignUp";
  import FormSingleView from "../components/form/formSingleView";

  export default {
    name: "Authorization",
    components: {
      FormSingleView,
      FormSignInOrSignUp,
      UiThemeSwitcher,
    },
  }
</script>