<template>
  <ui-input v-bind="$attrs"
            type="email"
            ref="input"
            minlength="8"
            maxlength="100"
            placeholder="billie.armstrong@gmail.com"
  ></ui-input>
</template>

<script>
  import UiInput from "./UiInput";

  export default {
    name: "UiInputEmail",
    components: {UiInput},
    methods: {
      reportValidity() { return this.$refs.input.reportValidity(); },

      checkValidity() { return this.$refs.input.checkValidity(); },

      setCustomValidity(error) { return this.$refs.input.setCustomValidity(error); }
    }
  }
</script>