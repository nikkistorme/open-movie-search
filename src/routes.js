import Search from "./components/Search.vue";
import History from "./components/History.vue";

export const routes = [
  { path: "", component: Search },
  { path: "/history", component: History }
];
