<template>
    <div class="pa-5">
        <v-btn block outlined
               color="teal"
               @click="clearAll"
        >
            Clear All
        </v-btn>
    </div>
</template>

<script>
    export default {
        name: "TodoFooter",
        methods: {
            clearAll () {
                localStorage.clear();
            }
        }
    }
</script>

<style scoped>

</style>