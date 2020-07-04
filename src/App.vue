<template>
  <div id="app">
    <todo-header></todo-header>
    <todo-input v-on:addItem="addOneItem"></todo-input>
    <todo-list v-bind:todoList="todoItems" v-on:deleteItem="deleteOneItem" v-on:toggleItem="toggleOneItem"></todo-list>
    <todo-footer v-on:clearItems="clearAllTodo"></todo-footer>
  </div>
</template>

<script>
  import TodoHeader from './components/TodoHeader.vue';
  import TodoInput from './components/TodoInput.vue';
  import TodoList from './components/TodoList.vue';
  import TodoFooter from './components/TodoFooter.vue';

export default {
  name: 'App',

  components: {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter
  },
  data: () => ({
    todoItems: [],
  }),
  created() {
    if (localStorage.length <= 1) return;

    for (let i=0; i<localStorage.length; i++) {
      let key = localStorage.key(i);
      if (key !== 'loglevel:webpack-dev-server') {
        this.todoItems.push(JSON.parse(localStorage.getItem(key)));
      }
      key = null;
    }
  },
  methods: {
    addOneItem(item) {
      let newItem = {
          text: item,
          done: false
      };
      this.todoItems.push(newItem);
      this.setListToLocalStorage();
      newItem = null;
    },
    deleteOneItem(i) {
      this.todoItems.splice(i, 1);
      this.setListToLocalStorage();
    },
    clearAllTodo() {
      this.todoItems = [];
      localStorage.clear();
    },
    toggleOneItem(i) {
      this.todoItems[i].done = !this.todoItems[i].done;
      this.setListToLocalStorage();
    },
    setListToLocalStorage() {
      localStorage.setItem('todoList', JSON.stringify(this.todoItems));
    }
  }
};
</script>

<style scoped>
  #app {
    margin: 0 auto;
    margin-top: 50px;
    padding: 20px;
    width: 500px;
  }
</style>