<template>
  <div v-if="message"
       :class="{'loading': isLoading, 'loading-error': isLoadingError, 'loading-success': isLoadingSuccess}">
    {{message}}
  </div>
</template>

<script>
  import {INPUT_MESSAGE_TYPES} from "../../store/constants";

  export default {
    name: "UiInputMessageLoading",

    props: {
      message: {
        type: String,
        default: null
      },

      messageType: {
        type: String,
        default: null,
        validator(value) { return INPUT_MESSAGE_TYPES.LOADING_TYPES.indexOf(value) !== -1 }
      }
    },

    computed: {
      isLoading() { return this.messageType === INPUT_MESSAGE_TYPES.TYPES.LOADING},
      isLoadingError() { return this.messageType === INPUT_MESSAGE_TYPES.TYPES.LOADING_ERROR},
      isLoadingSuccess() { return this.messageType === INPUT_MESSAGE_TYPES.TYPES.LOADING_SUCCESS}
    }
  }
</script>

<style lang="scss">

  .loading {
    color: $color-font__loading;
  }

  .loading-error {
    color: $color-font__error;
  }

  .loading-success {
    color: $color-font__success;
  }
</style>