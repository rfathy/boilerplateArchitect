import json from '../../../../public/mock-data/uom-category.json'

import $ from 'jquery';

localStorage.getItem('selectedLang') == 'en' ? import('../theme/users.scss') : import('../theme/users-rtl.scss');

//Module localization 
 import localeEn from '../locales/en'
 import localeAr from '../locales/ar'

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
        customTemp : function(e){
            debugger
            console.log(e);
        //    if(){
        //        return 
        //    }
          },
        customBoolEditor(container, options) {
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
                    text: this.$i18n.t('Users.AddUOM')
                  }
              ],
              //height:170,
              filterable:{mode:'row',extra:false, 'cell-operator':'contains'},
              editable: 'inline',
              scrollable: true,
              sortable: true,
            //   pageable: true,
              noRecords: true,
              columns: [{
                field: 'UOM.UOMCode',
                title: this.$i18n.t('Users.UOMCode'),
                // editable: this.preventEditColumn,
                width: '110px',
            //   filterable:{
            // cell:false},

              },
              {
                field: 'UOM.UOMEnName',
                title: this.$i18n.t('Users.UOMEnName'),
                width: '170px'
              },
              {
                field: 'UOM.UOMArName',
                title: this.$i18n.t('Users.UOMArName'),
                width: '170px'
              },
              {
                field: 'UOM.UOMDescription',
                title: this.$i18n.t('Users.Description'),
                width: '230px'
              },
              {
                field: 'UOM.UOMReference',
                title: this.$i18n.t('Users.Reference'),
                width: '150px'
              },
              {
                field: 'UOM.UOMRatio',
                title: this.$i18n.t('Users.Ratio'),
                width: '100px'
              },
              {
                field: 'UOM.UOMStatus',
                title: this.$i18n.t('Users.Status'),
                editor: this.customBoolEditor,
                width: '100px',
                template: " #=UOM.UOMStatus ? 'Active' : 'Inactive'#"
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
                title: this.$i18n.t('Users.Action'),
                width: '160px'
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