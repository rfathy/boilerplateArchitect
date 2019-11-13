import $ from 'jquery';

export default {
    name: "nested-grid",
    data() {
        return {
            
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
                }
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
            $('<input required name="' + options.field + '"/>')
                .appendTo(container)
                .kendoDropDownTree({
                    autoBind: false,
                    dataTextField: "CategoryName",
                    dataValueField: "CategoryID",
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
        colBtnTemp: function() {
            return `<button class="btn btn-primary" @click="${this.openPopup()}"> Sara>> </button>`
        },
        openPopup: function() {
            alert('hi')
        }
    }
}