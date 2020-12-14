<template>
    <v-simple-table>
        <template v-slot:default>
            <thead>
                <tr>
                    <th width="5%"></th>
                    <th width="60%" class="text-left">
                        Todo
                    </th>
                    <th width="20%" class="text-left">
                        Created
                    </th>
                    <th width="5%"></th>
                </tr>
            </thead>
            <tbody>
                <tr
                        v-for="(item, idx) in todoItems"
                        :key="item.todo"
                        @click="checkItem(item)"
                        :class="item.done ? 'done' : ''"
                        class="todo-item"
                >
                    <td>
                        <v-icon
                                small
                                :color="item.done ? 'gray' : 'teal'"
                        >
                            mdi-check
                        </v-icon>
                    </td>
                    <td class="item-text">{{ item.todo }}</td>
                    <td class="item-text">{{ item.created }}</td>
                    <td>
                        <v-icon
                                small
                                @click="deleteItem(item, idx)"
                        >
                            mdi-delete
                        </v-icon>
                    </td>
                </tr>
            </tbody>
        </template>
    </v-simple-table>
</template>

<script>
    export default {
        name: "TodoList",
        data: function () {
            return {
                todoItems: []
            }
        },
        created() {
            if (localStorage.length > 0) {
                for (let i=0; i<localStorage.length; i++) {
                    const key = localStorage.key(i);
                    if (key !== "loglevel:webpack-dev-server") {
                        let value = JSON.parse(localStorage.getItem(localStorage.key(i)));
                        this.todoItems.push(value);
                    }
                }
            }
        },
        methods: {
            deleteItem (item, idx) {
                this.todoItems.splice(idx, 1);
                localStorage.removeItem(item.todo);
            },
            checkItem (item) {
                item.done = !item.done;
                localStorage.setItem(item.todo, JSON.stringify(item));
            }
        }
    }
</script>

<style scoped>
    .todo-item.done {
        background: whitesmoke;
    }
    .todo-item.done td.item-text {
        text-decoration: line-through;
        color: gray;
    }
</style>