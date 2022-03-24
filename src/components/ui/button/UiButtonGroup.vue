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
    display: flex;
    flex-direction: row;
  }

  .button-group::v-deep {

    .button-group__allowed:not(:first-of-type):not(:last-of-type),
    .button-group__allowed:not(:first-of-type):not(:last-of-type) * {
      border-radius: 0;
      border-left-width: 0;
      border-right-width: 0;
    }

    .button-group__allowed:not(:last-of-type):first-of-type,
    .button-group__allowed:not(:last-of-type):first-of-type * {
      border-right-width: 0;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }

    .button-group__allowed:not(:first-of-type):last-of-type,
    .button-group__allowed:not(:first-of-type):last-of-type * {
      border-left-width: 0;
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }

    .button-group__allowed:first-of-type,
    .button-group__allowed:first-of-type * {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    .button-group__allowed:last-of-type,
    .button-group__allowed:last-of-type * {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }

  }
</style>