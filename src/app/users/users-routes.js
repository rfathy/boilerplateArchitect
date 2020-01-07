import AppUsers from './users.vue';

import UserList from './user-list/user-list.vue';
import UserItem from './user-item/user-item.vue';
import FormValid from './user-list/form-valid.vue';
import Grids from './user-list/grids';
import ProductCategory from './product-category/product-category.vue'
import UomCategory from './uom-category/uom-category.vue'


const userRoutes = [
  {
    path: '/users',
    component: AppUsers,
    meta: {title: 'Users'},
    children: [
      {
      path: 'form-valid',
      name: 'form-valid',
      meta: {title: 'Form Validation'},
      component: FormValid
      },
      {
        path: 'user-list',
        name: 'user-list',
        meta: {title: 'Users List'},
        component: UserList
      },
      {
        path: 'user-item',
        name: 'user-item',
        meta: {title: 'User Item'},
        component: UserItem
      },
      {
        path: 'grids',
        name: 'grids',
        meta: {title: 'grids'},
        component: Grids
      },
      {
        path: 'product-category',
        name: 'product-category',
        meta: {title: 'Product Category'},
        component: ProductCategory
      },
      {
        path: 'uom-category',
        name: 'uom-category',
        meta: {title: 'UOM Category'},
        component: UomCategory
      },
      {
        path: '',
        redirect: { name: 'form-valid' }
      }
    ]
  },      
];

export default userRoutes;
