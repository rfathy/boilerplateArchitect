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
  name: "user-list",
  data() {
    return {
      checked: true,
      schemaModelFields: {
        id: { editable: false, nullable: true },
        code: { editable: false, nullable: true },
        en_name: { validation: { required: {message: "Must not be empty!"} } },
        ar_name: {  validation: { required: true, min: 1 } },
        classification: {  },
        description: {  },
        parent_category: { validation: { required: true } },
        // status: { type: 'boolean', defaultValue: false }             
      },     
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
  methods: {
    customBoolEditor(container, options) {
      // var guid = kendo.guid();
      // $('<input class="k-checkbox" id="' + guid + '" type="checkbox" name="Discontinued" data-type="boolean" data-bind="checked:Discontinued">').appendTo(container);
      // $('<label class="k-checkbox-label" for="' + guid + '">&#8203;</label>').appendTo(container);
      // $('<kendo-switch :checked="checked"></kendo-switch>').appendTo(container);
      $('<input type="checkbox" name="' + options.field + '"/>')
            .appendTo(container)
            .kendoMobileSwitch({
            onLabel: "YES",
            offLabel: "NO"
      });
    },
    editGrid(e) { debugger
      console.log(e.model.isNew());
      
    },
    preventEditColumn(e) { 
      console.log(e);
      // if (e.hasOwnProperty('code') && e.code) {
      //   return false;
      // } else {
      //   return true
      // }
    }
  }
};