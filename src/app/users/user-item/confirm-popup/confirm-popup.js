import { EventBus } from '@/app/shared/services/event-bus.js';

export default {
    name: "popup",
    data() {
        return {
            templateArgs: {
                dataText: '',
                confirmBtnText: '',
                cancelBtnText: '',
                headerTitle: ''
            }
        }
    },
    props: [
        'dataText',
        'confirmBtnText',
        'cancelBtnText',
        'headerTitle'
    ],
    methods: {
        confirmAction(e) {
            EventBus.$emit('confirmed-action', e);
        }
    }
}