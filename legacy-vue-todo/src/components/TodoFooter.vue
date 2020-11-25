<template>
    <div>
        <v-btn class="ma-2 clear-btn" tile color="indigo" dark @click="clearAll">
            clear All Todo
        </v-btn>
    </div>
</template>

<script>
    import { mapMutations } from 'vuex';

    export default {
        name: "TodoFooter",
        methods: {
            ...mapMutations({
                clearAll: 'clearAllTodo'
            }),
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