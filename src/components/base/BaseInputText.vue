<template>
  <div class="base-input__text">
    <label v-if="title" :data-required="required">{{title}}</label>
    <base-input v-bind="$attrs">
      <template v-slot:after><slot name="after"></slot></template>
      <template v-slot:before><slot name="before"></slot></template>
    </base-input>
  </div>
</template>

<script>
  import BaseInput from "./BaseInput";

  export default {
    name: "BaseInputText",
    components: {BaseInput},
    props: {
      title: {
        type: String,
        default: null
      },

      required: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style scoped>
  .base-input__text {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  label {
    color: var(--color-font__secondary);
    font-size: var(--font-size__small-x);
  }

  label[data-required='true']:before {
    content: '*';
    color: var(--color-font-required);
  }
</style>