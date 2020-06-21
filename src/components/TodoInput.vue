<template>
    <div>
        <input type="text" v-model="newTodoItem">
        <button v-on:click="addTodo">+</button>
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