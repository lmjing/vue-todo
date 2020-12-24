<template>
  <v-app>
    <todo-header/>
    <body>
    <todo-list/>
    </body>
    <todo-footer/>
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
};
</script>

<style>
  @import url(//fonts.googleapis.com/earlyaccess/notosanskr.css);
  .v-application { font-family: "Noto Sans KR", sans-serif !important; }
</style>
