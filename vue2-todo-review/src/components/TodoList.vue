<template>
    <v-simple-table>
        <template>
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
                        v-for="(item, idx) in this.$store.state.todoItems"
                        :key="item.todo"
                        @click="checkOneItem(idx)"
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
                                @click.stop="removeOneItem({item, idx})"
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
    import { mapMutations } from 'vuex';

    export default {
        name: "TodoList",
        methods: {
            ...mapMutations(['removeOneItem', 'checkOneItem']),
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