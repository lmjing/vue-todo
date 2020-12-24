<template>
    <div>
        <div class="pa-5">
            <v-btn block outlined
                   color="teal"
                   @click.stop="showModal = true"
            >
                Clear All
            </v-btn>
        </div>
        <modal
                @close="closeModal"
                @confirm="clearAll"
                v-bind:showDialog="showModal"
        >
            <h3 slot="header">전체삭제</h3>
            <div slot="content">전체 내용이 삭제 됩니다. 정말 삭제하시겠습니까?</div>
        </modal>
    </div>
</template>

<script>
    import Modal from './common/Modal';

    export default {
        name: "TodoFooter",
        components: {
            Modal
        },
        data() {
          return {
              showModal: false
          }
        },
        methods: {
            clearAll () {
                this.closeModal();
                this.$store.commit('clearAllTodo');
            },
            closeModal () {
                this.showModal = false;
            }
        },
    }
</script>

<style scoped>

</style>