<template>
  <div class="grid-template">
    <kendo-tabstrip @select="onSelect">
        <ul>
            <li :class="tab.class" v-for="tab in tabs" :key="tab.id">{{ tab.name }}</li>
        </ul>
        <div>
          <products-grid />
        </div>
        <div>
          <editable-grid />
        </div>
        <div>
          <template-grid />
          <!-- <component :is="selected"></component> -->
        </div>
        <div>
          <nested-grid />
        </div>
    </kendo-tabstrip>
  </div>
</template>

<script src="./user-item.js"></script>

<style lang="scss" scoped>
@import '../theme/users.scss';
</style>
