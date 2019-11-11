import Vue from 'vue';
import { actionsTypes } from "../shared/state";
import { ErrorBoundary } from "../../shared/components";

import AppUserItem from "../user-item/user-item.vue";

import '@progress/kendo-ui/js/kendo.grid';
import { Grid, GridInstaller } from '@progress/kendo-grid-vue-wrapper';
import { DataSource, DataSourceInstaller } from '@progress/kendo-datasource-vue-wrapper'

Vue.use(GridInstaller);
Vue.use(DataSourceInstaller);
Vue.use(DataSource)

export default {
  name: "app-user-list",
  components: {
    ErrorBoundary,
    AppUserItem,
    Grid,
    DataSource
  },

  created() {
    this.$store.dispatch(actionsTypes.FETCH_USER_DATA);
  },

  // errorCaptured(err, vm, info) {
  //   // err: error trace
  //   // vm: component in which error occured
  //   // info: Vue specific error information such as lifecycle hooks, events etc.
  //   // TODO: Perform any custom logic or log to server
  //   // return false to stop the propagation of errors further to parent or global error handler
  // }
};