import json from '../../../../public/mock-data/product-category-list.json'
import $ from 'jquery';
// import i18n from '@/i18n'

localStorage.getItem('selectedLang') == 'en' ? import('../theme/users.scss') : import('../theme/users-rtl.scss');

//Module localization 
import localeEn from '../locales/en'
import localeAr from '../locales/ar'

export default {
    name: 'product-category',
    data() {
        return {
            checked: true,    
            customGridCommand: [
                {
                    name: 'edit',
                    text: { edit: this.$i18n.t('Common.Edit'), cancel: this.$i18n.t('Common.Cancel'), update: this.$i18n.t('Common.Update') },
                    iconClass: {
                        edit: "fas fa-edit",
                        update: "fas fa-check-circle",
                        cancel: "far fa-times-circle"
                    }
                },
                {
                    name: 'destroy',
                    text:this.$i18n.t('Common.Delete'),
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
                        EnName: { validation: { required: {message: "Must not be empty!"} } },
                        AnName: {  validation: { required: true } },
                        ProductClassification: {  },
                        Description: {  },
                        ParentCategory: { validation: { required: true } },
                        TaxableBonus: { type: 'boolean' },
                        Status: { type: 'boolean' } 
                        }
                    }
                },
                pageSize: 10
            }
        }
    },
    methods: {
        customBoolEditor(container, options) {
            $('<input type="checkbox" name="' + options.field + '"/>')
                  .appendTo(container)
                  .kendoMobileSwitch({
                  onLabel: this.$i18n.t('Common.Yes'),
                  offLabel: this.$i18n.t('Common.No')
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
                optionLabel: this.$i18n.t('Common.All'),
                autoWidth: true
            });
        },
        // DropdownList Filter in Grid
        taxableBonusFilter(args) { 
            args.element.kendoDropDownList({
                dataSource: {
                    data: [
                    { text: this.$i18n.t('Common.Yes'), value: true },
                    { text: this.$i18n.t('Common.No'), value: false }
                    ]
                },
                dataTextField: "text",
                dataValueField: "value",
                valuePrimitive: true,
                optionLabel: this.$i18n.t('Common.All'),
                autoWidth: true
            });
        },
        
    
        getTooltipTilte: function(e) {
            return e.target.text() 
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