import json from '../../../../../public/mock-data/product.json'
import nestedJson from '../../../../../public/mock-data/nested-products.json'
import $ from 'jquery';
// import kendo from '@progress/kendo-ui';

export default {
    name: "products-nested-grid",
    data() {
        return {
            checked: true,   
            centralizedData: [],
            productsDataSource: {
                data: json,
                schema: {
                    model: {
                        id: "ProductID",
                        fields: {
                        ProductID: { editable: false, nullable: true },
                        Code: { type: 'number', validation: { min: 1 } },
                        EnName: { validation: { required: {message: "Required"} } },
                        AnName: {  validation: { required: {message: "Required"} } },
                        ProductClassification: {  },
                        Description: {  },
                        ParentCategory: { validation: { required: {message: "Required"} } },
                        Status: { type: 'boolean' } 
                        }
                    }
                },
                pageSize: 5
            }
        }
    },
    created() { 
        this.$store.dispatch('getProductsData')
    },
    mounted() { 
        // this.centralizedData = this.$store.getters.getProducts
    },
    computed: {
        jsonData: function() { debugger
            return this.$store.getters.getProducts
            // return new kendo.data.DataSource({
            //     data: this.$store.getters.getProducts
            //   })
        }
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
        preventEditColumn(e) { 
            console.log(e.isNew());
            if (e.isNew()) {
                return true;
            } else {
                return false
            }
        },
        // DropdownList Filter in Grid
        statusFilter(args) { 
            args.element.kendoDropDownList({
                dataSource: {
                    data: [
                    { text: "Active", value: true },
                    { text: "Inactive", value: false }
                    ]
                },
                dataTextField: "text",
                dataValueField: "value",
                valuePrimitive: true,
                optionLabel: "All",
                autoWidth: true
            });
        },
        onFilter(e){debugger
            if (e.field === "Status") {
                var filter = e.filter;
                if (filter && filter.filters && filter.filters.length > 0) {
                var filters = filter.filters;
                // convert the filter string value to a boolean one
                filters[0].value = (filters[0].value === "true");
                }
            }
        },
        detailInit: function (e) {
            $('<div />').appendTo(e.detailCell).kendoGrid({
              dataSource: {
                data: nestedJson,
                schema: {
                    model: {
                        // id: "UOMID",
                        fields: {
                            // UOMID: { editable: false, nullable: true },
                            UOMCode: { type: 'number', validation: { min: 1 } },
                            UOMEnName: { validation: { required: {message: "Required"} } },
                            UOMAnName: {  validation: { required: {message: "Required"} } },
                            UOMDescription: { type: 'string' },
                            UOMStatus: { type: 'boolean' } 
                        }
                    }
                },
                pageSize: 10,
                filter: {
                  field: 'ProductID',
                  operator: 'eq',
                  value: e.data.ProductID
                },
                batch: 'true'
              },
              toolbar: [
                  {
                    name: 'create',
                    text: 'Add UOM'
                  }
              ],
              editable: 'inline',
              scrollable: false,
              sortable: true,
              pageable: true,
              noRecords: true,
              columns: [{
                field: 'UOMCode',
                title: 'UOM Code',
                // editable: this.preventEditColumn,
                width: '110px'
              },
              {
                field: 'UOMEnName',
                title: 'UOM En Name',
                width: '170px'
              },
              {
                field: 'UOMAnName',
                title: 'UOM Ar Name',
                width: '170px'
              },
              {
                field: 'UOMDescription',
                title: 'Description',
                width: '350px'
              },
              {
                field: 'UOMStatus',
                title: 'Status',
                editor: this.customBoolEditor,
                width: '150px'
              },
              {
                command: [
                    {
                        name: 'edit',
                        text: { edit: "Edit", cancel: "Cancel", update: "Update" },
                        iconClass: {
                            edit: "fas fa-edit",
                            update: "fas fa-check-circle",
                            cancel: "far fa-times-circle"
                        }                      
                    },
                    {
                        name: 'destroy',
                        text: 'Delete',
                        iconClass: 'fas fa-trash-alt'
                    }
                ],
                title: '&nbsp;',
                width: '200px'
              }
              ]
            })
        },
        editRow:function (e){
            e.sender.wrapper.find(".k-filter-row").hide();
            e.sender.expandRow(e.container);
            if(e.model.isNew()){
            e.sender.content.find(".k-detail-row .k-grid-add").trigger("click");
            e.container.find("input")[0].focus();
            }
        },
        showFilterRow:function(e){
             e.sender.wrapper.find(".k-filter-row").show();
        },
       
       
        dataBound: function (e) {
            console.log(e);
            if(!e.sender._data[0].isNew()){
                this.showFilterRow(e);
            }
            // ev.sender.expandRow(ev.sender.tbody.find('tr.k-master-row').first())
        },
    }
}