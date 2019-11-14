<template>
    <div class="popup">
        <!-- <button class="btn btn-primary" @click.stop="openPopup"> Details>> </button> -->
        <b-button v-b-modal.modal-scrollable>Details>></b-button>

        <b-modal id="modal-scrollable" scrollable title="Scrollable Content">
            <p class="my-4" v-for="i in 20" :key="i">
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
            in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
            </p>
        </b-modal>
    </div>
</template>

<script src="./popup.js"></script>

<style lang="scss" scoped>
@import '../../theme/users.scss';
</style>