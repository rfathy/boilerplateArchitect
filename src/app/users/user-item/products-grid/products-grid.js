import json from '../../../../../public/mock-data/product.json'
import $ from 'jquery';

export default {
    name: "products-grid",
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
                        // Status: { type: 'boolean', defaultValue: false } 
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
        }
    },
    components: {
        
    }
}