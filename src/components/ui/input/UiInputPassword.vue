<template>
  <ui-input v-bind="$attrs"
            type="password"
            ref="input"
            minlength="5"
            maxlength="100"
            placeholder="◦◦◦◦◦◦◦◦◦◦◦◦◦"
  ></ui-input>
</template>

<script>
  import UiInput from "./UiInput";

  export default {
    name: "UiInputPassword",

    components: {UiInput},

    methods: {
      reportValidity() { return this.$refs.input.reportValidity(); },

      checkValidity() { return this.$refs.input.checkValidity(); },

      setCustomValidity(error) { return this.$refs.input.setCustomValidity(error); }
    }
  }
</script>