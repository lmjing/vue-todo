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
        data: function () {
            return {
                todoList: []
            }
        },
        methods: {
            todoDelete: function (i) {
                localStorage.removeItem(this.todoList[i].text);
                this.todoList.splice(i, 1);
            },
            toggleTodo: function (i) {
                this.todoList[i].done = !this.todoList[i].done;
                localStorage.setItem(this.todoList[i].text, JSON.stringify(this.todoList[i]));
            }
        },
        created: function() {
            if (localStorage.length <= 1) return;

            for (let i=0; i<localStorage.length; i++) {
                let key = localStorage.key(i);
                if (key !== 'loglevel:webpack-dev-server') {
                    this.todoList.push(JSON.parse(localStorage.getItem(key)));
                }
                key = null;
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