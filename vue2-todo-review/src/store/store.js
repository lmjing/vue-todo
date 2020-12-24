import Vue from 'vue';
import Vuex from 'vuex';

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
        todoItems: storage.fetch(),
    },
    mutations: {
        addOneItem(state, todo) {
            const today = Vue.moment().format('YYYY-MM-DD hh:mm');
            const newItem = {
                todo,
                created: today,
                done: false
            };
            localStorage.setItem(todo, JSON.stringify(newItem));
            state.todoItems.push(newItem);
        },
        removeOneItem(state, payload) {
            state.todoItems.splice(payload.idx, 1);
            localStorage.removeItem(payload.item.todo);
        },
        checkOneItem(state, idx) {
            let item = state.todoItems[idx];
            item.done = !item.done;
            localStorage.setItem(item.todo, JSON.stringify(item));
            item = null;
        },
        clearItems(state) {
            localStorage.clear();
            state.todoItems = [];
        }
    }
});