import AppUsers from './users.vue';

import AppUserList from './user-list/user-list.vue';
import AppUserItem from './user-item/user-item.vue';
import AppFormValid from './user-list/form-valid.vue';

const userRoutes = [
  {
    path: '/users',
    component: AppUsers,
    children: [
      {
      path: 'form-valid',
      name: 'form-valid',
      component: AppFormValid
      },
      {
        path: 'user-list',
        name: 'user-list',
        component: AppUserList
      },
      {
        path: 'user-item',
        name: 'user-item',
        component: AppUserItem
      },
      {
        path: '',
        redirect: { name: 'form-valid' }
      }
    ]
  },      
];

export default userRoutes;
