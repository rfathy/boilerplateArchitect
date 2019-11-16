import Vue from 'vue';

import './plugins';

import App from './app/app.vue';

//bootstrap
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)

//kendo
import '@progress/kendo-ui';

import { Grid, GridInstaller } from '@progress/kendo-grid-vue-wrapper';
Vue.use(GridInstaller);

import { DataSource, DataSourceInstaller } from '@progress/kendo-datasource-vue-wrapper';
Vue.use(DataSourceInstaller)

import { Tooltip, KendoPopupsInstaller } from '@progress/kendo-popups-vue-wrapper'
Vue.use(KendoPopupsInstaller)

//styles & layout
import './main.scss';
import Default from './app/shared/layouts/default.vue'
Vue.component('default-layout', Default)

//routes
import router from './app/app-routes';
import store from './app/app-state';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  components: {
    Grid,
    DataSource,
    Tooltip
  },
  render: h => h(App)
}).$mount('#app');
