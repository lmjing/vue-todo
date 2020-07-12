import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters.js';
import * as mutations from './mutations.js';
import * as actions from './actions.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        todoItems: () => { return JSON.parse(localStorage.getItem('TODO_LIST')) || [] }
    },
    getters,
    mutations,
    actions,
});