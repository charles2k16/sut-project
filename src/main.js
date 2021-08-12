import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import 'material-icons/iconfont/material-icons.css';

import '@/assets/css/main.css';
import '@/assets/css/responsive.css';
import "@/plugins/element/index.js";
import 'animate.css';

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
