<template>
    <div>
        <div class="input-box shadow">
            <input aria-label="새로운 TODO" type="text" v-model="newTodoItem" @keyup.enter="addTodo">
            <v-icon class="addContainer" @click="addTodo">mdi-plus</v-icon>
        </div>
        <modal v-if="showModal">
            <div class="modal-title" slot="header">
                경고
                <v-icon class="modal-close" @click="showModal = false">mdi-close</v-icon>
            </div>
            <div class="modal-content" slot="body">해야할 일을 입력하세요!</div>
            div
        </modal>
    </div>
</template>

<script>
    import Modal from './common/Modal.vue';

    export default {
        name: "TodoInput",
        data: () => ({
            newTodoItem: '',
            showModal: false
        }),
        components: {
            Modal,
        },
        methods: {
            addTodo() {
                if (this.newTodoItem !== '') {
                    this.$store.commit('addOneItem', this.newTodoItem);
                    this.clearInput();
                } else {
                    this.showModal = true;
                }
            },
            clearInput() {
                this.newTodoItem = '';
            }
        }
    }
</script>

<style scoped>
    .input-box {
        position: relative;
        display: inline-block;
        width: 100%;
        height: 40px;
        margin: 10px 0;
    }
    .input-box input {
        height: 100%;
        width: calc(100% - 40px);
        border: 1px solid #eee;
        border-radius: 5px 0 0 5px;
        padding: 0 10px;
    }
    .shadow {
        border: 5px;
        box-sizing: border-box;
        box-shadow: 2px 2px 4px #eee;
    }
    .addContainer {
        background: linear-gradient(135deg, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);
        width: 40px;
        height: 100%;
        position: absolute !important;
        color: white !important;
        right: 0;
        border-radius: 0 5px 5px 0;
    }
    /*modal*/
    .modal-title {
        text-align: center;
        font-weight: 600;
        color: #390082;
    }
    .modal-content {
        font-size: 14px;
        text-align: center;
    }
    .modal-close {
        float: right;
        transform: translateY(-5px);
        color: #390082 !important;
    }
</style>