import AppInventory from './inventory.vue';


const inventoryRoutes = [
  {
    path: '/inventory-management',
    component: AppInventory,
    meta: {title: 'Inventory Management'},
    children: [
      {
      path: 'uom-category',
      name: 'uom-category',
      meta: {title: 'UOM Category'},
      component: UOMCategory
      }
      
    ]
  },      
];

export default inventoryRoutes;


// {
//     path: '',
//     redirect: { name: 'form-valid' }
//   }