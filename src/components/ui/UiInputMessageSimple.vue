<template>
  <div v-if="message"
       :class="{tip: isTip, info: isInfo, success: isSuccess, error: isError}">
    {{message}}
  </div>
</template>

<script>
  import {INPUT_MESSAGE_TYPES} from "../../store/constants";

  export default {
    name: "UiInputMessageSimple",

    props: {
      message: {
        type: String,
        default: null
      },

      messageType: {
        type: String,
        default: null,
        validator(value) { return INPUT_MESSAGE_TYPES.SIMPLE_TYPES.indexOf(value) !== -1 }
      }
    },

    computed: {
      isTip() { return this.messageType === INPUT_MESSAGE_TYPES.TYPES.TIP },
      isInfo() { return this.messageType === INPUT_MESSAGE_TYPES.TYPES.INFO },
      isSuccess() { return this.messageType === INPUT_MESSAGE_TYPES.TYPES.SUCCESS },
      isError() { return this.messageType === INPUT_MESSAGE_TYPES.TYPES.ERROR },
    }
  }
</script>

<style lang="scss">

  .tip {
    color: $color-font__tip;
  }

  .info {
    color: $color-font__info;
  }

  .success {
    color: $color-font__success;
  }

  .error {
    color: $color-font__error;
  }
</style>