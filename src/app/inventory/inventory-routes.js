import AppInventory from './inventory.vue';
import UOMCategory from '../users/uom-category/uom-category';


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