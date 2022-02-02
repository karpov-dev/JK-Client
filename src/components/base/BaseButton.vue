<template>
  <button v-bind="$attrs" :style="dynamicColorVariable">
    <slot></slot>
  </button>
</template>

<script>
  const cssVarPrefix = '--color-button__';
  const cssVarPostfix = '-accent';

  const getAccentColor = accentColor => cssVarPrefix + accentColor + cssVarPostfix;
  const toCssVar = varName => `var(${varName})`;

  export default {
    name: "BaseButton",
    props: {
      variant: {
        type: String,
        default: 'common'
      }
    },
    computed: {
      dynamicColorVariable() {
        return {
          '--accent-color': toCssVar(getAccentColor(this.variant))
        }
      }
    }
  }
</script>

<style scoped>
  button {
    width: 100%;
    margin: 0;
    border: 0;
    position: relative;
    font-family: var(--font-famaly__comfortaa);
    padding: var(--padding__medium) var(--padding__large-xxx);
    border-radius: var(--border-radius__small);
  }

  button:disabled {
    filter: var(--brightness__disabled);
  }

  button:active {
    filter: var(--brightness__active);
  }
</style>