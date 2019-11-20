import Vue from 'vue';
// import $ from 'jquery';

import { TabStrip, LayoutInstaller } from '@progress/kendo-layout-vue-wrapper'
Vue.use(LayoutInstaller)

import TemplateGrid from './template-grid/template-grid.vue'
import NestedGrid from './nested-grid/nested-grid.vue'
import EditableGrid from './editable-grid/editable-grid.vue'

import FormValid from '../user-list/form-valid.vue'

export default {
    name: "user-item",
    data() {
        return {
            tabs: [
                {
                    id: 1,
                    name: "Template Grid",
                    component: TemplateGrid,
                    class: "k-state-active"
                },
                {
                    id: 2,
                    name: "Nested Grid",
                    component: NestedGrid,
                    class: ""
                },
                {
                    id: 3,
                    name: "Editable Grid",
                    component: EditableGrid,
                    class: ""
                }
            ],
            selected: TemplateGrid
        }
    },
    methods: {
        onSelect: function() {
            // console.log("Selected: " + $(e.item).find("> .k-link").text());
        }     
    },
    components: {
        TabStrip,
        TemplateGrid,
        NestedGrid,
        EditableGrid,
        FormValid
    }
}