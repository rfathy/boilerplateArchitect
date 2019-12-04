import json from '../../../../../../public/mock-data/uom-category.json'

import $ from 'jquery';

localStorage.getItem('selectedLang') == 'en' ? import('../../../theme/inventory-management.scss') : import('../../../theme/inventory-management-rtl.scss');

//Module localization 
 import localeEn from '../../../locales/en'
 import localeAr from '../../../locales/ar'

export default {
    name: 'UomCategory',
    data() {

        return {
            checked: true,    
            customGridCommand: [
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
            productsDataSource: {
                data: json,
                schema: {
                    model: {
                        id: "ProductID",
                        fields: {
                        ProductID: { editable: false, nullable: true },
                        Code: {  validation: { min: 1 } },
                        EnName: { validation: { required: {message: this.$i18n.t('Common.Required')} } },
                        ArName: {  validation: { required: true } },
                        ProductClassification: {  },
                        Description: {  },
                        Status: { type: 'boolean' }
                        //, 'UOM.UOMID': {},
                        //     'UOM.UOMCode': { type: 'number', validation: { min: 1 } },
                        //     'UOM.UOMEnName': { validation: { required: { message: this.$i18n.t('Common.Required') } } },
                        //     'UOM.UOMArName': {  validation: { required: { message: this.$i18n.t('Common.Required') } } },
                        //     'UOM.UOMDescription': { type: 'string' },
                        //     'UOM.UOMStatus': { type: 'boolean' }  
                         }
                    }
                },
                pageSize: 10
            }
        }
    },
    methods: {
        addRowBorder(e){  
          e.sender.collapseRow(e.sender.content.find("tr.row-border"));//collapse last opened row if exist
          e.masterRow.addClass('row-border');
          this.startDetailsGridFromLeft(e);
    },

    removeRowBorder(e){
          e.masterRow.removeClass('row-border');
    },
    startDetailsGridFromLeft:function  (e){
        let detailRow=e.detailRow.find(".k-hierarchy-cell");
        let visible=detailRow.is(':visible');
        detailRow.hide();
        if(visible){//if the row not expanded before
            let subgrid =e.detailRow.find(".k-detail-cell");
            subgrid.attr("colspan",+subgrid.attr("colspan")+1);
        }
},
        customBoolEditor(container, options) {
            $('<input type="checkbox" name="' + options.field + '"/>')
                  .appendTo(container)
                  .kendoMobileSwitch({
                  onLabel: "Active",//YES
                  offLabel: "Inactive"//NO
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
                    { text: this.$i18n.t('Common.Active'), value: true },
                    { text: this.$i18n.t('Common.InActive'), value: false }
                    ]
                },
                dataTextField: "text",
                dataValueField: "value",
                valuePrimitive: true,
                optionLabel: "All",
                autoWidth: true
            });
        },
        detailInit: function (e) {
            $('<div />').appendTo(e.detailCell).kendoGrid({
              dataSource: {
                data: json,
                schema: {
                    model: {
                        fields: {
                            // 'UOM[dataItem]UOMID': {},
                            'UOM.UOMID': {},
                            'UOM.UOMCode': {  validation: { min: 1 } },
                            'UOM.UOMEnName': { validation: { required: { message: this.$i18n.t('Common.Required') } } },
                            'UOM.UOMArName': {  validation: { required: { message: this.$i18n.t('Common.Required') } } },
                            'UOM.UOMDescription': { type: 'string' },
                            'UOM.UOMStatus': { type: 'boolean' } 
                        }
                    }
                },
                // pageSize: 10,
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
                    text: this.$i18n.t('Inventory.AddUOM')
                  }
              ],
              filterable:{
                  mode:'row',
                  extra:false, 
                  //cellOperator:'contains'
                },
              editable: 'inline',
              scrollable: true,
              sortable: true,
              noRecords: true,
              columns: [{
                field: 'UOM.UOMCode',
                title: this.$i18n.t('Inventory.UOMCode'),
                // editable: this.preventEditColumn,
                width: '7%',
                filterable: {
                    cell: {
                        showOperators: false,
                        operator: 'contains'
                    }
                }
            //   filterable:{
            // cell:false},

              },
              {
                field: 'UOM.UOMEnName',
                title: this.$i18n.t('Inventory.UOMEnName'),
                width: '18%',
                filterable: {
                    cell: {
                        showOperators: false,
                        operator: 'contains'
                    }
                }
              },
              {
                field: 'UOM.UOMArName',
                title: this.$i18n.t('Inventory.UOMArName'),
                width: '18%',
                filterable: {
                    cell: {
                        showOperators: false,
                        operator: 'contains'
                    }
                }
              },
              {
                field: 'UOM.UOMDescription',
                title: this.$i18n.t('Inventory.Description'),
                width: '18%',
                filterable: {
                    cell: {
                        showOperators: false,
                        operator: 'contains'
                    }
                }
              },
              {
                field: 'UOM.UOMReference',
                title: this.$i18n.t('Inventory.Reference'),
                width: '13%',
                filterable: {
                    cell: {
                        showOperators: false,
                        operator: 'contains'
                    }
                }
              },
              {
                field: 'UOM.UOMRatio',
                title: this.$i18n.t('Inventory.Ratio'),
                width: '13%',
                filterable: {
                    cell: {
                        showOperators: false,
                        operator: 'contains'
                    }
                }
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
                title: this.$i18n.t('Inventory.Action'),
                width:"7%"
              }
              ]
            })
        },editRow:function (e){
            e.sender.wrapper.find(".k-filter-row").hide();
            e.sender.expandRow(e.container);
            if(e.model.isNew()){
            e.sender.content.find(".k-detail-row .k-grid-add").trigger("click");
            e.container.find("input")[0].focus();
            }
        },
        showFilterRow:function(e){
             e.sender.wrapper.find(".k-filter-row").show();
        }
    },
    i18n: {
        messages: {
            en: {
                ...localeEn
            },
            ar: {
                ...localeAr
            }
        },
    }
}