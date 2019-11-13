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
                width: '110px'
              },
              {
                field: 'ShipAddress',
                title: 'Ship Address'
              },
              {
                field: 'ShipName',
                title: 'Ship Name',
                width: '300px'
              }
            ]
            })
          },
          dataBound: function (ev) {
            ev.sender.expandRow(ev.sender.tbody.find('tr.k-master-row').first())
          }
    }
}