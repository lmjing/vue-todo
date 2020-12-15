<template>
        <v-dialog
                v-model="showDialog"
                max-width="350"
        >
            <v-card>
                <v-card-title class="headline">
                    <slot name="header"/>
                </v-card-title>
                <v-card-text>
                    <slot name="content"/>
                </v-card-text>
                <v-card-actions>
                    <v-spacer/>
                    <v-btn
                            color="gray darken-1"
                            text
                            @click="$emit('close')"
                    >
                        닫기
                    </v-btn>
                    <v-btn
                            color="teal darken-1"
                            text
                            @click="$emit('confirm')"
                    >
                        확인
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
</template>

<script>
    export default {
        name: "Modal",
        props: [
            "showDialog"
        ]
    }
</script>

<style scoped>

</style>