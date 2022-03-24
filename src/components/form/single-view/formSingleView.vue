<template>
  <div class="form__grid">
    <div class="form__grid--header">
      <slot name="header"></slot>
    </div>

    <div class="form__grid--content">
      <div class="form__grid--content-item">
        <slot></slot>
      </div>
    </div>

    <div class="form__grid--footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "formSingleView"
  }
</script>

<style scoped>
  .form__grid {
    position: relative;
    display: grid;
    height: 100vh;
    grid-template-columns: repeat(3, auto);
    grid-template-rows: repeat(3, auto);
  }

  .form__grid--header {
    grid-column-start: 1;
    grid-column-end: 4;
  }

  .form__grid--content {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    grid-column: 2;
    grid-row: 2;
    width: 100%;
  }

  .form__grid--content-item {
    max-width: 500px;
    min-width: 500px;
    width: 100%;
  }

</style>