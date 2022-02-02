<template>
  <div class="input-group">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "UiInputGroup"
  }
</script>

<style scoped>
  .input-group {
    display: flex;
    flex-direction: column;
    gap: 50px;
  }

  .input-group:last-child {
    margin-bottom: 5px;
  }
</style>