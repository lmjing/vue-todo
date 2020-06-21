<template>
    <div>
        <ul>
            <li v-for="todoItem in todoList" v-bind:key="todoItem">{{todoItem}}</li>
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
        created: function() {
            if (localStorage.length <= 1) return;

            for (let i=0; i<localStorage.length; i++) {
                let data = localStorage.key(i);
                if (data !== 'loglevel:webpack-dev-server') {
                    this.todoList.push(data);
                }
                data = null;
            }
        }
    }
</script>

<style scoped>

</style>