<template>
  <div class="ui__base-card">
    <base-card>
      <div class="base-bard__header">
        <slot name="header"></slot>
      </div>

      <div class="base-bard__content">
        <slot></slot>
      </div>

      <div class="base-bard__footer">
        <slot name="footer"></slot>
      </div>
    </base-card>
  </div>

</template>

<script>
  import BaseCard from "../../base/BaseCard";

  export default {
    name: "UiBaseCard",
    components: {BaseCard}
  }
</script>

<style scoped lang="scss">

  .ui__base-card {
    box-shadow: var(--box-shadow__medium);
    border-radius: var(--border-radius__large-xx);
  }

</style>