<template>
  <ui-card-simple title="Create Account">
    <template v-slot:card-description>
      Already have an Account?
      <a href="javascript:void(0);" @click="toSignIn">Sign In</a>
    </template>

    <template v-slot:default>
      <div class="card__initials">
        <ui-input name="firstName"
                  title="First Name"
                  :value="user.firstName"
                  @input="onUserInput"
        ></ui-input>
        <ui-input name="lastName"
                  title="Last Name"
                  :value="user.lastName"
                  @input="onUserInput"
        ></ui-input>
      </div>

      <ui-input name="email"
                title="Email"
                type="email"
                :value="user.email"
                @input="onUserInput"
      ></ui-input>

      <ui-input name="password"
                title="Password"
                type="password"
                :value="password"
                @input="onUserInput"
      ></ui-input>

      <ui-button variant="success" @click="onCreateAccount">Create</ui-button>

      <ui-separator-line-text>OR</ui-separator-line-text>

      <ui-button-group>
        <ui-button disabled variant="danger">Google (Soon)</ui-button>
        <ui-button disabled variant="common">Twitter (Soon)</ui-button>
      </ui-button-group>

      <ui-spinner :is-show="isLoading" variant="circle-doted"></ui-spinner>
    </template>
  </ui-card-simple>
</template>

<script>
  import UiCardSimple from "../ui/card/UiCardSimple";
  import UiInput from "../ui/input/UiInput";
  import UiButton from "../ui/button/UiButton";
  import UiInputGroup from "../ui/input/UiInputGroup";
  import UiSeparatorLineText from '../ui/separator/UiSeparatorLineText';
  import UiButtonGroup from "../ui/button/UiButtonGroup";
  import {AuthApi} from "../../services/api/AuthApi";
  import UiSpinner from "../ui/spinner/UiSpinner";

  export default {
    name: "formSignUp",
    components: {
      UiSpinner,
      UiButtonGroup,
      UiInputGroup,
      UiButton,
      UiInput,
      UiCardSimple,
      UiSeparatorLineText
    },
    props: {
      firstName: String,
      lastName: String,
      email: String,
      password: String
    },
    data() {
      return {
        isLoading: false,
        user: {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          password: this.password
        }
      }
    },
    methods: {
      onUserInput(event) {
        this.user[event.target.name] = event.target.value;
      },

      onCreateAccount() {
        this.isLoading = true;
        AuthApi.api.user.signUp.call(this.user)
            .then(response => this.$emit('onsuccess', response))
            .catch(error => this.$emit('onerror', error))
            .finally(() => this.isLoading = false);
      },

      toSignIn() {
        this.$emit('ontosignin', this.user);
      }
    }
  }
</script>

<style scoped>
  .card__initials {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  @media screen and (min-width: 800px) {
    .card__initials {
      flex-direction: row;
    }
  }
</style>