import { createApp } from "vue";
import Index from "./Components/Index.vue";

const app = createApp();
app.component("index", Index);
app.mount("#app");
