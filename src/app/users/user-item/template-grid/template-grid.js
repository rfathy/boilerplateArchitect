import Vue from 'vue';
import { ErrorBoundary } from "../../../shared/components";
import kendo from '@progress/kendo-ui';

import { DropDownTree, HierarchicalDataSource, DropDownTreeInstaller } from '@progress/kendo-dropdowntree-vue-wrapper'
Vue.use(DropDownTreeInstaller)

export default {
    name: "template-grid",
    data() {
        return {
            SelectedTypes: new kendo.data.HierarchicalDataSource({
                data: [{
                    text: 'Furniture'
                },{
                    text: 'Decor'
                }]
            }),
            rowTemplate: '',
        }
    },
    methods: {
        // generateRowTemplate: function() {
        //     var template =
        //         '<tr data-uid="#: uid #">' +
        //             '<td class="details">' +
        //                 '<span class="name">#: name# #: age# </span>' +
        //                 '<span class="title">Title: #: age #</span>' +
        //             '</td>' +
        //             '<td class="country">#: company#</td>' +
        //             '<td class="employeeID">' +
        //                 '#: company #' +
        //             '</td>' +
        //         '</tr>'

        //     return kendo.template(template);
        // }
    },
    components: {
        ErrorBoundary,
        DropDownTree,
        HierarchicalDataSource
    },
    created() {
        // if (!this.rowTemplate) {
        //     this.rowTemplate = this.generateRowTemplate() 
        // }    
    }
}