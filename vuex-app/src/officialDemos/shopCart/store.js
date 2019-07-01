import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters.js';
import * as mutations from './mutations.js';
import * as actions from './actions.js';

Vue.use(Vuex);

const state = {
    goodsList: [
        {id: 1, name: 'ipad mini4', price: 500.1, stock: 2},
        {id: 2, name: 'switch', price: 2150, stock: 12},
        {id: 3, name: 'xiaomi8', price: 1999, stock: 3}
    ],
    addedProducts: [
        
    ]
}

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})