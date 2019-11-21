<template>
  <div class="user-list">
    <kendo-datasource ref="datasource1"
                        :transport-read-url="'../../../mock-data/product.json'"
                        :schema-model-fields="schemaModelFields"
                        :page-size='15'>
    </kendo-datasource>

    <kendo-grid :height="600"
                :data-source-ref="'datasource1'"
                :pageable='true'
                :editable="'inline'"
                :toolbar="['create']"
                :edit="editGrid"
                :filterable-mode="'row'">
        <kendo-grid-column :field="'code'"
                           :title="'Code'"
                           :editable="preventEditColumn"
                           :filterable-cell-show-operators="false"
                           :width="120"></kendo-grid-column>
        <kendo-grid-column :field="'en_name'"
                           :title="'En Name'"
                           :filterable-cell-show-operators="false"
                           :width="120"></kendo-grid-column>
        <kendo-grid-column :field="'ar_name'"
                           :title="'Ar Name'"
                           :filterable-cell-show-operators="false"
                           :width="120"></kendo-grid-column>
        <kendo-grid-column :field="'classification'"
                           :title="'Product Classification'"
                           :filterable-cell-show-operators="false"
                           :filterable-multi="true"
                           :width="120"></kendo-grid-column> 
        <kendo-grid-column :field="'description'"
                           :title="'Description'"
                           :filterable-cell-show-operators="false"
                           :width="120"
                           ></kendo-grid-column> 
        <kendo-grid-column :field="'parent_category'"
                           :title="'Parent Category'"
                           :filterable-cell-show-operators="false"
                           :width="120"></kendo-grid-column>
        <kendo-grid-column :field="'status'"
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
