<template>
  <div class="grid-template">
    <kendo-datasource ref="datasource1"
                        :transport-read-url="'https://demos.telerik.com/kendo-ui/service/Northwind.svc/Employees'"
                        :type="'odata'"
                        :batch='true'
                        :page-size='20'>
    </kendo-datasource>

    <kendo-grid :height="600"
                :data-source-ref="'datasource1'"
                :pageable='true'
                :editable="'inline'"
                :toolbar="['create']"
                v-on:detailinit="detailInit" 
                v-on:databound="dataBound">
          <kendo-grid-column field="FirstName" title="First Name" :width="110"></kendo-grid-column>
          <kendo-grid-column field="LastName" title="Last Name" :width="110"></kendo-grid-column>
          <kendo-grid-column field="Country" :width="110"></kendo-grid-column>
          <kendo-grid-column field="City" :width="300"></kendo-grid-column>
          <kendo-grid-column field="Title"></kendo-grid-column>
    </kendo-grid>
  </div>
</template>

<script src="./nested-grid.js"></script>

<style lang="scss" scoped>
@import '../../theme/users.scss';
</style>
