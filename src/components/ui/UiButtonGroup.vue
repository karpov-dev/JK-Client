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
  .button-group::v-deep {
    .button {
      border-radius: 0;
    }

    .button:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    .button:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }
</style>