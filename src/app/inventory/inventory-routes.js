import AppInventory from './inventory.vue';
// import UOMCategory from '../users/uom-category/uom-category';

import WarehousesList from './setups/warehouse-setup/warehouses-list/warehouses-list.vue';
import WarehouseCategory from './setups/warehouse-setup/warehouse-category/warehouse-category.vue'
import ProductCategory from './setups/product-setup/product-category/product-category.vue'
import ProductsList from './setups/product-setup/products-list/products-list.vue'
import UOMCategory from './setups/product-setup/uom-category/uom-category.vue'

const inventoryRoutes = [
  {
    path: '/inventory',
    component: AppInventory,
    meta: {
      title: 'Inventory',
      breadcrumb: 'Inventory Management'
    },
    children: [
      {
        path: 'setups/warehouse-setup/warehouses-list',
        component: WarehousesList,
        meta: {
          title: 'Warehouses List',
          breadcrumb: 'Warehouses List'
        },          
      },
      {
        path: 'setups/warehouse-setup/warehouse-category',
        component: WarehouseCategory,
        meta: {
          title: 'Warehouses Category',
          breadcrumb: 'Warehouses Category'
        },          
      },
      {
        path: 'setups/product-setup/product-category',
        component: ProductCategory,
        meta: {
          title: 'Product Category',
          breadcrumb: 'Product Category'
        },          
      },
      {
        path: 'setups/product-setup/products-list',
        component: ProductsList,
        meta: {
          title: 'Products List',
          breadcrumb: 'Products List'
        },          
      },
      {
        path: 'setups/product-setup/uom-category',
        component: UOMCategory,
        meta: {
          title: 'UOM Category',
          breadcrumb: 'UOM Category'
        },          
      }       
    ]
  },      
];

export default inventoryRoutes;
