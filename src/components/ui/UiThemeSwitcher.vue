<template>
  <div class="switcher">
    <ui-button-group>
      <ui-select-button class="button-color__common"
                        name="theme-switcher"
                        label="White"
                        value="light"
                        @change="onChangeTheme"
      ></ui-select-button>

      <ui-select-button class="button-color__warning"
                        name="theme-switcher"
                        label="Auto"
                        value="auto"
                        @change="onChangeTheme"
      ></ui-select-button>

      <ui-select-button class="button-color__danger"
                        name="theme-switcher"
                        label="Dark"
                        value="dark"
                        @change="onChangeTheme"
      ></ui-select-button>
    </ui-button-group>
  </div>
</template>

<script>
  import store from "../../store";
  import UiSelectButton from "./input/UiSelectButton";
  import UiButtonGroup from "./button/UiButtonGroup";
  import {uiConstants} from "../../services/constants/ui.constants";
  import {Notification} from "../../services/notification/Notification";

  export default {
    name: "UiThemeSwitcher",
    components: {UiButtonGroup, UiSelectButton},
    methods: {
      onChangeTheme(event) {
        store.commit("theme/setTheme", event.target.value);
      },

      initSelectedTheme() {
        const themeName = store.getters["theme/getSelectedThemeName"];
        const switcher_radios = document.querySelectorAll("[name=theme-switcher]");

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
  @import "../../styles/global/mixins";

  .switcher {
    width: 130px;
  }
</style>