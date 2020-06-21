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
                let newItem = {
                    text: this.newTodoItem,
                    done: false
                };
                localStorage.setItem(newItem.text, JSON.stringify(newItem));
                this.newTodoItem = "";
                newItem = null;
            }
        }
    }
</script>

<style scoped>

</style>