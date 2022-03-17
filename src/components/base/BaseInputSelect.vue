<template>
  <div class="radio">
    <label class="radio__label">{{label}}</label>
    <input v-bind="$attrs" class="radio__input">
    <span class="radio__checkmark"></span>
  </div>
</template>

<script>
  export default {
    name: "BaseInputSelect",
    props: {
      label: String
    }
  }
</script>

<style scoped lang="scss">
  @import "src/scss/mixins/mixins";

  $checkmark-size: 15px;

  .radio {
    @include justify-content(flex-end);
    position: relative;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    cursor: pointer;
  }

  .radio__label {
    @include user-select(none);
    font-size: var(--font-size__medium);
    color: var(--color-font);
    cursor: pointer;
  }

  .radio__input {
    @include to-full-parent-size();
    position: absolute;
    cursor: pointer;
    opacity: 0;
  }

  .radio__input[type='checkbox'] + .radio__checkmark {
    border-radius: 30%;
  }

  .radio__input[type='radio'] + .radio__checkmark {
    border-radius: 50%;
  }

  .radio__checkmark {
    transition: var(--transition-duration__medium) all linear;
    height: $checkmark-size;
    width: $checkmark-size;
    margin-right: $checkmark-size - 8;
    background-color: var(--color-input__background);
    border: 1px solid var(--color-input-radio__checked);
  }

  .radio:hover {
    filter: var(--brightness__hover);
  }

  input:checked + .radio__checkmark {
    box-shadow: 0 0 0 ($checkmark-size / 3) var(--color-input-radio__checked) inset;
  }

</style>