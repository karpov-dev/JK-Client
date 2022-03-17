<template>
  <ui-card-simple title="Sign In">
    <template v-slot:card-description>
      Don't have an account?
      <a href="javascript:void(0);"
         @click="fireEvent('on-to-signup')">Sign Up</a>
    </template>


  </ui-card-simple>
</template>

<script>
  import FormSignInByPassword from "../form/formSignInByPassword";
  import FormSignInByEmail from "../form/formSignInByEmail";
  import UiCardSimple from "../ui/card/UiCardSimple";

  const FORMS = {
    signInByPassword: 'signInByPassword',
    signInByEmail: 'signInByEmail '
  }

  export default {
    name: "flowSignIn",
    components: {UiCardSimple, FormSignInByEmail, FormSignInByPassword},
    props: {
      form: {
        type: String,
        default: FORMS.signInByPassword,
        validator(value) { return Object.values(FORMS).indexOf(value) !== -1;  }
      }
    },
    methods: {
      fireEvent(eventName) {
        this.$emit(eventName, this.user);
      }
    }
  }
</script>

<style scoped>

</style>