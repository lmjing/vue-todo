<template>
    <v-simple-table>
        <template v-slot:default>
            <thead>
                <tr>
                    <th width="5%"/>
                    <th width="60%" class="text-left">
                        Todo
                    </th>
                    <th width="20%" class="text-left">
                        Created
                    </th>
                    <th width="5%"/>
                </tr>
            </thead>
            <tbody>
                <tr
                        v-for="(item, idx) in propsitem"
                        :key="item.todo"
                        @click="checkItem(idx)"
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
                                @click.stop="removeItem(item, idx)"
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
        props: [
          "propsitem"
        ],
        methods: {
            removeItem (item, idx) {
                this.$emit("removeTodo", item, idx);
            },
            checkItem (idx) {
                this.$emit("checkTodo", idx);
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