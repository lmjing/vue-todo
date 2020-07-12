<template>
    <div>
        <ul id="todo-list">
            <li v-for="(todoItem, i) in this.storedTodoItems" v-bind:key="i" class="todo-item" @click="toggleTodo(i)">
                <v-icon v-if="todoItem.done">mdi-check</v-icon>
                {{todoItem.text}}
                <v-icon color="#ef2121" class="todo-remove" @click.stop="todoDelete(i)">mdi-delete-outline</v-icon>
            </li>
        </ul>
    </div>
</template>

<script>
    import { mapGetters, mapMutations } from 'vuex';

    export default {
        name: "TodoList",
        props: ['todoList'],
        methods: {
            ...mapMutations({
                todoDelete: 'deleteOneItem',
                toggleTodo: 'toggleOneItem'
            }),
        },
        computed: {
            ...mapGetters(['storedTodoItems']),
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