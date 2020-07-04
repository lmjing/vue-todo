<template>
    <div>
        <ul id="todo-list">
            <li v-for="(todoItem, i) in todoList" v-bind:key="i" class="todo-item" v-on:click="toggleTodo(i)">
                <v-icon v-if="!todoItem.done">mdi-check</v-icon>
                {{todoItem.text}}
                <v-icon color="#ef2121" class="todo-remove" v-on:click.stop="todoDelete(i)">mdi-delete-outline</v-icon>
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
        background: #fafafa;
        line-height: 50px;
        height: 50px;
        margin: 10px 0;
        padding: 0 20px;
        border-radius: 10px;
        box-shadow: 5px 5px 5px #48484830;
        position: relative;
        margin-right: 10px;
    }

    #todo-list {
        list-style: none;
    }
    .todo-remove {
        position: absolute;
        right: 0;
        line-height: 50px;
        margin-right: 10px;
    }
</style>