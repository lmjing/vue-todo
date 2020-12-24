import Vue from 'vue';
import Vuex from 'vuex';
import * as getters from './getters';
import * as mutations from './mutations';
import axios from 'axios';

Vue.use(Vuex);

const storage = {
    fetch() {
        let arr = [];
        if (localStorage.length > 0) {
            for (let i=0; i<localStorage.length; i++) {
                const key = localStorage.key(i);
                if (key !== "loglevel:webpack-dev-server") {
                    let value = JSON.parse(localStorage.getItem(localStorage.key(i)));
                    arr.push(value);
                }
            }
        }
        return arr;
    },
};

export const store = new Vuex.Store({
    state: {
        defaultUrl: 'http://gist.githubusercontent.com/lmjing/0370b7392cf67fb9e500ff2c231b819a/raw/1df96f9ffd23bc87aa78d40eb6f7205dfd32b430/TodoItems.json',
        todoItems: storage.fetch(),
    },
    getters,
    mutations,
    actions: {
        getDefaultTodo(context) {
            axios.get(context.state.defaultUrl)
                .then(res => {
                    context.commit('setItems', res.data);
                })
                .catch(error => console.log(error));
        }
    }
});