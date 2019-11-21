<template>
    <div class="template-grid">
        <kendo-datasource ref="datasource4"
                      :batch='true'
                      :page-size='20'
                      :transport-read-url="'../../../mock-data/users.json'">
        </kendo-datasource>

        <kendo-grid ref="grid"
                    :height="550"
                    :pageable='true'
                    :editable="'inline'"
                    :filterable="true"
                    :data-source-ref="'datasource4'"
                    :toolbar="['create']"
                    > <!--:row-template="rowTemplate" -->
            <kendo-grid-column title="Details" :field="'name'" :width="110"></kendo-grid-column>
            <kendo-grid-column title="Country" :field="'company'" :width="110"></kendo-grid-column>
            <kendo-grid-column title="ID" :field="'age'" :width="110"></kendo-grid-column>
            <kendo-grid-column :command="['edit', 'destroy']"
                           :title="'&nbsp;'"
                           :width="120"></kendo-grid-column>
        </kendo-grid>
    </div>
</template>

<script src="./template-grid.js"></script>

<style lang="scss" scoped>
@import '../../theme/users.scss';
</style>