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

<style scoped lang="scss">
  $form-item__max-width: 500px;
  $form-item__min-width: 300px;

  .form__grid {
    position: relative;
    display: grid;
    height: 100vh;
    grid-template-columns: repeat(3, auto);
    grid-template-rows: repeat(3, auto);
  }

  .form__grid--content {
    display: flex;
    justify-content: center;
    align-items: center;
    grid-column: 2;
    grid-row: 2;
    width: 100%;
  }

  .form__grid--content-item {
    max-width: $form-item__max-width;
    min-width: $form-item__min-width;
    width: 100%;
  }

</style>