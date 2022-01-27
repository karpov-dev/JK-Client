<template>
  <button v-bind="$attrs" :data-style="style">
    <slot></slot>
  </button>
</template>

<script>
  const BUTTON_STYLES = {
    default: 'default',
    common: 'common',
    success: 'success',
    warning: 'warning',
    danger: 'danger',
  }

  export default {
    name: "BaseButton",
    props: {
      style: {
        type: String,
        default: BUTTON_STYLES.success,
        validator(value) { return Object.values(BUTTON_STYLES).indexOf(value) !== -1; }
      }
    }
  }
</script>

<style scoped lang="scss">
  button {
    width: inherit;
    font-family: var(--font-famaly__comfortaa);
    background-color: var(--color-button__default);
    transition: background-color var(--transition-duration__fast-xx) linear;
    padding: {
      left: var(--padding__large-xxx);
      right: var(--padding__large-xxx);
      top: var(--padding__medium);
      bottom: var(--padding__medium);
    }
    border: {
      width: 1px;
      style: solid;
      radius: var(--border-radius__small);
    };
  }

  button[data-style='default'] {
    color: var(--color-font__secondary);
    border-color: var(--color-button__default-border);
    &:hover {
      background-color: var(--color-button__default);
    }
  }

  button[data-style='common'] {
    color: var(--color-button__common);
    border-color: var(--color-button__common);
    &:hover {
      background-color: var(--color-button__common);
    }
  }

  button[data-style='success'] {
    color: var(--color-button__success);
    border-color: var(--color-button__success);
    &:hover {
      background-color: var(--color-button__success);
    }
  }

  button[data-style='warning'] {
    color: var(--color-button__warning);
    border-color: var(--color-button__warning);
    &:hover {
      background-color: var(--color-button__warning);
    }
  }

  button[data-style='danger'] {
    color: var(--color-button__danger);
    border-color: var(--color-button__danger);
    &:hover {
      background-color: var(--color-button__danger);
    }
  }

  button[data-style='default'],
  button[data-style='common'],
  button[data-style='success'],
  button[data-style='warning'],
  button[data-style='danger'] {
    &:hover {
      color: var(--color-font__accent);
    }
  }
</style>