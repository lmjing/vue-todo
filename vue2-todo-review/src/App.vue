<template>
  <v-app>
    <todo-header></todo-header>
    <todo-input></todo-input>
    <todo-list></todo-list>
    <todo-footer></todo-footer>
  </v-app>
</template>

<script>
  import TodoHeader from "./components/TodoHeader";
  import TodoInput from "./components/TodoInput";
  import TodoList from "./components/TodoList";
  import TodoFooter from "./components/TodoFooter";

export default {
  name: 'App',

  components: {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter
  },

  data: () => ({
    //
  }),
};
</script>
