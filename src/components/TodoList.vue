<template>
    <div>
        <ul id="todo-list">
            <li v-for="(todoItem, i) in todoList" v-bind:key="i" class="todo-item" v-on:click="toggleTodo(i)">
                <v-icon v-if="!todoItem.done">mdi-check</v-icon>
                {{todoItem.text}}
                <v-icon color="primary" v-on:click.stop="todoDelete(i)">mdi-delete</v-icon>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "TodoList",
        props: ['todoList'],
        methods: {
            todoDelete (i) {
                this.$emit('deleteItem', i);
            },
            toggleTodo (i) {
                this.$emit('toggleItem', i);
            }
        }
    }
</script>

<style scoped>
    .todo-item {
        background: #ffffff;
        line-height: 50px;
        height: 50px;
        margin: 10px 0;
        padding: 0 20px;
    }

    #todo-list {
        list-style: none;
    }
</style>