<template>
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
</template>

<script>
  import BaseCard from "../../base/BaseCard";

  export default {
    name: "UiBaseCard",
    components: {BaseCard}
  }
</script>