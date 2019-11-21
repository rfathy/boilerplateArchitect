import $ from 'jquery';
// import kendo from '@progress/kendo-ui';

import Vue from 'vue';
import { actionsTypes } from "../shared/state";
import { ErrorBoundary } from "../../shared/components";

import AppUserItem from "../user-item/user-item.vue";

import '@progress/kendo-ui/js/kendo.grid';
import { Grid, GridInstaller } from '@progress/kendo-grid-vue-wrapper';
import { DataSource, DataSourceInstaller } from '@progress/kendo-datasource-vue-wrapper'

import json from '../../../../public/mock-data/product.json'

Vue.use(GridInstaller);
Vue.use(DataSourceInstaller);
Vue.use(DataSource)

export default {
  name: "user-list",
  data() {
    return {
      checked: true,    
      productsDataSource: {
        data: json,
        schema: {
            model: {
                id: "ProductID",
                fields: {
                  ProductID: { editable: false, nullable: true },
                  Code: { type: 'number', validation: { min: 1 } },
                  EnName: { validation: { required: {message: "Must not be empty!"} } },
                  AnName: {  validation: { required: true } },
                  ProductClassification: {  },
                  Description: {  },
                  ParentCategory: { validation: { required: true } },
                  Status: { type: 'boolean', defaultValue: false } 
                }
            }
        },
        pageSize: 5,
      // transport: {
      //   read: {
      //     url: 'http://localhost:8080/mock-data/product.json'
      //   }
      // }
      }
    }
  },
  components: {
    ErrorBoundary,
    AppUserItem,
    Grid,
    DataSource
  },
  created() {
    this.$store.dispatch(actionsTypes.FETCH_USER_DATA);
  },
  mounted() {
  },
  methods: {
    customBoolEditor(container, options) {
      // $('<kendo-switch :checked="checked"></kendo-switch>').appendTo(container);
      $('<input type="checkbox" name="' + options.field + '"/>')
            .appendTo(container)
            .kendoMobileSwitch({
            onLabel: "YES",
            offLabel: "NO"
      });
    },
    // editGrid() {
    //   // console.log(e.model.isNew());
      
    // },
    preventEditColumn(e) { 
      console.log(e.isNew());
      if (e.isNew()) {
        return true;
      } else {
        return false
      }
    }
  }
};