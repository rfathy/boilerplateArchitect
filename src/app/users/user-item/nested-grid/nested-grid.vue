<template>
  <div class="grid-template">
    <kendo-datasource ref="datasource5"
                        :transport-read-url="'https://demos.telerik.com/kendo-ui/service/Northwind.svc/Employees'"
                        :type="'odata'"
                        :batch='true'
                        :page-size='20'>
    </kendo-datasource>

    <kendo-grid :height="600"
                :data-source-ref="'datasource5'"
                :pageable='true'
                :editable="'inline'"
                :toolbar="['create']"
                v-on:detailinit="detailInit" 
                v-on:databound="dataBound">
          <kendo-grid-column field="FirstName" title="First Name" :width="110"></kendo-grid-column>
          <kendo-grid-column field="LastName" title="Last Name" :width="110"></kendo-grid-column>
          <kendo-grid-column :width="150" :template="openPopupTemplate"></kendo-grid-column>
          <kendo-grid-column field="City" :width="260"></kendo-grid-column>
          <kendo-grid-column field="Title"></kendo-grid-column>
          <kendo-grid-column :command="['edit', 'destroy']"
                           :title="'&nbsp;'"
                           :width="220"></kendo-grid-column>
    </kendo-grid>
  </div>
</template>

<script src="./nested-grid.js"></script>

<style lang="scss" scoped>
@import '../../theme/users.scss';
</style>
