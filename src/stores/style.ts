import { defineStore } from "pinia";
import * as styles from "@/styles";
import { darkModeKey, styleKey } from "@/config";

type AvailableStyle = keyof typeof styles;

type State = {
  [P in keyof styles.StyleDef as `${string & P}Style`]: styles.StyleDef[P];
} & {
  darkMode: boolean;
};

export const useStyleStore = defineStore("style", {
  state: (): State => ({
    /* Styles */
    asideStyle: "",
    asideScrollbarsStyle: "",
    asideBrandStyle: "",
    asideMenuItemStyle: "",
    asideMenuItemActiveStyle: "",
    asideMenuDropdownStyle: "",
    navBarItemLabelStyle: "",
    navBarItemLabelHoverStyle: "",
    navBarItemLabelActiveColorStyle: "",
    overlayStyle: "",

    /* Dark mode */
    darkMode: false,
  }),
  actions: {
    setStyle(payload: AvailableStyle) {
      if (!styles[payload]) {
        return;
      }

      if (typeof localStorage !== "undefined") {
        localStorage.setItem(styleKey, payload);
      }

      const style = styles[payload];

      let key: keyof styles.StyleDef;
      for (key in style) {
        this[`${key}Style`] = style[key];
      }
    },

    setDarkMode(payload: boolean | null = null) {
      this.darkMode = payload !== null ? payload : !this.darkMode;

      if (typeof localStorage !== "undefined") {
        localStorage.setItem(darkModeKey, this.darkMode ? "1" : "0");
      }

      if (typeof document !== "undefined") {
        document.body.classList[this.darkMode ? "add" : "remove"](
          "dark-scrollbars"
        );

        document.documentElement.classList[this.darkMode ? "add" : "remove"](
          "dark-scrollbars-compat"
        );
      }
    },
  },
});
