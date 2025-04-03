import { createApp } from "vue";
import Index from "./Components/Index.vue";
import '@fontsource/poppins';

const app = createApp();
app.component("index", Index);
app.mount("#app");
