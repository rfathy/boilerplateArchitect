<template>
    <div class="popup">
        <b-button v-b-modal.modal-scrollable 
                  @click="$bvModal.show('modal-scoped')"
                  class="no-style m-0 p-0 bg-transparent border-0"
                  v-html="templateArgs.triggerTag"></b-button>

        <b-modal id="modal-scoped" scrollable>
            <template v-slot:modal-header="{ close }">
                <h5>{{ templateArgs.headerTitle }}</h5>
                <!-- close button action -->
                <b-button size="sm" variant="outline-danger" @click="close()">
                    x
                </b-button>
            </template>

            <template v-slot:default="{ hide }">
                <p>{{ templateArgs.dataText }}</p>
            </template>

            <template v-slot:modal-footer="{ ok, cancel }">
                <!-- Emulate built in modal footer ok and cancel button actions -->
                <b-button size="sm" variant="success" @click="confirmAction($event);ok()">
                    {{ templateArgs.confirmBtnText }}
                </b-button>
                <b-button size="sm" variant="danger" @click="cancel($event)">
                    {{ templateArgs.cancelBtnText }}
                </b-button>
            </template>
        </b-modal>
    </div>
</template>

<script src="./confirm-popup.js"></script>

<style lang="scss" scoped>
@import 'theme/confirm-popup.scss';
</style>