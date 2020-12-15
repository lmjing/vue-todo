<template>
    <v-card
            color="grey lighten-4"
            flat
            height="120px"
    >
        <v-toolbar
            color="elevation-0">
            <v-toolbar-title
                    class="font-weight-black text-uppercase title teal--text"
            >Todo It!</v-toolbar-title>
        </v-toolbar>
        <todo-input v-on:addTodo="addTodo"></todo-input>
    </v-card>
</template>

<script>
    import TodoInput from "./TodoInput";

    export default {
        name: "TodoHeader",
        methods: {
          addTodo(todo) {
              this.$emit("addTodo", todo);
          }
        },
        components: {
            TodoInput,
        }
    }
</script>

<style scoped>
</style>