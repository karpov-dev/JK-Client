<template>
  <fieldset class="switcher">
    <input
        class="switcher__radio switcher__radio--sun"
        name="theme"
        type="radio"
        value="light"
        @change="onChangeTheme"
    />
    <input
        checked
        class="switcher__radio switcher__radio--circle"
        name="theme"
        type="radio"
        value="auto"
        @change="onChangeTheme"
    />
    <input
        class="switcher__radio switcher__radio--moon"
        name="theme"
        type="radio"
        value="dark"
        @change="onChangeTheme"
    />
  </fieldset>
</template>

<script>

import store from "../../store";

export default {
  name: "UiThemeSwitcher",
  methods: {
    onChangeTheme(event) {
      store.commit('storage/setTheme', event.target.value);
    },

    initSelectedTheme() {
      const themeName = store.getters["storage/getSelectedThemeName"];
      const switcher_radios = document.querySelectorAll('.switcher__radio');

      switcher_radios.forEach(switcher_radio => {
        switcher_radio.checked = (themeName === switcher_radio.value);
      });
    }
  },
  mounted() {
    this.initSelectedTheme();
  }
};
</script>

<style lang="scss" scoped>
@import "src/scss/mixins/mixins";

.switcher {
  position: relative;
  display: flex;
  justify-content: space-between;
  width: fit-content;
  border: {
    width: 3px;
    radius: 18px;
    style: solid;
    color: var(--color-border__theme-swither);
  }
}

.switcher__radio {
  @include appearance(none);
  @include background-img__contain-no-repeat();
  transition: all 0.5s linear;
  width: 20px;
  height: 20px;
  margin: 5px;

  &:checked {
    transform: scale(1.5);
  }
}

[data-theme='dark'] {
  .switcher__radio--circle,
  .switcher__radio--moon,
  .switcher__radio--sun {
    filter: invert(1);
  }
}

.switcher__radio--circle {
  @include use-svg('circle');
}

.switcher__radio--moon {
  @include use-svg('moon');
}

.switcher__radio--sun {
  @include use-svg('sun');
}
</style>