// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import axios from 'axios';
import AOS from "aos";
import VueAxios from 'vue-axios';
import Loading from 'vue-loading-overlay';
import 'bootstrap' ;

import App from './App';
import router from './router';
import './bus';

Vue.use(VueAxios, axios);

//AOS
import "aos/dist/aos.css";
app.AOS = new AOS.init({ disable: "phone" });

Vue.config.productionTip = false;

Vue.component('Loading',Loading);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
