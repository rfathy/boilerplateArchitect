import Vue from 'vue';

import './plugins';

import App from './app/app.vue';

import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)

import '@progress/kendo-ui';

import { Grid, GridInstaller } from '@progress/kendo-grid-vue-wrapper';
Vue.use(GridInstaller);

import { DataSource, DataSourceInstaller } from '@progress/kendo-datasource-vue-wrapper';
Vue.use(DataSourceInstaller)

import './main.scss';
import router from './app/app-routes';
import store from './app/app-state';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  components: {
    Grid,
    DataSource
  },
  render: h => h(App)
}).$mount('#app');
