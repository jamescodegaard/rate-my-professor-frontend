import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios';
import bootstrap from 'bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Vue2Filters from 'vue2-filters';

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.baseURL = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://rate-my-professors-backend.herokuapp.com/';

Vue.config.productionTip = false

Vue.use(Vue2Filters)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
