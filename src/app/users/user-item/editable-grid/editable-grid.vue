<template>
  <div class="grid-template">
    <kendo-grid :data-source="localDataSource"
                :editable="'inline'"
                :toolbar="['create', 'save', 'cancel']">
        <kendo-grid-column :field="'ProductName'"></kendo-grid-column>
        <kendo-grid-column :field="'UnitPrice'"
                           :title="'Unit Price'"
                           :width="120"
                           :format="'{0:c}'"></kendo-grid-column>
        <kendo-grid-column :field="'Category'"
                           :title="'Category'"
                           :editor="categoryDropDownEditor"
                           :template="'#=Category.CategoryName#'"
                           :width="350"></kendo-grid-column>
        <kendo-grid-column :field="'Discontinued'" :width="120"></kendo-grid-column>
        <kendo-grid-column :command="['destroy']"
                           :title="'&nbsp;'"
                           :width="100"></kendo-grid-column>
    </kendo-grid>
  </div>
</template>

<script src="./editable-grid.js"></script>

<style lang="scss" scoped>
@import '../../theme/users.scss';
</style>
