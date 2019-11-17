<template>
    <div class="template-grid">
        <kendo-datasource ref="datasource1"
                      :batch='true'
                      :page-size='20'
                      :transport-read-url="'../../../mock-data/users.json'">
        </kendo-datasource>

        <kendo-grid ref="grid"
                    :height="550"
                    :pageable='true'
                    :editable="'inline'"
                    :filterable="true"
                    :data-source-ref="'datasource1'"
                    :row-template="rowTemplate">
            <kendo-grid-column title="Details" :width="110"></kendo-grid-column>
            <kendo-grid-column title="Country" :width="110"></kendo-grid-column>
            <kendo-grid-column title="ID" :width="110"></kendo-grid-column>
        </kendo-grid>
    </div>
</template>

<script src="./template-grid.js"></script>

<style lang="scss" scoped>
@import '../../theme/users.scss';
</style>