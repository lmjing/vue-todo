const storage = {
    setList(todoItems) {
        localStorage.setItem('TODO_LIST', JSON.stringify(todoItems));
    },
    clear() {
        localStorage.clear();
    }
};

const setList = (state, data) => {
    state.todoItems = data;
    storage.setList(data);
};
const addOneItem = (state, item) => {
    let newItem = {
        text: item,
        done: false
    };
    state.todoItems.push(newItem);
    storage.setList(state.todoItems);
    newItem = null;
};
const deleteOneItem = (state, i) => {
    state.todoItems.splice(i, 1);
    storage.setList(state.todoItems);
};
const clearAllTodo = (state) => {
    state.todoItems = [];
    storage.clear();
};
const toggleOneItem = (state, i) => {
    state.todoItems[i].done = !state.todoItems[i].done;
    storage.setList(state.todoItems);
};

export { setList, addOneItem, deleteOneItem, clearAllTodo, toggleOneItem };