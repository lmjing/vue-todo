import Vue from 'vue';

const setItems = (state, todos) => {
    todos.map(item => {
        state.todoItems.push(item);
        localStorage.setItem(item.todo, JSON.stringify(item))
    });
};

const addOneItem = (state, todo) => {
    const today = Vue.moment().format('YYYY-MM-DD hh:mm');
    const newItem = {
        todo,
        created: today,
        done: false
    };
    localStorage.setItem(todo, JSON.stringify(newItem));
    state.todoItems.push(newItem);
};

const removeOneItem = (state, payload) => {
    state.todoItems.splice(payload.idx, 1);
    localStorage.removeItem(payload.item.todo);
};
const checkOneItem = (state, idx) => {
    let item = state.todoItems[idx];
    item.done = !item.done;
    localStorage.setItem(item.todo, JSON.stringify(item));
    item = null;
};

const clearItems = (state) => {
    localStorage.clear();
    state.todoItems = [];
};

export {
    setItems,
    addOneItem,
    removeOneItem,
    checkOneItem,
    clearItems,
}