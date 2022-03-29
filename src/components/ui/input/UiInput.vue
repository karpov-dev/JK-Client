<template>
  <div class="input">
    <label class="input-label" :data-required="$attrs?.required">{{label}}</label>

    <div class="input-wrapper">
      <div class="input-before">
        <slot name="before"></slot>
      </div>

      <div class="input-over">
        <slot name="over"></slot>
      </div>

      <input ref="input"
             :class="{'input-invalid': validationMessage}"
             v-bind="$attrs"
             :placeholder="$attrs?.placeholder ? $attrs.placeholder : ' '"
             :value="value"
             @input="$emit('update:value', $event.target.value)"
             @blur="onBlur"
      >

      <div class="input-under">
        <slot name="under"></slot>
      </div>

      <div class="input-after">
        <slot name="after"></slot>
      </div>
    </div>

    <label v-if="validationMessage" class="input-label__error">{{validationMessage}}</label>
  </div>
</template>

<script>
  export default {
    name: "UiInput",

    props: {
      label: String,
      value: String,
    },

    data() { return {
      validationMessage: ''
    }},

    methods: {
      onBlur() {
        this.validationMessage = this.$refs.input.validationMessage;
      },

      reportValidity() {
        this.$refs.input.focus();
        this.$refs.input.blur();
        return this.checkValidity();
      },

      checkValidity() { return this.$refs.input.checkValidity(); },

      setCustomValidity(error) { return this.$refs.input.setCustomValidity(error); }
    },
  }
</script>

<style scoped lang="scss">
  @import "src/styles/design/input/input-base";
</style>