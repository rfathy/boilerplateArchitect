import AppUsers from './users.vue';

import AppUserList from './user-list/user-list.vue';
import AppUserItem from './user-item/user-item.vue';

const userRoutes = [
  {
    path: '/users',
    component: AppUsers,
    children: [
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
        redirect: { name: 'user-list' }
      }
    ]
  }
];

export default userRoutes;
