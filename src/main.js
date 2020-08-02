import Vue from "vue";
import VueResource from "vue-resource";
import VueRouter from "vue-router";
import { routes } from "./routes";
import { store } from "./store/store.js";
import App from "./App.vue";

// Vue.config.productionTip = false;

Vue.use(VueResource);

Vue.use(VueRouter);
const router = new VueRouter({
  routes,
  mode: "history"
});

Vue.http.options.root = "https://www.omdbapi.com/";

new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App),
  mounted() {
    console.log("App mounted!");
    if (localStorage.getItem("history")) {
      this.$store.state.history = JSON.parse(localStorage.getItem("history"));
    }
  }
});
