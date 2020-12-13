<template>
  <v-app>
    <todo-header></todo-header>
    <todo-list></todo-list>
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

  data: () => ({
    //
  }),
};
</script>

<style>
  @import url(//fonts.googleapis.com/earlyaccess/notosanskr.css);
  .v-application { font-family: "Noto Sans KR", sans-serif !important; }
</style>
