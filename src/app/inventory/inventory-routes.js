import AppInventory from './inventory.vue';


const inventoryRoutes = [
  {
    path: '/inventory-management',
    component: AppInventory,
    meta: {title: 'Inventory Management'},
    // children: [
    //   {
    //   path: 'product-category',
    //   name: 'product-category',
    //   meta: {title: 'Product Category'},
    //   component: ProductCategory
    //   }
      
    // ]
  },      
];

export default inventoryRoutes;


// {
//     path: '',
//     redirect: { name: 'form-valid' }
//   }