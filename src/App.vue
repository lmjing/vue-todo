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
  import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'App',
  components: {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter,
  },
  computed: {
    ...mapGetters(['storedTodoItems']),
  },
  methods: {
    ...mapActions(['initList']),
  },
  created() {
    if (this.storedTodoItems.length === 0) {
      this.initList();
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