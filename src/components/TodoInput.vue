<template>
    <div>
        <span>
            <v-text-field
                    v-model="newTodoItem"
                    label="새로운 TODO"
                    required
            ></v-text-field>
        </span>
        <v-btn class="mx-1" small fab dark color="primary" v-on:click="addTodo">
            <v-icon dark>mdi-plus</v-icon>
        </v-btn>
    </div>
</template>

<script>
    export default {
        name: "TodoInput",
        data: function () {
            return {
                newTodoItem: ""
            }
        },
        methods: {
            addTodo: function () {
                localStorage.setItem(this.newTodoItem, this.newTodoItem);
                this.newTodoItem = "";
            }
        }
    }
</script>

<style scoped>

</style>