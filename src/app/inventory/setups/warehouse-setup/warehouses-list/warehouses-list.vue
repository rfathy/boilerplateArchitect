<template>
    <div class="grids">
        <kendo-datasource ref="localDataSource"
                        :transport-read-url="'../../../mock-data/warehouse.json'"
                        :batch='true'
                        :page-size='5'>
        </kendo-datasource>
        <kendo-grid :data-source-ref="'localDataSource'"
                    :pageable='true'
                    :editable="'inline'"
                    :toolbar="['create']">
        <kendo-grid-column :field="'Code'"
                            :title="'Code'"
                           :width="30"></kendo-grid-column>
        <kendo-grid-column :field="'EnName'"
                           :title="'English Name'"
                           :width="120"></kendo-grid-column>
        <kendo-grid-column :field="'ArName'"
                           :title="'Arabic Name'"
                           :width="120"></kendo-grid-column>
        <kendo-grid-column :field="'Description'"
                            :title="'Description'"
                           :width="120"></kendo-grid-column>
        <kendo-grid-column :field="'ParentCategory'"
                            :title="'Parent Category'"
                           :width="120"></kendo-grid-column>
        <kendo-grid-column :field="'Status'"
                            :title="'Status'"
                           :width="50"></kendo-grid-column>
        <kendo-grid-column :command="['edit', 'destroy']"
                           :title="'&nbsp;'"
                           :width="70"></kendo-grid-column>
    </kendo-grid>
    </div>
</template>

<script src="./warehouses-list.js"></script>
<style lang="scss" scoped>

</style>