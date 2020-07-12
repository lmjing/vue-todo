<template>
  <div id="app">
    <todo-header></todo-header>
    <todo-input></todo-input>
    <todo-list ></todo-list>
    <todo-footer></todo-footer>
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
    TodoFooter,
  },
  data: () => ({
    todoItems: []
  }),
  created() {
    console.log(this.$store.state.todoItems);
    if (this.$store.state.todoItems.length === 0) {
      this.$store.dispatch('initList');
      console.log('데이터가 업승');
    }
    console.log('데이터가 있응');
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