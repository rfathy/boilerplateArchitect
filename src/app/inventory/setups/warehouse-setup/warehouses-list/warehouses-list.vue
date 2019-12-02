<template>
    <div class="grids">
        <kendo-tooltip ref="kTooltip" 
                       :filter="'td a, tr:not(.k-grid-edit-row) td:not(.k-command-cell)'" 
                       :position="'top'"
                       :content="getTooltipTilte">
            <kendo-grid :data-source="warehousesDataSource"
                        :sortable="true"
                        :no-records="true"
                        :navigatable='true'
                        :editable="[{mode: 'inline', confirmation: false}]"
                        :toolbar="[{name: 'create', text: $t('Inventory.Warehouse.NewWarehouse')}]"
                        :filterable-extra="false"
                        :filterable-mode="'row'"
                        :pageable-always-visible="true"
                        :pageable-page-sizes="[5, 10, 20, 30]">
                <kendo-grid-column :field="'Code'"
                                :title="$t('Inventory.Warehouse.WarehouseCode')"
                                :editable="preventEditColumn"
                                :filterable-cell-show-operators="false"
                                :filterable-cell-operator="'contains'"
                                :width="100"></kendo-grid-column>
                <kendo-grid-column :field="'EnName'"
                                :title="$t('Inventory.Warehouse.WarehouseEnName')"
                                :filterable-cell-show-operators="false"
                                :filterable-cell-operator="'contains'"
                                :width="120"></kendo-grid-column>
                <kendo-grid-column :field="'ArName'"
                                :title="$t('Inventory.Warehouse.WarehouseArName')"
                                :filterable-cell-show-operators="false"
                                :filterable-cell-operator="'contains'"
                                :width="120"></kendo-grid-column>
                <kendo-grid-column :field="'Description'"
                                :title="$t('Inventory.Description')"
                                :filterable-cell-show-operators="false"
                                :filterable-cell-operator="'contains'"
                                :width="120"
                                ></kendo-grid-column> 
                <kendo-grid-column :field="'ParentCategory'"
                                :title="$t('Inventory.ParentCategory')"
                                :filterable-cell-show-operators="false"
                                :filterable-cell-operator="'contains'"
                                :width="120"></kendo-grid-column>
                <kendo-grid-column :field="'Status'"
                                :title="$t('Inventory.Status')"
                                :filterable-cell-template="statusFilter"
                                :filterable-cell-show-operators="false"
                                :editor="customBoolEditor"
                                :template="`#if(Status){#
                                                <span class='statusHolder isactive'>Active</span>
                                            #}else{#
                                                <span class='statusHolder isinactive'>Inactive</span>
                                            #}#`"
                                :width="100"></kendo-grid-column>
                <kendo-grid-column :command="customGridCommand"
                                :title="$t('Inventory.Action')"
                                :width="50"></kendo-grid-column>                                
                <kendo-grid-column :width="30" :template="openPopupTemplate"></kendo-grid-column>
            </kendo-grid>
        </kendo-tooltip>
    </div>
</template>

<script src="./warehouses-list.js"></script>
<style lang="scss" scoped>

</style>