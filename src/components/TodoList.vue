<template>
    <div>
        <ul id="todo-list">
            <li v-for="(todoItem, i) in todoList" v-bind:key="i" class="todo-item">
                {{todoItem}}
                <v-icon color="primary" v-on:click="todoDelete(i)">mdi-delete</v-icon>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "TodoList",
        data: function () {
            return {
                todoList: []
            }
        },
        methods: {
            todoDelete: function (i) {
                this.todoList.splice(i, 1);
            }
        },
        created: function() {
            if (localStorage.length <= 1) return;

            for (let i=0; i<localStorage.length; i++) {
                let data = localStorage.key(i);
                if (data !== 'loglevel:webpack-dev-server') {
                    this.todoList.push(data);
                }
                data = null;
            }
        }
    }
</script>

<style scoped>
    .todo-item {
        background: #ffffff;
        line-height: 50px;
        height: 50px;
        margin: 10px;
        padding: 0 20px;
    }

    #todo-list {
        list-style: none;
    }
</style>