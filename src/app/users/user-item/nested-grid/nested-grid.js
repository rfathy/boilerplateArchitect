import $ from 'jquery';
import { EventBus } from '@/app/shared/services/event-bus.js';
// import Vue from 'vue';

import ConfirmPopup from '../confirm-popup/confirm-popup.vue';

// const popupTemplate = Vue.component(popup.name, popup);

export default {
    name: "nested-grid",
    data() {
        return {
            dataText: `Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
            in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.`
        }
    },
    methods: {
        detailInit: function (e) {
            $('<div />').appendTo(e.detailCell).kendoGrid({
              dataSource: {
                type: 'odata',
                transport: {
                  read: 'https://demos.telerik.com/kendo-ui/service/Northwind.svc/Orders'
                },
                serverPaging: true,
                serverSorting: true,
                serverFiltering: true,
                pageSize: 10,
                filter: {
                  field: 'EmployeeID',
                  operator: 'eq',
                  value: e.data.EmployeeID
                },
                // schemaModelId: "'ContractID'",
                // schema-model-fields: "schemaModelFields",
                batch: 'true'
              },
              toolbar: ['create'],
              editable: 'inline',
              scrollable: false,
              sortable: true,
              pageable: true,
              columns: [{
                field: 'OrderID',
                width: '110px'
              },
              {
                field: 'ShipCountry',
                title: 'Ship Country',
                width: '170px'
              },
              {
                field: 'ShipAddress',
                title: 'Ship Address',
                width: '170px'
              },
              {
                field: 'ShipName',
                title: 'Ship Name',
                width: '350px',
                editor: this.categoryDropDownEditor
              },
              {
                command: ['edit', 'destroy'],
                title: '&nbsp;',
                width: '200px'
              }
            ]
            })
          },
          dataBound: function (ev) {
            ev.sender.expandRow(ev.sender.tbody.find('tr.k-master-row').first())
          },
          categoryDropDownEditor: function(container, options) { 
            $('<select required name="' + options.field + '" />')
                .appendTo(container)
                .kendoDropDownTree({
                    autoBind: false,
                    dataTextField: "CategoryName",
                    dataValueField: "CategoryID",
                    valuePrimitive: true,
                    checkboxes: true,
                    checkAll: true,
                    autoClose: false,
                    clearButton: true,
                    dataSource: {
                        type: "odata",
                        transport: {
                            read: "https://demos.telerik.com/kendo-ui/service/Northwind.svc/Categories"
                        }
                    }
            });
        },
        openPopupTemplate: function(e) {
            return {
                template: ConfirmPopup,
                templateArgs : Object.assign({}, e, {
                    parentComponent: this.$refs.datasource1,
                    dataText: this.dataText,
                    confirmBtnText: 'Ok',
                    cancelBtnText: 'Close',
                    headerTitle: 'Popup Title'
                })
            };
        }
    },
    mounted() {
        EventBus.$on('confirmed-action', (e) => {
            console.log(e);
        });
    }
}