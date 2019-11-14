import $ from 'jquery';

export default {
    name: "editable-grid",
    data() {
        return {
            localDataSource: {
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
            $('<select required name="' + options.field + '"/>')
                .appendTo(container)
                .kendoDropDownTree({
                    autoBind: false,
                    dataTextField: "CategoryName",
                    dataValueField: "CategoryID",
                    valuePrimitive: true,
                    checkboxes: true,
                    checkAll: true,
                    autoClose: false,
                    dataSource: {
                        type: "odata",
                        transport: {
                            read: "https://demos.telerik.com/kendo-ui/service/Northwind.svc/Categories"
                        }
                    },
                    value: options.field
                });
        }
    }
}