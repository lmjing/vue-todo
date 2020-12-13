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
            </tr>
            </thead>
            <tbody>
            <tr
                    v-for="item in todoItems"
                    :key="item.todo"
            >
                <td>{{ item.todo }}</td>
                <td>{{ item.created }}</td>
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
                for (let i=1; i<localStorage.length; i++) {
                    const value = JSON.parse(localStorage.getItem(i.toString()));
                    this.todoItems.push(value);
                }
            }
        }
    }
</script>

<style scoped>

</style>