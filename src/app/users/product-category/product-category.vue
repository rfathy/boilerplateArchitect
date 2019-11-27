<template>
    <div class="product-category">
        <kendo-grid :data-source="productsDataSource"
                :sortable="true"
                :no-records="true"
                :navigatable='true'
                :editable="'inline'"
                :toolbar="[{name: 'create', text: 'New Category'}]"
                :filterable-extra="false"
                :filterable-mode="'row'"
                :pageable-always-visible="true"
                :pageable-page-sizes="[5, 10, 20, 30]">
            <kendo-grid-column :field="'Code'"
                            :title="'Category Code'"
                            :editable="preventEditColumn"
                            :filterable-cell-show-operators="false"
                            :filterable-cell-operator="'contains'"
                            :width="100"></kendo-grid-column>
            <kendo-grid-column :field="'EnName'"
                            :title="'Category En Name'"
                            :filterable-cell-show-operators="false"
                            :filterable-cell-operator="'contains'"
                            :width="120"></kendo-grid-column>
            <kendo-grid-column :field="'ArName'"
                            :title="'Category Ar Name'"
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
            <kendo-grid-column :field="'TaxableBonus'"
                            :title="'Taxable Bonus'"
                            :filterable-cell-template="taxableBonusFilter"
                            :filterable-cell-show-operators="false"
                            :editor="customBoolEditor"
                            :template="`#= TaxableBonus ? 'Yes' : 'No'#`"
                            :width="100"></kendo-grid-column>
            <kendo-grid-column :field="'Status'"
                            :title="'Status'"
                            :filterable-cell-template="statusFilter"
                            :filterable-cell-show-operators="false"
                            :editor="customBoolEditor"
                            :template="`#= Status ? 'Active' : 'Inactive'#`"
                            :width="100"></kendo-grid-column>
            <kendo-grid-column :command="customGridCommand"
                            :title="'Action'"
                            :width="100"></kendo-grid-column>
        </kendo-grid>
    </div>
</template>

<script src="./product-category.js"></script>

<style lang="scss" scoped></style>