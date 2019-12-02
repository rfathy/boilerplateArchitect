import { EventBus } from '@/app/shared/services/event-bus.js';

export default {
    name: "popup",
    data() {
        return {
            templateArgs: {
                dataText: '',
                confirmBtnText: '',
                cancelBtnText: '',
                headerTitle: '',
                triggerTag:''
            }
        }
    },
    props: [
        'dataText',
        'confirmBtnText',
        'cancelBtnText',
        'headerTitle',
        'triggerTag'
    ],
    methods: {
        confirmAction(e) {
            EventBus.$emit('confirmed-action', e);
        }
    }
}