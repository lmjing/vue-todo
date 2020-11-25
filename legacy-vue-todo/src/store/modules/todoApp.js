import axios from 'axios';

const STORAGE_LIST_KEY = 'TODO_LIST';
const storage = {
    fetch() {
        return JSON.parse(localStorage.getItem(STORAGE_LIST_KEY)) || [];
    },
    setList(todoItems) {
        localStorage.setItem(STORAGE_LIST_KEY, JSON.stringify(todoItems));
    },
    clear() {
        localStorage.clear();
    }
};

const state = {
    todoItems: storage.fetch()
};

const getters = {
    storedTodoItems(state) {
        return state.todoItems;
    }
};
const mutations = {
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
};
const actions = {
    initList(context) {
        axios.get('https://gist.githubusercontent.com/lmjing/0370b7392cf67fb9e500ff2c231b819a/raw/dc58261437377981bed2663f81e0d0448125ce77/TodoItems.json')
            .then((response) => {
                if (response.status === 200) {
                    context.commit('setList', response.data || []);
                } else {
                    console.log('error');
                }
            })
            .catch((error) => {
                console.log(error);
            });
    },
};

export default {
    state,
    getters,
    mutations,
    actions
}