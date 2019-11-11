<template>
  <div class="user-list">
    <kendo-datasource ref="datasource1"
                        :transport-read-url="'http://localhost:8080/mock-data/users.json'"
                        :batch='true'
                        :page-size='20'>
    </kendo-datasource>

    <kendo-grid :height="600"
                :data-source-ref="'datasource1'"
                :pageable='true'
                :editable="'inline'"
                :filterable="true">
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
  </div>
</template>

<script src="./user-list.js"></script>

<style lang="scss" scoped>@import '../theme/users.scss'</style>
