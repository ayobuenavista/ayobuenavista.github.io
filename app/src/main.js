// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueAnalytics from 'vue-analytics';
import VuePrism from 'vue-prism';
import App from '@/App';
import router from '@/router';

import Particles from '@/components/Particles';
import Resume from '@/components/Resume';

Vue.use(VueAnalytics, {
  id: 'UA-115783431-1',
});
Vue.use(Particles, VuePrism);
Vue.component('Particles', Particles);
Vue.component('Resume', Resume);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
