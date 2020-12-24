<template>
  <v-app>
    <todo-header v-on:addTodo="addOneItem"/>
    <body>
    <todo-list
            v-bind:propsitem="todoItems"
            v-on:removeTodo="removeOneItem"
            v-on:checkTodo="checkOneItem"
    />
    </body>
    <todo-footer @clearAllTodo="clearItems"/>
  </v-app>
</template>

<script>
  import TodoHeader from "./components/TodoHeader";
  import TodoList from "./components/TodoList";
  import TodoFooter from "./components/TodoFooter";

export default {
  name: 'App',
  components: {
    TodoHeader,
    TodoList,
    TodoFooter
  },
  data: function () {
    return {
      todoItems: []
    }
  },
  methods: {
    addOneItem(todo) {
      const today = this.$moment().format('YYYY-MM-DD hh:mm');
      const newItem = {
        todo,
        created: today,
        done: false
      };
      localStorage.setItem(todo, JSON.stringify(newItem));
      this.todoItems.push(newItem);
    },
    removeOneItem(item, idx) {
      this.todoItems.splice(idx, 1);
      localStorage.removeItem(item.todo);
    },
    checkOneItem(idx) {
      let item = this.todoItems[idx];
      item.done = !item.done;
      localStorage.setItem(item.todo, JSON.stringify(item));
      item = null;
    },
    clearItems() {
      localStorage.clear();
      this.todoItems = [];
    }
  },
  // created() {
  //   if (localStorage.length > 0) {
  //     for (let i=0; i<localStorage.length; i++) {
  //       const key = localStorage.key(i);
  //       if (key !== "loglevel:webpack-dev-server") {
  //         let value = JSON.parse(localStorage.getItem(localStorage.key(i)));
  //         this.todoItems.push(value);
  //       }
  //     }
  //   }
  // },
};
</script>

<style>
  @import url(//fonts.googleapis.com/earlyaccess/notosanskr.css);
  .v-application { font-family: "Noto Sans KR", sans-serif !important; }
</style>
