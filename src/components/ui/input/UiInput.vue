<template>
  <component v-bind:is="getInputComponentName" v-bind="$attrs" :type="type">
    <template v-slot:under><slot name="under"></slot></template>
    <template v-slot:over><slot name="over"></slot></template>
    <template v-slot:before><slot name="before"></slot></template>
    <template v-slot:after><slot name="after"></slot></template>
  </component>
</template>

<script>
  import BaseInputText from "../../base/BaseInputText";
  import BaseInputPassword from "../../base/BaseInputPassword";
  import BaseInputEmail from "../../base/BaseInputEmail";

  const BASE_INPUT_PREFIX = 'baseInput';
  const INPUT_VARIANTS = {
    text: 'text',
    password: 'password',
    email: 'email',
    checkbox: 'checkbox'
  }
  const INPUT_VARIANTS_ARRAY = Object.values(INPUT_VARIANTS);

  const capitalizeFirstLatter = str => str.charAt(0).toUpperCase() + str.slice(1);

  export default {
    name: "UiInput",
    components: {
      BaseInputText,
      BaseInputPassword,
      BaseInputEmail
    },
    props: {
      type: {
        type: String,
        default: INPUT_VARIANTS.text,
        validator(value) { return INPUT_VARIANTS_ARRAY.indexOf(value) !== 1; }
      }
    },
    computed: {
      getInputComponentName() { return BASE_INPUT_PREFIX + capitalizeFirstLatter(this.type); }
    }
  }
</script>

<style scoped>

</style>