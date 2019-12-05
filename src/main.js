import 'ant-design-vue/dist/antd.css';  // or 'ant-design-vue/dist/antd.less'

// import "./assets/home/course.png";
// import "./assets/home/big-data.png";
// import "./assets/home/research.png";

import Vue from "vue";
import App from "./App.vue";
import router from "./router";

require('animate.css/animate.min.css');
import "./styles.scss";

Vue.config.productionTip = false;
router.afterEach((to,from,next) => {
    window.scrollTo(0,0);
}),
new Vue({
  router,
  
  render: h => h(App)
}).$mount("#app");
