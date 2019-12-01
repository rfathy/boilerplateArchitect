<template>
    <div class="product-category">
        <kendo-tooltip ref="kTooltip" id="agglomerations" 
                  :filter="'td a, tr:not(.k-grid-edit-row) td:not(.k-command-cell)'" 
                  :position="'top'"
                  :content="getTooltipTilte">
                  <kendo-grid :data-source="productsDataSource"
                :sortable="true"
                :no-records="true"
                :navigatable='true'
                :editable="'inline'"
                :toolbar="[{name: 'create', text: $t('Users.NewCategory')}]"
                :filterable-extra="false"
                :filterable-mode="'row'"
                :pageable-always-visible="true"
                :pageable-page-sizes="[5, 10, 20, 30]"
                @edit="onEditGrid">
                <kendo-grid-column :field="'Code'"
                                :title="$t('Users.CategoryCode')"
                                :editable="preventEditColumn"
                                :filterable-cell-show-operators="false"
                                :filterable-cell-operator="'contains'"
                                :width="100"
                                 ></kendo-grid-column>
                <kendo-grid-column :field="'EnName'"
                                :title="$t('Users.CategoryEnName')"
                                :filterable-cell-show-operators="false"
                                :filterable-cell-operator="'contains'"
                                :width="130"></kendo-grid-column>
                <kendo-grid-column :field="'ArName'"
                                :title="$t('Users.CategryArName')"
                                :filterable-cell-show-operators="false"
                                :filterable-cell-operator="'contains'"
                                :width="130"></kendo-grid-column>
                <kendo-grid-column :field="'ProductClassification'"
                                :title="$t('Users.ProductClassification')"
                                :filterable-cell-show-operators="false"
                                :filterable-cell-operator="'contains'"
                                :editor="customSSDdlEditor"
                                :filterable-multi="true"
                                :width="130"></kendo-grid-column> 
                <kendo-grid-column :field="'Description'"
                                :title="$t('Users.Description')"
                                :filterable-cell-show-operators="false"                        
                                :filterable-cell-operator="'contains'"
                                :width="130"
                                ></kendo-grid-column> 
                <kendo-grid-column :field="'ParentCategory'"
                                :title="$t('Users.ParentCategory')"
                                :filterable-cell-show-operators="false"
                                :filterable-cell-operator="'contains'" 
                                :editor="categoryDropDownEditor"                             
                                :width="130"></kendo-grid-column>
                <kendo-grid-column :field="'TaxableBonus'"
                                :title="$t('Users.TaxableBonus')"
                                :filterable-cell-template="taxableBonusFilter"
                                :filterable-cell-show-operators="false"
                                :editor="customBoolEditor"
                                :template="`#= TaxableBonus ? 'Yes' : 'No'#`"
                                :width="90"></kendo-grid-column>
                <kendo-grid-column :field="'Status'"
                                :title="$t('Users.Status')"
                                :filterable-cell-template="statusFilter"
                                :filterable-cell-show-operators="false"
                                :editor="customBoolEditor"
                                :template="`#= Status ? 'Active' : 'Inactive'#`"
                                :width="90"></kendo-grid-column>
                <kendo-grid-column :command="customGridCommand"
                                :title="$t('Users.Action')"
                                :width="100"></kendo-grid-column>
            </kendo-grid>
        </kendo-tooltip>
    </div>
</template>

<script src="./product-category.js"></script>

<style lang="scss" scoped></style>