<template>
    <!-- k-rtl class can be added to the following div in case of Ar -->
  <div class="grid-template"> 
    <kendo-tooltip ref="kTooltip" id="agglomerations" 
                  :filter="'td a, tr:not(.k-grid-edit-row) td:not(.k-command-cell)'" 
                  :position="'top'"
                  :content="getTooltipTilte">
      <kendo-grid :data-source="localDataSource"
                :editable="'inline'"
                :pageable='true'
                :sortable="true"
                :no-records="true"
                :navigatable='true'
                :toolbar="['create']"
                ref="gridReg"
                @edit="editAction"
                @remove="removeAction"
                @savechanges="saveAction">
        <kendo-grid-column :field="'ProductName'"></kendo-grid-column>
        <kendo-grid-column :field="'UnitPrice'"
                           :title="'Unit Price'"
                           :width="120"
                           :format="'{0:c}'"></kendo-grid-column>
        <kendo-grid-column :field="'Category.CategoryID'"
                           :title="'Category'"
                           :editor="categoryDropDownEditor"
                           :template="'#=Category.CategoryName#'"></kendo-grid-column> 
                           <!-- :field="'Category'"
                                :template="'#=Category.CategoryName#'" -->
        <kendo-grid-column :field="'Discontinued'" 
                           :width="120"
                           :editor="customBoolEditor"></kendo-grid-column>
        <kendo-grid-column :command="customGridCommand"
                           :title="'&nbsp;'"
                           :command-command-item-icon-class-edit="'k-icon k-i-plus'"
                           :width="220"></kendo-grid-column>
      </kendo-grid> 
    </kendo-tooltip>
    
  </div>
</template>

<script src="./editable-grid.js"></script>

<style lang="scss" scoped>
@import '../../theme/users.scss';
</style>
