import $ from 'jquery';
import kendo from '@progress/kendo-ui';

export default {
    name: "editable-grid",
    data() {
        return {
            customGridCommand: [
                { 
                    name: 'edit', 
                    text: { edit: "edit", cancel: "Cancel", update: "Update" },
                    iconClass: {
                        edit: "k-icon k-i-edit",
                        update: "k-icon k-i-check",
                        cancel: "k-icon k-i-close"
                    },
                    className: 'icon-only',
                    click: (e) => {
                        e.preventDefault()
                        this.clearFilter(e)
                    }
                    // template: '<a class="k-button k-button-icontext k-grid-add"><span class="k-icon k-i-plus"></span>New Row</a>'
                }, 
                {
                    name: 'destroy',
                    text: 'Delete',
                    title: 'Delete',
                    iconClass: 'k-icon k-i-close',
                    className: 'icon-only'
                }
            ],
            localDataSource: {
                // transport: {
                //     parameterMap: function(options, operation) {
                //         if (operation !== "read" && options.models) {
                //             return {models: kendo.stringify(options.models)};
                //         }
                //     }
                // },
                schema: {
                    model: {
                        id: "ProductID",
                        fields: {
                            ProductID: { editable: false, nullable: true },
                            ProductName: { validation: { required: true } },
                            UnitPrice: { type: 'number', validation: { required: true, min: 1 } },
                            Category: { defaultValue: { CategoryID: 1, CategoryName: "Beverages"} },
                            Discontinued: { type: 'boolean', defaultValue: false }
                        }
                    }
                },
                pageSize: 20,
                data: [{
                    "ProductID": 1,
                    "ProductName": "Chai",
                    "UnitPrice": 18,
                    "UnitsInStock": 39,
                    "Discontinued": false,
                    "Category": {
                        CategoryID: 1,
                        CategoryName: "Beverages"
                    }
                },
                {
                    "ProductID": 2,
                    "ProductName": "Chang",
                    "UnitPrice": 17,
                    "UnitsInStock": 40,
                    "Discontinued": false,
                    "Category": {
                        CategoryID: 1,
                        CategoryName: "Beverages"
                    }
                },
                {
                    "ProductID": 3,
                    "ProductName": "Aniseed Syrup",
                    "UnitPrice": 10,
                    "UnitsInStock": 13,
                    "Discontinued": false,
                    "Category": {
                        CategoryID: 1,
                        CategoryName: "Beverages"
                    }
                },
                {
                    "ProductID": 4,
                    "ProductName": "Chef Anton",
                    "UnitPrice": 22,
                    "UnitsInStock": 53,
                    "Discontinued": false,
                    "Category": {
                        CategoryID: 2,
                        CategoryName: "Condiments"
                    }
                },
                {
                    "ProductID": 5,
                    "ProductName": "Chef Gumbo Mix",
                    "UnitPrice": 21.35,
                    "UnitsInStock": 0,
                    "Discontinued": true,
                    "Category": {
                        CategoryID: 2,
                        CategoryName: "Condiments"
                    }
                },
                {
                    "ProductID": 6,
                    "ProductName": "Boysenberry Spread",
                    "UnitPrice": 25,
                    "UnitsInStock": 120,
                    "Discontinued": false,
                    "Category": {
                        CategoryID: 3,
                        CategoryName: "Desserts, candies, and sweet breads"
                    }
                }]
            }
        }
    },
    methods: { 
        categoryDropDownEditor: function(container, options) { 
            $('<select name="' + options.field + '" />')
                .appendTo(container)
                .kendoDropDownTree({
                    autoBind: false,
                    dataTextField: "CategoryName",
                    dataValueField: "CategoryID",
                    valuePrimitive: true,
                    checkboxes: true,
                    checkAll: true,
                    autoClose: false,
                    filter: 'startswith',
                    dataSource: {
                        type: "odata",
                        transport: {
                            read: "https://demos.telerik.com/kendo-ui/service/Northwind.svc/Categories"
                        }
                    },
                    // value: options.model.Category.CategoryID,
                    change: function() {
                        // let names = e.sender._tags.map(item => item.CategoryName).join(', ')
                        // options.model.Category.CategoryName = names
                    }
                });
        },
        clearFilter: function () { 
            // e.data.commandName
    
            // var gridWidget = this.$refs.gridReg.kendoWidget();
            // var tr = $(e.target).closest('tr');
            // var data = gridWidget.dataItem(tr);
            // console.log(data);
        },
        customBoolEditor(container) {
            var guid = kendo.guid();
            $('<input class="k-checkbox" id="' + guid + '" type="checkbox" name="Discontinued" data-type="boolean" data-bind="checked:Discontinued">').appendTo(container);
            $('<label class="k-checkbox-label" for="' + guid + '">&#8203;</label>').appendTo(container);
        },
        editAction: function(e) {
            e.preventDefault()
            // In case create/edit 
            // let selectedProductId = e.model.ProductID           
        },
        removeAction: function(e) { 
            e.preventDefault()
            // e.model
            // e.row
            // e.sender
        },
        saveAction: function(e) {
            e.preventDefault()
            // e.model
            // e.container
            // e.sender
            // e.values
        },
        getTooltipTilte: function(e) {
            return e.target.text() 
        }
    }
}