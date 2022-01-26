<template>
  <button v-bind="$attrs"
          :class="{ 'button__standard':isStandardVariant,
                    'button__next':isNextVariant,
                    'button__success':isSuccessVariant,
                    'button__error':isErrorVariant}">
    <slot>{{label}}</slot>
  </button>
</template>

<script>
  const BUTTON_VARIANTS = {
    STANDARD: 'standard',
    NEXT: 'next',
    SUCCESS: 'success',
    ERROR: 'error'
  }

  export default {
    name: "UiButton",
    props: {
      label: {
        type: String,
        default: null
      },

      variant: {
        type: String,
        default: BUTTON_VARIANTS.STANDARD,
        validator(value) { return Object.values(BUTTON_VARIANTS).indexOf(value) !== -1 }
      }
    },
    computed: {
      isStandardVariant() { return this.variant === BUTTON_VARIANTS.STANDARD },
      isNextVariant() { return this.variant === BUTTON_VARIANTS.NEXT },
      isSuccessVariant() { return this.variant === BUTTON_VARIANTS.SUCCESS },
      isErrorVariant() { return this.variant === BUTTON_VARIANTS.ERROR }
    }
  }
</script>

<style scoped lang="scss">

  button {
    border-radius: 6px;
    padding: 9px 30px;
    transition: all .3s;
    width: inherit;
  }

  .button:active {
    transform: scale(0.99);
  }

  .button__standard {
    color: $color-button-standard__font;
    border: 1px solid $color-button-standard__border;
    background: $color-button-standard__background;
  }

  .button__standard:hover {
    color: $color-button-standard__font-hover;
    border: 1px solid $color-button-standard__border-hover;
    background: $color-button-standard__background-hover;
  }

  .button__next {
    color: $color-button-next__font;
    border: 1px solid $color-button-next__border;
    background: $color-button-next__background;
  }

  .button__next:hover {
    color: $color-button-next__font-hover;
    border: 1px solid $color-button-next__border-hover;
    background: $color-button-next__background-hover;
  }

  .button__success {
    color: $color-button-success__font;
    border: 1px solid $color-button-success__border;
    background: $color-button-success__background;
  }

  .button__success:hover {
    color: $color-button-success__font-hover;
    border: 1px solid $color-button-success__border-hover;
    background: $color-button-success__background-hover;
  }

  .button__error {
    color: $color-button-error__font;
    border: 1px solid $color-button-error__border;
    background: $color-button-error__background;
  }

  .button__error:hover {
    color: $color-button-error__font-hover;
    border: 1px solid $color-button-error__border-hover;
    background: $color-button-error__background-hover;
  }
</style>