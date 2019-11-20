import $ from 'jquery';
// import kendo from '@progress/kendo-ui';

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
  data(){
    return {
      datasource1 :{
        schema: {
          model: {
              id: "ProductID",
              fields: {
                  id: { editable: false, nullable: true },
                  en_name: { validation: { required: true } },
                  code: { type: 'number', validation: { required: true, min: 1 } },
                  ar_name: { validation: { required: true } },
                  classification: {type: 'string'},
                  description:{type: 'string'},
                  parent_category:{type: 'string'},
                  status: { type: 'boolean', defaultValue: false }
              }
          }
      }
      }
    }
  },
  methods: {
    customBoolEditor(container, options) {
      $('<input type="checkbox" name="' + options.field + '"/>')
            .appendTo(container)
            .kendoMobileSwitch({
            onLabel: "YES",
            offLabel: "NO"
          });
    }
  }
};