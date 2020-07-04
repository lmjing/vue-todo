<template>
    <div>
        <span class="todo-input">
            <v-text-field
                    v-model="newTodoItem"
                    label="새로운 TODO"
                    required
            ></v-text-field>
        </span>
        <v-btn class="mx-1" small fab dark color="primary" v-on:click="addTodo">
            <v-icon dark>mdi-plus</v-icon>
        </v-btn>
    </div>
</template>

<script>
    export default {
        name: "TodoInput",
        data: function () {
            return {
                newTodoItem: ''
            }
        },
        methods: {
            addTodo() {
                if (this.newTodoItem !== '') {
                    this.$emit('addItem', this.newTodoItem);
                    this.clearInput();
                }
            },
            clearInput() {
                this.newTodoItem = '';
            }
        }
    }
</script>

<style scoped>
    .todo-input {
        display: inline-block;
        width: 88%;
        margin-right: 2%;
    }
</style>