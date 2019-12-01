import Vue from 'vue';
import Router from 'vue-router';

import { usersRoutes } from './users';
import { inventoryRoutes } from './inventory';

import { AppPageNotFound } from './shared/components';

Vue.use(Router);

const appRoutes = [
  {
    path: '/',
    redirect: '/users'
  },
  {
    path: '*',
    name: 'page-not-found',
    component: AppPageNotFound
  }
];

const routes = [...usersRoutes, ...appRoutes, ...inventoryRoutes];

export default new Router({
  mode: 'history',
  routes
});
