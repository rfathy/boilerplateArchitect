import Vue from 'vue';
import '@progress/kendo-ui/js/kendo.grid';
import { Grid, GridInstaller } from '@progress/kendo-grid-vue-wrapper';
import { DataSource, DataSourceInstaller } from '@progress/kendo-datasource-vue-wrapper'


Vue.use(GridInstaller);
Vue.use(DataSourceInstaller);
Vue.use(DataSource)

export default {
    name: "grids",
    data () {
        return {
            schemaModelFields: {
                ProductID: { editable: false, nullable: true },
                ProductName: { validation: { required: true } },
                UnitPrice: { type: 'number', validation: { required: true, min: 1 } },
                Discontinued: { type: 'boolean' },
                UnitsInStock: { type: 'number', validation: { min: 0, required: true } }
            }
        }
    },
    methods: {
        parameterMap: function(options, operation) {
            if (operation !== 'read' && options.models) {
                // return { models: kendo.stringify(options.models) }
            }
        }
    },
    components: {
      Grid,
      DataSource
    },
    created() {
    //   this.$store.dispatch(actionsTypes.FETCH_USER_DATA);
    },
    mounted() {
    }
  };