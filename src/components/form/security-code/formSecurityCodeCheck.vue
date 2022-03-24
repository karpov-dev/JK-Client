<template>
  <ui-card-content>
    <ui-input-password label="Code"
                       name="code"
                       :value="this.user.code"
                       @input="onInput"
    ></ui-input-password>

    <ui-button-group>
      <ui-button class="button-color__cancel" @click="$emit('on-cancel')">Cancel</ui-button>
      <ui-button class="button-color__check" @click="onCheck">Check</ui-button>
    </ui-button-group>

  </ui-card-content>
</template>

<script>
  import UiCardContent from "../../ui/card/UiCardContent";
  import UiInputPassword from "../../ui/input/UiInputPassword";
  import UiButtonGroup from "../../ui/button/UiButtonGroup";
  import UiButton from "../../ui/button/UiButton";
  import {isContainElement} from "../../../services/arrays.service";
  import {uiConstants} from "../../../services/constants/ui.constants";
  import {ServerApi} from "../../../services/api/ServerApi";

  export default {
    name: "formSecurityCodeCheck",

    components: {
      UiButton,
      UiButtonGroup,
      UiInputPassword,
      UiCardContent
    },

    props: {
      code: String,
      email: {
        type: String,
        required: true
      },
      codeType: {
        type: String,
        required: true,
        validator(value) { return isContainElement(value, Object.values(uiConstants.securityCode.codeType)); }
      },
    },

    data() { return {
      user: {
        code: this.code
      }
    }},

    methods: {
      onInput(event) {
        this.user[event.target.name] = event.target.value;
      },

      onCheck() {
        this.$emit('is-loading');

        console.log(this.email);
        console.log(this.codeType);
        console.log(this.user.code);

        ServerApi.api.code.check.call(this.email, this.codeType, this.user.code)
            .then(response => console.log(response))
            .catch(error => console.log(error))
            .finally(() => this.$emit('is-loading-done'));
      }
    }
  }
</script>

<style scoped lang="scss">

</style>