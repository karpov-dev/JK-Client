<template>
  <div class="button-group">
    <slot :style="{background: red}"></slot>
  </div>
</template>

<script>
  export default {
    name: "UiButtonGroup"
  }
</script>

<style scoped lang="scss">
  .button-group {
    width: fit-content;
  }

  .button-group::v-deep {

    button:not(:first-child):not(:last-child) {
      border-radius: 0;
      border-left-width: 0;
      border-right-width: 0;
    }

    button:not(:last-child):first-child {
      border-right-width: 0;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }

    button:not(:first-child):last-child {
      border-left-width: 0;
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }

    button:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    button:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }
</style>