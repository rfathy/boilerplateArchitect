import { reflectKeys } from '@/app/shared/services';

import { fetchInventory } from '../services/inventory/inventory.js';
import Axios from 'axios';

/** Initial state */
const initialState = {
  loading: false,
  data: null,
  error: null,
  productsData: []
};

/** Prefix for mutation types and actiontypes */
const namespacedPrefix = '[INVENTORY]';

/**
 * Mutation types
 */
const mutationTypes = reflectKeys(
  [
    'INVENTORY_DATA_SUCCESS',
    'INVENTORY_DATA_REQUEST',
    'INVENTORY_DATA_ERROR',
    'INVENTORY_DATA_RESET'
  ],
  namespacedPrefix
);

const {
  INVENTORY_DATA_ERROR,
  INVENTORY_DATA_REQUEST,
  INVENTORY_DATA_RESET,
  INVENTORY_DATA_SUCCESS
} = mutationTypes;

/**
 * Users data mutations
 */
const mutations = {
  // products data
  getProductsData(state, response) { debugger
    state.productsData = response.data;
  },

  /** user data request */
  [INVENTORY_DATA_REQUEST](state) {
    Object.assign(state, { loading: true, error: null });
  },

  /** user data success */
  [INVENTORY_DATA_SUCCESS](state, payload) {
    Object.assign(state, { loading: false, data: payload });
  },

  /** user data error */
  [INVENTORY_DATA_ERROR](state, payload) {
    Object.assign(state, {
      loading: false,
      data: null,
      error: payload || true
    });
  },

  /** reset user data */
  [INVENTORY_DATA_RESET](state) {
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
export const actionsTypes = reflectKeys(['FETCH_INVENTORY_DATA'], namespacedPrefix);

/**
 * INVENTORY data actions
 */
const actions = {
  // Fetch products data
  getProductsData(state) {
    return Axios.get('http://localhost:8080/mock-data/product.json')
                .then(response => { debugger
                  state.commit('getProductsData', response)
                }).catch(error => console.log(error))
  },
  /** fetch INVENTORY data */
  async [actionsTypes.FETCH_INVENTORY_DATA](context, authCred) {
    context.commit(INVENTORY_DATA_REQUEST);

    const result = await fetchInventory(authCred).catch(e => {
      context.commit(INVENTORY_DATA_ERROR, e);
    });

    if (result) {
      context.commit(INVENTORY_DATA_SUCCESS, result);
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
