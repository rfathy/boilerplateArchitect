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
            inputHasValue: false,
            customGridCommand: [
                {
                    name: 'edit',
                    text: { edit: this.$i18n.t('Common.Edit'), cancel: this.$i18n.t('Common.Cancel'), update: this.$i18n.t('Common.Update') },
                    iconClass: {
                        edit: "fas fa-edit",
                        update: "fas fa-check-circle",
                        cancel: "far fa-times-circle"
                    },
                    click: function (e) {
                        console.log(e);
                        debugger
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
                        Code: {  editable: false, validation: { min: 1 } },
                        EnName: { 
                            validation: { 
                                required: {message: this.$i18n.t('Common.Required')},
                                uniqueness: (input) => { 
                                    if ((input.is("[name='EnName'") || input.is("[name='ArName'")) && input.val() != "") {
                                        // set the custom message
                                        input.attr("data-uniqueness-msg", this.$i18n.t('Common.Duplicated'));
                                        // return false // Must Uncomment
                                    }
                                    return true;
                                }
                            } 
                        },
                        ArName: { validation: { required: {message: this.$i18n.t('Common.Required')} } },
                        ProductClassification: {
                            validation: {
                                checkValue: (input) => { debugger
                                    if (input.is("[name='ProductClassification'")) {
                                        input.val() != "" ? this.inputHasValue = true : this.inputHasValue = false;
                                    }
                                    return true;
                                }
                            }
                         },
                        Description: {  },
                        ParentCategory: { },
                        TaxableBonus: { type: 'boolean', defaultValue: true },
                        Status: { type: 'boolean', defaultValue: true } 
                        }
                    }
                },
                pageSize: 10
            }
        }
    },
    methods: {
        // Taxable Bonus and Status Switch
        customBoolEditor(container, options) {
            $('<input type="checkbox" name="' + options.field + '" />')
                  .appendTo(container)
                  .kendoMobileSwitch({
                    onLabel: this.$i18n.t('Common.Yes'),
                    offLabel: this.$i18n.t('Common.No'),
                    checked: true
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
        // Product Classification ddl Singlr Select
        customSSDdlEditor(container, options) {
            $(`<input required name="${options.field}" data-required-msg="${this.$i18n.t("Common.Required")}"/>`)
                .appendTo(container)
                .kendoDropDownList({
                    autoBind: false,
                    dataTextField: "text",
                    dataValueField: "text",
                    valuePrimitive: true,
                    filter: 'contains',
                    dataSource: [
                        { text: 'Small', value: '1' },
                        { text: 'Medium', value: '2' },
                        { text: 'Large', value: '3' },
                        { text: 'X-Large', value: '4' },
                        { text: '2X-Large', value: '5' }
                    ]
                    // value: options.model.Category.CategoryID,
                    // change: function(e) {
                    //     let names = e.sender._tags.map(item => item.text).join(', ')
                    //     options.model.text = names
                    // }
                });
        },
        // Parent Category ddl tree Single Select
        categoryDropDownEditor: function(container, options) { 
            $('<input name="' + options.field + '" />')
                .appendTo(container)
                .kendoDropDownTree({
                    autoBind: false,
                    dataTextField: "text",
                    dataValueField: "text",
                    valuePrimitive: true,
                    filter: 'startswith',
                    autoWidth: true,
                    // enable: this.inputHasValue,
                    dataSource: [
                        {
                            text: 'option 1', enabled: false,
                            items: [{text: 'suboption 1', value: 1 }]
                        },
                        {
                            text: 'option 2', 
                            items: [{text: 'suboption 2', value: 1 }]
                        }
                    ],
                    select(e) { debugger
                        console.log(e.node);
                        
                    },
                    open(ev) { debugger
                        ev.sender.dataSource.transport.data.map(item => item.items.filter(subItem => {
                            console.log(subItem.text === 'suboption 2');
                            
                            (subItem.text === 'suboption 2') ? subItem.enabled = false : false;
                        }));
                        // ev.sender.dataSource.options.data.map(item => item.items.filter(subItem => {
                        //     console.log(subItem.text === 'suboption 2');
                            
                        //     (subItem.text === 'suboption 2') ? subItem.enabled = false : false;
                        // }));
                        // ev.sender.options.dataSource.map(item => item.items.filter(subItem => {
                        //     console.log(subItem.text === 'suboption 2');
                            
                        //     (subItem.text === 'suboption 2') ? subItem.enabled = false : false;
                        // }));
                        
                        $(".k-treeview .k-icon").click(function(e) {
                            if(e.currentTarget.nextSibling.classList.contains('k-state-disabled')) { debugger
                              
                              if(e.currentTarget.classList.contains('k-i-expand')) {
                                e.currentTarget.parentElement.parentElement.setAttribute('aria-expanded', 'true')
                                e.currentTarget.parentElement.parentElement.setAttribute('data-expanded', 'true')
                                e.currentTarget.parentElement.nextSibling.style.display = 'block'
                                e.currentTarget.classList.add('k-i-collapse')
                                e.currentTarget.classList.remove('k-i-expand')
                                }
                              else {
                                e.currentTarget.parentElement.parentElement.setAttribute('aria-expanded', 'false')
                                e.currentTarget.parentElement.parentElement.setAttribute('data-expanded', 'false')
                                e.currentTarget.parentElement.nextSibling.style.display = 'none'
                                e.currentTarget.classList.add('k-i-expand')
                                e.currentTarget.classList.remove('k-i-collapse')
                              }
                            }
                        });
                    }
                    // value: options.model.Category.CategoryID,
                    // change: function(e) {
                    //     let names = e.sender._tags.map(item => item.text).join(', ')
                    //     options.model.text = names
                    // }
                });
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
        },
        onEditGrid: function() {
            debugger  
            // Array.from(e.container[0].childNodes, cell => {
            //     if (cell.lastChild.lastChild && cell.lastChild.lastChild.name === 'ProductClassification') {
            //         cell.lastChild.lastChild.value ? this.inputHasValue = true : this.inputHasValue = false;
            //     } else if (cell.lastChild.lastChild && cell.lastChild.lastChild.name === 'ParentCategory') {
            //         this.inputHasValue ? cell.lastChild.lastChild.disabled = false : cell.lastChild.lastChild.disabled = true;
            //     }
            // });

            // var numeric = e.container.find("input[name=id]").data("kendoNumericTextBox");
            // numeric.enable(false);
            
        },
        onSave: function (e) { debugger
            // Save New Record
            if (e.model.isNew()) {
                this.showSavePopupNotification()
                e.model.isNew(false)
            } 
            else { // Save Exsit Record
                this.showUpdatePopupNotification()
            }
            
            
        },
        onRemoveRow: function () {
            debugger
            alert("remove EVENT")
        },
        onBeforeedit: function () {
            debugger
        },
        showSavePopupNotification: function (e) {
            this.popupNotificationWidget.show(this.$i18n.t('Common.SavedSuccessfully'));
        },
        showUpdatePopupNotification: function (e) {
            this.popupNotificationWidget.show(this.$i18n.t('Common.UpdatedSuccessfully'));
        }
    },
    mounted: function () {
        this.popupNotificationWidget = this.$refs.popupNotificationSave.kendoWidget();
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