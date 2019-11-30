<template>
    <div class="products-nested-grid">
        <kendo-grid :data-source="productsDataSource"
                :pageable='true'
                :sortable="true"
                :no-records="true"
                :navigatable='true'
                :editable="'inline'"
                :toolbar="['create']"
                :filterable-extra="false"
                :filterable-mode="'row'"
                @edit="editRow"
                @update="showFilterRow"
                @cancel="showFilterRow"
                @filter="onFilter"
                @detailinit="detailInit" 
                @databound="dataBound">
            <kendo-grid-column :field="'Code'"
                            :title="'Code'"
                            :editable="preventEditColumn"
                            :filterable-cell-show-operators="false"
                            :filterable-cell-operator="'contains'"
                            :width="100"></kendo-grid-column>
            <kendo-grid-column :field="'EnName'"
                            :title="'En Name'"
                            :filterable-cell-show-operators="false"
                            :filterable-cell-operator="'contains'"
                            :width="120"></kendo-grid-column>
            <kendo-grid-column :field="'AnName'"
                            :title="'Ar Name'"
                            :filterable-cell-show-operators="false"
                            :filterable-cell-operator="'contains'"
                            :width="120"></kendo-grid-column>
            <kendo-grid-column :field="'ProductClassification'"
                            :title="'Product Classification'"
                            :filterable-cell-show-operators="false"
                            :filterable-cell-operator="'contains'"
                            :filterable-multi="true"
                            :width="120"></kendo-grid-column> 
            <kendo-grid-column :field="'Description'"
                            :title="'Description'"
                            :filterable-cell-show-operators="false"
                            :filterable-cell-operator="'contains'"
                            :width="120"
                            ></kendo-grid-column> 
            <kendo-grid-column :field="'ParentCategory'"
                            :title="'Parent Category'"
                            :filterable-cell-show-operators="false"
                            :filterable-cell-operator="'contains'"
                            :width="120"></kendo-grid-column>
            <kendo-grid-column :field="'Status'"
                            :title="'Status'"
                            :filterable-cell-template="statusFilter"
                            :filterable-cell-show-operators="false"
                            :editor="customBoolEditor"
                            :width="100"></kendo-grid-column>
                            <!-- :filterable-ui="statusFilter" -->
                       <kendo-grid-column :command="['edit', 'destroy']"
                            :title="'&nbsp;'"
                            :width="100"></kendo-grid-column>
        </kendo-grid>
    </div>
</template>

<script src="./products-nested-grid.js"></script>

<style lang="scss" scoped>
@import '../../theme/users.scss';
</style>