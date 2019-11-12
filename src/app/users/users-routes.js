import AppUsers from './users.vue';

import AppUserList from './user-list/user-list.vue';
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
        path: '',
        redirect: { name: 'user-list' }
      }
    ]
  },      
];

export default userRoutes;
