import json from '../../../../../../public/mock-data/uom-category.json'

import $ from 'jquery';

localStorage.getItem('selectedLang') == 'en' ? import('../../../theme/inventory.scss') : import('../../../theme/inventory-rtl.scss');

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
                        }
                    }
                },
                pageSize: 10
            }
        }
    },
    methods: {
        addRowBorder(e){  
          console.log(e.masterRow[0]);
          let expandedRow = e.masterRow[0] ;
          $(expandedRow).addClass('row-border');
          //$('tr.k-master-row').addClass('row-border')
    },

    removeRowBorder(e){
          let collapsedRow = e.masterRow[0] ;
          $(collapsedRow).removeClass('row-border');
         //$('tr.k-master-row').removeClass('row-border')
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
                            UOMCode: { type: 'number', validation: { min: 1 } },
                            UOMEnName: { validation: { required: { message: this.$i18n.t('Common.Required') } } },
                            UOMArName: {  validation: { required: { message: this.$i18n.t('Common.Required') } } },
                            UOMDescription: { type: 'string' },
                            UOMStatus: { type: 'boolean' } 
                        }
                    }
                },
                // pageSize: 10,
                filter: {
                  field: 'ProductID',
                  operator: 'contains',
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
                width: '120px',
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
                width: '180px',
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
                width: '180px',
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
                width: '220px',
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
                width: '170px',
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
                width: '140px',
                filterable: {
                    cell: {
                        showOperators: false,
                        operator: 'contains'
                    }
                }
              },
            //   {
            //     field: 'UOM.UOMStatus',
            //     title: this.$i18n.t('Inventory.Status'),
            //     editor: this.customBoolEditor,
            //     width: '130px',
            //     template: "#= UOM.UOMStatus ? '<div class= bg-active-status> Active </div>' : '<div class= bg-inactive-status> Inactive </div> '#",
            //     filterable: {
            //         cell: {
            //             showOperators: false,
            //             operator: 'contains'
            //         }
            //     }
            //   },
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
                width: '200x'
              }
              ]
            })
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