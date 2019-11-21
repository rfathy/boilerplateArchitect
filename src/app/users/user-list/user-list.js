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
      // schemaModelFields: {
      //   // ProductID: { editable: false, nullable: true },
      //   Code: { type: 'number', validation: { min: 1 } },
      //   EnName: { validation: { required: {message: "Must not be empty!"} } },
      //   AnName: {  validation: { required: true } },
      //   ProductClassification: {  },
      //   Description: {  },
      //   ParentCategory: { validation: { required: true } },
      //   Status: { type: 'boolean', defaultValue: false }             
      // },     
      productsDataSource: {
        // transport: {
        //     parameterMap: function(options, operation) {
        //         if (operation !== "read" && options.models) {
        //             return {models: kendo.stringify(options.models)};
        //         }
        //     }
        // },
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
        pageSize: 10,
      //   data: [{
      //       "ProductID": 1,
      //       "EnName": "Chai",
      //       "AnName": "arabic",
      //       "Code": 118,
      //       "ProductClassification": 39,
      //       "Status": false,
      //       "Description": "Beverages"
      //   }
      // ]
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
    // this.fetchCarList();
  },
  mounted() {
    // var self = this
    // $.getJSON("http://localhost:8080/mock-data/product.json", function(json_data) { debugger
    //     self.list = json_data
    // })
  },
  methods: {
    // readData: function(e) { debugger
    //   //this simply returns one Product with a name Chai as a dummy
    //   //set your Auth headers here, do the request and then pass
    //   //the data in the e.success method as a parameter
    //   e.success(this.dataSource.default)
    // },
    // fetchCarList: function(){
    //   this.$http.get('http://localhost:8080/mock-data/product.json').then(response => {
    //   this.list = response.data
    // });
  // },
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
    // editGrid() {
    //   // console.log(e.model.isNew());
      
    // },
    // preventEditColumn(e) { 
    //   console.log(e);
    //   // if (e.hasOwnProperty('code') && e.code) {
    //   //   return false;
    //   // } else {
    //   //   return true
    //   // }
    // }
  }
};