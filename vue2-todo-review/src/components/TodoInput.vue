<template>
    <div class="pa-2">
        <v-text-field
                label="New Todo"
                single-line
                rounded
                filled
                dense
                color="teal"
                class="text-uppercase"
                append-outer-icon="mdi-plus-circle-outline"
                @click:append-outer="addTodo"
                v-model="newTodoItem"
                v-on:keyup.enter="addTodo"
        >
        </v-text-field>
    </div>
</template>

<script>
    export default {
        name: "TodoInput",
        data: function() {
            return {
                newTodoItem: ""
            }
        },
        methods: {
            addTodo () {
                const today = this.$moment().format('YYYY-MM-DD hh:mm');
                const newItem = JSON.stringify({
                    todo: this.newTodoItem,
                    created: today,
                    done: false
                });
                localStorage.setItem(this.newTodoItem, newItem);
                this.clearInput();
            },
            clearInput () {
                this.newTodoItem = "";
            }
        }
    }
</script>

<style scoped>

</style>