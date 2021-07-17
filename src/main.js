import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import '@/assets/css/animate.min.css';
import '@/assets/css/style.css';
import '@/assets/css/responsive.css';
import '@/assets/css/nice-select.css';
import '@/assets/css/default.css';
import '@/assets/css/bootstrap.min.css';
import '@/assets/css/aos.css';

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
