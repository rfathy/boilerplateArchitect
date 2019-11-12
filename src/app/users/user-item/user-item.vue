<template>
  <div class="grid-template">
    <kendo-tabstrip @select="onSelect">
        <ul>
            <li v-for="tab in tabs" :key="tab.id">{{ tab.name }}</li>
        </ul>
        <div>
            <div>
                <template-grid />
                <!-- <component :is="selected"></component> -->
            </div>
        </div>
        <div>
            <div>
                <nested-grid />
            </div>
        </div>
    </kendo-tabstrip>
  </div>
</template>

<script src="./user-item.js"></script>

<style lang="scss" scoped>
@import '../theme/users.scss';
</style>
