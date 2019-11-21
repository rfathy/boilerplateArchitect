<template>
  <div class="user-list">
    <!-- <kendo-datasource ref="datasource1"
                        :transport-read-url="'../../../mock-data/product.json'"
                        :batch='true'
                        :page-size='10'> 
    </kendo-datasource> -->

    <!-- :schema-model-id="'ProductID'"
                        :schema-model-fields="schemaModelFields" 
                        :edit="editGrid" 
                        :editable="preventEditColumn"-->

    <kendo-grid :height="600"
                :data-source="productsDataSource"
                :pageable='true'
                :sortable="true"
                :no-records="true"
                :navigatable='true'
                :editable="'inline'"
                :toolbar="['create']"
                
                :filterable-mode="'row'">
        <kendo-grid-column :field="'Code'"
                           :title="'Code'"
                           
                           :filterable-cell-show-operators="false"
                           :filterable-cell-operator="'contains'"
                           :width="120"></kendo-grid-column>
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
                           :filterable-cell-show-operators="false"
                           :editor="customBoolEditor"
                           :width="80"></kendo-grid-column>
        <kendo-grid-column :command="['edit', 'destroy']"
                           :title="'&nbsp;'"
                           :width="120"></kendo-grid-column>
    </kendo-grid>

    <br /><br />

    <kendo-datasource ref="datasource2"
                        :transport-read-url="'../../../mock-data/users.json'"
                        :batch='true'
                        :page-size='15'>
    </kendo-datasource>

    <kendo-grid :height="600"
                :data-source-ref="'datasource2'"
                :pageable='true'
                :editable="'inline'">
        <kendo-grid-column :field="'name'"
                           :title="'User Name'"
                           :filterable-cell-operator="'contains'"
                           :filterable-multi="true"
                           :filterable-search="true"
                           :width="120"></kendo-grid-column>
        <kendo-grid-column :field="'age'"
                           :title="'User Age'"
                           :filterable-cell-operator="'contains'"
                           :filterable-multi="true"
                           :filterable-search="true"
                           :width="120"></kendo-grid-column>
        <kendo-grid-column :field="'company'"
                           :title="'Company'"
                           :filterable-cell-operator="'contains'"
                           :filterable-multi="true"
                           :filterable-search="true"
                           :width="120"></kendo-grid-column>
    </kendo-grid>

    <br /><br />

    <kendo-datasource ref="datasource3"
                        :transport-read-url="'../../../mock-data/users.json'"
                        :batch='true'
                        :page-size='15'>
    </kendo-datasource>

    <kendo-grid :height="600"
                :data-source-ref="'datasource3'"
                :pageable='true'
                filterable="true"
                :editable="'inline'">
        <kendo-grid-column :field="'name'"
                           :title="'User Name'"
                           :filterable-cell-operator="'contains'"
                           :filterable-multi="true"
                           :filterable-search="true"
                           :width="120"></kendo-grid-column>
        <kendo-grid-column :field="'age'"
                           :title="'User Age'"
                           :filterable-cell-operator="'contains'"
                           :filterable-multi="true"
                           :filterable-search="true"
                           :width="120"></kendo-grid-column>
        <kendo-grid-column :field="'company'"
                           :title="'Company'"
                           :filterable-cell-operator="'contains'"
                           :filterable-multi="true"
                           :filterable-search="true"
                           :width="120"></kendo-grid-column>
    </kendo-grid>

    <AppUserItem />
  </div>
</template>

<script src="./user-list.js"></script>

<style lang="scss" scoped>@import '../theme/users.scss'</style>
