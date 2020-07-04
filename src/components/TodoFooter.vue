<template>
    <div>
        <v-btn class="ma-2 clear-btn" tile color="indigo" dark @click="clearAll">
            clear All Todo
        </v-btn>
    </div>
</template>

<script>
    export default {
        name: "TodoFooter",
        methods: {
            clearAll() {
                this.$store.commit('clearAllTodo');
            }
        }
    }
</script>

<style scoped>
    .clear-btn {
        left: 50%;
        transform: translateX(-50%);
        margin-top: 50px;
    }
</style>