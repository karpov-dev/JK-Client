<template>
  <form-restore-password-request v-if="forms.isRestorePasswordRequest"
                                 :email="user.email"
                                 @oncancel="$emit('oncancel')"
                                 @onsendrequest="switchFormTo('checkCode')"
  ></form-restore-password-request>

  <form-check-code v-if="forms.isCheckCode"
                   @oncancel="switchFormTo('restorePasswordRequest')"
                   @onsuccess="switchFormTo('restorePassword')"
  ></form-check-code>

  <form-restore-password v-if="forms.isRestorePassword"
                         @oncancel="switchFormTo('restorePasswordRequest')"
  ></form-restore-password>
</template>

<script>
  import FormRestorePasswordRequest from "../form/formRestorePasswordRequest";
  import FormCheckCode from "../form/formCheckCode";
  import FormRestorePassword from "../form/formRestorePassword";
  import StringService from "../../services/string.service";
  import {isComponent} from "../../services/component.service";

  const FORMS = {
    restorePasswordRequest: 'restorePasswordRequest',
    checkCode: 'checkCode',
    restorePassword: 'restorePassword'
  }

  export default {
    name: "flowRestorePassword",
    components: {FormRestorePassword, FormCheckCode, FormRestorePasswordRequest},
    props: {
      form: {
        type: String,
        default: FORMS.restorePasswordRequest,
        validator(value) { return Object.values(FORMS).indexOf(value) !== -1; }
      },
      email: String
    },
    data() {
      return {
        currentForm: this.form,
        user: {
          email: this.email
        }
      }
    },
    methods: {
      switchFormTo(formName) {
        this.currentForm = FORMS[formName];
      }
    },
    computed: {
      forms() { return isComponent(this.currentForm, FORMS); }
    }
  }
</script>