import Vue from "vue";

import App from "./App.vue";
import router from "./router";

require("./tailwind.css");
require("./assets/css/main.css");

const app = new Vue({
    el: "#app",
    components: { App },
    router
});
