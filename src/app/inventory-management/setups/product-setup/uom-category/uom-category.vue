<template>
    <div class="uom-category">
        <kendo-grid :data-source="productsDataSource"
                :sortable="true"
                :no-records="true"
                :navigatable='true'
                :editable="'inline'"
                :toolbar="[{name: 'create', text: this.$i18n.t('Inventory.NewCategory')}]"
                :filterable-extra="false"
                :filterable-mode="'row'"
                :pageable-always-visible="true"
                @edit="editRow"
                @update="showFilterRow"
                @cancel="showFilterRow"
                @detailinit="detailInit" 
                @detailexpand="addRowBorder"
                @detailcollapse="removeRowBorder"
                :filterable-cell-operator="'contains'"
                :pageable-page-sizes="[5, 10, 20, 30]">
            <kendo-grid-column :field="'Code'"
                            :title= "this.$i18n.t('Inventory.CategoryCode')"
                            :editable="preventEditColumn"
                            :filterable-cell-show-operators="false"
                            :filterable-cell-operator="'contains'"
                            :width="100"></kendo-grid-column>
            <kendo-grid-column :field="'EnName'"
                            :title= "this.$i18n.t('Inventory.CategoryEnName')"
                            :filterable-cell-show-operators="false"
                            :filterable-cell-operator="'contains'"
                            :width="120"></kendo-grid-column>
            <kendo-grid-column :field="'ArName'"
                            :title= "this.$i18n.t('Inventory.CategryArName')"
                            :filterable-cell-show-operators="false"
                            :filterable-cell-operator="'contains'"
                            :width="120"></kendo-grid-column>
           
            <kendo-grid-column :field="'Description'"
                            :title= "this.$i18n.t('Inventory.Description')"
                            :filterable-cell-show-operators="false"
                            :filterable-cell-operator="'contains'"
                            :width="120"
                            ></kendo-grid-column> 
            
            <kendo-grid-column :field="'Status'"
                            :title= "this.$i18n.t('Inventory.Status')"
                            :filterable-cell-template="statusFilter"
                            :filterable-cell-show-operators="false"
                            :editor="customBoolEditor"
                            :template="'# if(Status) {# <span class=\'statusHolder isactive\'>' + $t('Common.Active') + '</span>#} else{# <span class=\'statusHolder isinactive\'>' + $t('Common.InActive') + '</span> #} #'"
                            :width="100"></kendo-grid-column>
            <kendo-grid-column :command="customGridCommand"
                            :title= "this.$i18n.t('Inventory.Action')"
                            :width="100"></kendo-grid-column>
        </kendo-grid>
    </div>
</template>

<script src="./uom-category.js"></script>

<style lang="scss" scoped>
@import '../../../theme/inventory-management.scss';
</style>