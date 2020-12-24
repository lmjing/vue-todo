import Vue from 'vue';
import Vuex from 'vuex';
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
    getters: {
        getTodoItems(state) { return state.todoItems; },
    },
    mutations: {
        setItems(state, todos) {
            todos.map(item => {
                state.todoItems.push(item);
                localStorage.setItem(item.todo, JSON.stringify(item))
            });
        },
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
    },
    actions: {
        getDefaultTodo(context) {
            console.log(`데이터가 없어서 default 값 불러옴`);
            axios.get(context.state.defaultUrl)
                .then(res => {
                    console.log(res.data);
                    context.commit('setItems', res.data);
                })
                .catch(error => console.log(error));
        }
    }
});