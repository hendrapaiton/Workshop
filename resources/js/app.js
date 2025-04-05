import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./Components/App.vue";
import router from "./router";
import "@fontsource/poppins";

createApp(App).use(router).use(createPinia()).mount("#app");
