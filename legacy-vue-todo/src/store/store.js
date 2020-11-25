import Vue from 'vue'
import Vuex from 'vuex'
import TodoApp from './modules/todoApp.js'

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        TodoApp
    }
});