import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

const STORAGE_LIST_KEY = 'TODO_LIST';
const storage = {
    fetch() {
        console.log(localStorage.getItem(STORAGE_LIST_KEY));
        return JSON.parse(localStorage.getItem(STORAGE_LIST_KEY)) || [];
    },
    setList(todoItems) {
        localStorage.setItem(STORAGE_LIST_KEY, JSON.stringify(todoItems));
    },
    clear() {
        localStorage.clear();
    }
};

export const store = new Vuex.Store({
    state: {
        todoItems: storage.fetch()
    },
    mutations: {
        setList(state, data) {
            state.todoItems = data;
            storage.setList(data);
        },
        addOneItem(state, item) {
            let newItem = {
                text: item,
                done: false
            };
            state.todoItems.push(newItem);
            storage.setList(state.todoItems);
            newItem = null;
        },
        deleteOneItem(state, i) {
            state.todoItems.splice(i, 1);
            storage.setList(state.todoItems);
        },
        clearAllTodo(state) {
            state.todoItems = [];
            storage.clear();
        },
        toggleOneItem(state, i) {
            state.todoItems[i].done = !state.todoItems[i].done;
            storage.setList(state.todoItems);
        },
    },
    actions: {
        initList(context) {
            console.log('데이터 호출');
            axios.get('https://gist.githubusercontent.com/lmjing/0370b7392cf67fb9e500ff2c231b819a/raw/dc58261437377981bed2663f81e0d0448125ce77/TodoItems.json')
                .then((response) => {
                    if (response.status === 200) {
                        context.commit('setList', response.data || []);
                        console.log(response);
                    } else {
                        console.log('error');
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        },
    }
});