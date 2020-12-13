<template>
    <v-simple-table>
        <template v-slot:default>
            <thead>
            <tr>
                <th class="text-left">
                    Todo
                </th>
                <th class="text-left">
                    Created
                </th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            <tr
                    v-for="(item, idx) in todoItems"
                    :key="item.todo"
            >
                <td>{{ item.todo }}</td>
                <td>{{ item.created }}</td>
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
            }
        }
    }
</script>

<style scoped>

</style>