import Vue from 'vue';

import { TabStrip, LayoutInstaller } from '@progress/kendo-layout-vue-wrapper'
Vue.use(LayoutInstaller)

import TemplateGrid from './template-grid/template-grid.vue'
import NestedGrid from './nested-grid/nested-grid.vue'

export default {
    name: "user-item",
    data() {
        return {
            tabs: [
                {
                    id: 1,
                    name: "Template Grid",
                    component: TemplateGrid
                },
                {
                    id: 2,
                    name: "Nested Grid",
                    component: NestedGrid
                } 
            ],
            selected: "Template Grid"
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
        NestedGrid
    }
}