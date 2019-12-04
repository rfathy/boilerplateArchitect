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
                :filterable="filterableObject"
                :pageable-always-visible="true"
                :pageable-page-sizes="[5, 10, 20, 30]"
                @edit="onEditGrid"
                @save="onSave"
                @remove="onRemoveRow"
                @cancel="onCancel"
                @beforeedit="onBeforeedit">
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
                                :editor="AddPlaceholder"
                                :width="130"></kendo-grid-column>
                <kendo-grid-column :field="'ArName'"
                                :title="$t('Users.CategryArName')"
                                :filterable-cell-show-operators="false"
                                :filterable-cell-operator="'contains'"
                                :editor="AddPlaceholder"
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
                                :editor="AddPlaceholder"
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
                                :template="'# if(TaxableBonus) {# <span class=\'statusHolder isactive\'>' + $t('Common.Yes') + '</span>#} else{# <span class=\'statusHolder isinactive\'>' + $t('Common.No') + '</span> #} #'"
                                :width="90"></kendo-grid-column>
                <kendo-grid-column :field="'Status'"
                                :title="$t('Users.Status')"
                                :filterable-cell-template="statusFilter"
                                :filterable-cell-show-operators="false"
                                :editor="customBoolEditor"
                                :template="'# if(Status) {# <span class=\'statusHolder isactive\'>' + $t('Common.Active') + '</span>#} else{# <span class=\'statusHolder isinactive\'>' + $t('Common.InActive') + '</span> #} #'"
                                :width="90"></kendo-grid-column>
                <kendo-grid-column :command="customGridCommand"
                                :title="$t('Users.Action')"
                                :width="100"></kendo-grid-column>
            </kendo-grid>
        </kendo-tooltip>

        <kendo-notification ref="popupNotificationSave"></kendo-notification>
    </div>
</template>

<script src="./product-category.js"></script>

<style lang="scss" scoped></style>