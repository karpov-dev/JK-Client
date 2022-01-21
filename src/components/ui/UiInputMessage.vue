<template>
  <div v-if="isSimpleType">
    <ui-input-message-simple v-bind="$attrs" :message-type="messageType"></ui-input-message-simple>
  </div>

  <div v-if="isLoadingType">
    <ui-input-message-loading v-bind="$attrs" :message-type="messageType"></ui-input-message-loading>
  </div>
</template>

<script>
  import {INPUT_MESSAGE_TYPES} from "../../store/constants";
  import UiInputMessageSimple from "./UiInputMessageSimple";
  import UiInputMessageLoading from "./UiInputMessageLoading";

  export default {
    name: "UiInputMessage",

    components: {
      UiInputMessageLoading,
      UiInputMessageSimple
    },

    props: {
      messageType: {
        type: String,
        default: INPUT_MESSAGE_TYPES.TYPES.TIP,
        validator(value) { return Object.values(INPUT_MESSAGE_TYPES.TYPES).indexOf(value) !== -1 }
      }
    },

    computed: {
      isSimpleType() { return INPUT_MESSAGE_TYPES.SIMPLE_TYPES.indexOf(this.messageType) !== -1 },

      isLoadingType() { return INPUT_MESSAGE_TYPES.LOADING_TYPES.indexOf(this.messageType) !== -1 }
    }
  }
</script>

<style>

</style>