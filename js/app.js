import {
  createApp,
  ref,
  computed,
} from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple']


createApp({
  setup() {
    const changeBgColor = () => {
        const index = Math.floor(Math.random() * colors.length);
        document.body.style.background = colors[index];
    }
    return {
      changeBgColor
    };
  },
}).mount("#app");
