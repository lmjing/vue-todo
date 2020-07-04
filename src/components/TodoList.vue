<template>
    <div>
        <ul id="todo-list">
            <li v-for="(todoItem, i) in this.$store.state.todoItems" v-bind:key="i" class="todo-item" @click="toggleTodo(i)">
                <v-icon v-if="!todoItem.done">mdi-check</v-icon>
                {{todoItem.text}}
                <v-icon color="#ef2121" class="todo-remove" @click.stop="todoDelete(i)">mdi-delete-outline</v-icon>
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
                this.$store.commit('deleteOneItem', i);
            },
            toggleTodo (i) {
                this.$store.commit('toggleOneItem', i);
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