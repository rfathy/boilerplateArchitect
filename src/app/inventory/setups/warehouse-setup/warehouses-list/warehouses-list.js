import json from '../../../../../../public/mock-data/warehouses-list.json'
import $ from 'jquery';

import { EventBus } from '@/app/shared/services/event-bus.js';
import ConfirmPopup from '../../../../shared/components/confirm-popup/confirm-popup.vue';

localStorage.getItem('selectedLang') == 'en' ? import('../../../theme/inventory.scss') : import('../../../theme/inventory-rtl.scss');

//Module localization 
import localeEn from '../../../locales/en'
import localeAr from '../../../locales/ar'
export default {
    name: "warehouses-list",
    data () {
        return {
            warehousesDataSource: {
                data: json,
                schema: {
                    model: {
                        id: "ProductID",
                        fields: {
                        WarehouseID: { editable: false, nullable: true },
                        Code: {  validation: { min: 1 } },
                        EnName: { validation: { required: {message: "Must not be empty!"} } },
                        AnName: {  validation: { required: true } },
                        Description: {  },
                        ParentCategory: { validation: { required: true } },
                        Status: { type: 'boolean' } 
                        }
                    }
                },
                pageSize: 10
            },
            commandDefinitions: [
                {
                    name: 'edit',
                    text: { 
                        edit: this.$i18n.t('Common.Edit'), 
                        cancel: this.$i18n.t('Common.Cancel'), 
                        update: this.$i18n.t('Common.Update') },
                    iconClass: {
                        edit: "fas fa-edit",
                        update: "fas fa-check-circle",
                        cancel: "far fa-times-circle"
                    }
                },
                { 
                    name: "decreaseIndent",
                    click: this.showDD, 
                    template: " <a class='k-grid-decreaseIndent k-button'><span class='k-icon k-i-arrow-w'></span></a>" 
                },
                   
            ],
            dataText: 's',
            confirmBtnText: 'w',
            cancelBtnText: 'ew',
            headertitle: 'fd',
            triggerTag:'fsd'
        }
    },
    methods: {
        showDD(e){
            this._bv__modal.show('modal-scoped')
            // this.headertitle = "DDDDD"
        },

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
        getTooltipTilte: function(e) {
            return e.target.text() 
        },
    },
    mounted() {
        EventBus.$on('confirmed-action', (e) => {
          console.log(e);
        });
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
    },
    components: {
        ConfirmPopup
    }
  };