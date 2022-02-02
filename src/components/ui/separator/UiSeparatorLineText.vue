<template>
  <div class="separator-line">
    <separator-line></separator-line>

    <div class="separator-line__text">
      <slot>{{text}}</slot>
    </div>

    <separator-line></separator-line>
  </div>
</template>

<script>
  import SeparatorLine from "./UiSeparatorLine";

  export default {
    name: "UiSeparatorLineText",
    components: {SeparatorLine},
    props: {
      text: {
        type: String,
        default: null
      }
    }
  }
</script>

<style scoped lang="scss">
  $text-horizontal-margin: 8px;
  $component-vertical-margin: 10px;

  .separator-line {
    display: flex;
    flex-direction: row;
    margin-top: $component-vertical-margin;
    margin-bottom: $component-vertical-margin;
  }

  .separator-line__text {
    margin-left: $text-horizontal-margin;
    margin-right: $text-horizontal-margin;
  }
</style>