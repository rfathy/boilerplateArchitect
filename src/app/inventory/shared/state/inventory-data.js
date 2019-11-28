import { reflectKeys } from '@/app/shared/services';

import { fetchInventory } from '../services';
import Axios from 'axios';

/** Initial state */
const initialState = {
  loading: false,
  data: null,
  error: null,
  productsData: []
};

/** Prefix for mutation types and actiontypes */
const namespacedPrefix = '[Inventory]';

/**
 * Mutation types
 */
const mutationTypes = reflectKeys(
  [
    'Inventory_DATA_SUCCESS',
    'Inventory_DATA_REQUEST',
    'Inventory_DATA_ERROR',
    'Inventory_DATA_RESET'
  ],
  namespacedPrefix
);

const {
  Inventory_DATA_ERROR,
  Inventory_DATA_REQUEST,
  Inventory_DATA_RESET,
  Inventory_DATA_SUCCESS
} = mutationTypes;

/**
 * Inventory data mutations
 */
const mutations = {
  // products data
  getProductsData(state, response) { debugger
    state.productsData = response.data;
  },

  /** user data request */
  [Inventory_DATA_REQUEST](state) {
    Object.assign(state, { loading: true, error: null });
  },

  /** user data success */
  [Inventory_DATA_SUCCESS](state, payload) {
    Object.assign(state, { loading: false, data: payload });
  },

  /** user data error */
  [Inventory_DATA_ERROR](state, payload) {
    Object.assign(state, {
      loading: false,
      data: null,
      error: payload || true
    });
  },

  /** reset user data */
  [Inventory_DATA_RESET](state) {
    Object.assign(state, ...initialState);
  }
};

// get products data
const getters = {
  getProducts: state => { debugger
    return state.productsData
  }
};

/** Actions types constants */
export const actionsTypes = reflectKeys(['FETCH_USER_DATA'], namespacedPrefix);

/**
 * Inventory data actions
 */
const actions = {
  // Fetch products data
  getProductsData(state) {
    return Axios.get('http://localhost:8080/mock-data/product.json')
                .then(response => { debugger
                  state.commit('getProductsData', response)
                }).catch(error => console.log(error))
  },
  /** fetch user data */
  async [actionsTypes.FETCH_USER_DATA](context, authCred) {
    context.commit(Inventory_DATA_REQUEST);

    const result = await fetchInventory(authCred).catch(e => {
      context.commit(Inventory_DATA_ERROR, e);
    });

    if (result) {
      context.commit(Inventory_DATA_SUCCESS, result);
    }

    return result;
  }
};

export default {
  mutations,
  actions,
  state: initialState,
  getters
};
