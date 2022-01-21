<template>
  <component v-bind:is="currentInputComponent" v-bind='$attrs'></component>
  <ui-input-message v-bind="$attrs" style="font-size: 0.7em"></ui-input-message>
</template>

<script>
  import {INPUT_DESCRIBES} from "../../store/constants";

  import UiInputText from "./UiInputText";
  import UiInputMessage from "./UiInputMessage";
  import UiInputEmail from "./UiInputEmail";
  import UiInputPassword from "./UiInputPassword";

  export default {
    name: "UiInput",

    components: {
      UiInputMessage,
      UiInputText,
      UiInputEmail,
      UiInputPassword
    },

    props: {
      type: {
        type: String,
        default: INPUT_DESCRIBES.TEXT.type,
      }
    },

    computed: {
      currentInputComponent() {
        return Object.values(INPUT_DESCRIBES).find((element) => element.type === this.type)?.componentName;
      }
    },
  }
</script>