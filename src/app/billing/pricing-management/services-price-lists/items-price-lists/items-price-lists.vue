<template>
    <div id="items-price-lists">
        <kendo-datasource ref="dataSourceRef"
                        :transport-read="itemsPriceListsDS"
                        :schema-model-id="'ContractID'"
                        :schema-model-fields="schemaModelFields"
                        :batch='true'
                        :page-size='20'>
        </kendo-datasource>

        <kendo-grid :data-source-ref="'dataSourceRef'"
                    :editable="'inline'"
                    :pageable-refresh='true'
                    :pageable-page-size='20'
                    :pageable-page-sizes='true'
                    :pageable-button-count='5'
                    :no-records="true"
                    :sortable="true"
                    :filterable-row='true'
                    :toolbar="['create']"
                    @databinding="onDataBinding">
            <kendo-grid-column :field="'Code'"
                                :title="'Code'"
                                :width="100">
            </kendo-grid-column>
            <kendo-grid-column :field="'EnName'"
                                :title="'English Name'"
                                :width="200">
            </kendo-grid-column>
            <kendo-grid-column :field="'ArName'"
                                :title="'Arabic Name'"
                                :width="200">
            </kendo-grid-column>
            <kendo-grid-column :field="'Description'"
                                :title="'Description'"
                                :width="250">
            </kendo-grid-column>
            <kendo-grid-column :field="'ActivationStatus'" :width="120"></kendo-grid-column>
            <kendo-grid-column :command="['edit', { text: 'Delete', click: deleteHandler }]"
                                :title="'&nbsp;'"
                                :width="180">
            </kendo-grid-column>
        </kendo-grid>
    </div>
</template>