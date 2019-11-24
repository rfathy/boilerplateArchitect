import json from '../../../../../public/mock-data/product.json'
import $ from 'jquery';

export default {
    name: "products-nested-grid",
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
                        EnName: { validation: { required: {message: "Required!"} } },
                        AnName: {  validation: { required: true } },
                        ProductClassification: {  },
                        Description: {  },
                        ParentCategory: { validation: { required: true } },
                        Status: { type: 'boolean' } 
                        }
                    }
                },
                pageSize: 5
            }
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
                data: json,
                schema: {
                    model: {
                        id: "UOM.UOMID",
                        fields: {
                            UOMID: { editable: false, nullable: true },
                            UOMCode: { type: 'number', validation: { min: 1 } },
                            UOMEnName: { validation: { required: {message: "Required!"} } },
                            UOMAnName: {  validation: { required: true } },
                            UOMDescription: {  },
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
              toolbar: ['create'],
              editable: 'inline',
              scrollable: false,
              sortable: true,
              pageable: true,
              noRecords: true,
              columns: [{
                field: 'UOM.UOMCode',
                title: 'UOM Code',
                // editable: this.preventEditColumn,
                width: '110px'
              },
              {
                field: 'UOM.UOMEnName',
                title: 'UOM En Name',
                width: '170px'
              },
              {
                field: 'UOM.UOMAnName',
                title: 'UOM Ar Name',
                width: '170px'
              },
              {
                field: 'UOM.UOMDescription',
                title: 'Description',
                width: '350px'
              },
              {
                field: 'UOM.UOMStatus',
                title: 'Status',
                editor: this.customBoolEditor,
                width: '150px'
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
    }
}