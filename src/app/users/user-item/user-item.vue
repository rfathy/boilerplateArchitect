<template>
  <div class="grid-template">
    <kendo-datasource ref="datasource1"
                      :type="'odata'"
                      :transport-read-url="'https://demos.telerik.com/kendo-ui/service/Northwind.svc/Employees'">
    </kendo-datasource>

    <kendo-grid ref="grid"
                :height="550"
                :data-source-ref="'datasource1'"
                :row-template="rowTemplate"
                :alt-row-template="altRowTemplate">
        <kendo-grid-column title="Details" :width="110"></kendo-grid-column>
        <kendo-grid-column title="Country" :width="110"></kendo-grid-column>
        <kendo-grid-column title="ID" :width="110"></kendo-grid-column>
    </kendo-grid>
  </div>
</template>

<script src="./user-item.js"></script>

<style lang="scss" scoped>
@import '../theme/users.scss';
</style>
