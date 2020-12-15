<template>
  <v-app>
    <todo-header></todo-header>
    <todo-list v-bind:propsitem="todoItems"></todo-list>
    <todo-footer></todo-footer>
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
  created() {
    if (localStorage.length > 0) {
      for (let i=0; i<localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key !== "loglevel:webpack-dev-server") {
          let value = JSON.parse(localStorage.getItem(localStorage.key(i)));
          this.todoItems.push(value);
        }
      }
    }
  },
};
</script>

<style>
  @import url(//fonts.googleapis.com/earlyaccess/notosanskr.css);
  .v-application { font-family: "Noto Sans KR", sans-serif !important; }
</style>
