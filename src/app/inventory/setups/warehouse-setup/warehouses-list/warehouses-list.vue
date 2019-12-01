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
                        :editable="'inline'"
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
                                :width="100"></kendo-grid-column>
            </kendo-grid>
        </kendo-tooltip>




        <!-- <kendo-datasource ref="localDataSource"
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
    </kendo-grid> -->
    </div>
</template>

<script src="./warehouses-list.js"></script>
<style lang="scss" scoped>

</style>