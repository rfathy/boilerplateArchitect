import { EventBus } from '@/app/shared/services/event-bus.js';

export default {
    name: "popup",
   
    props: [
        'dataText',
        'confirmBtnText',
        'cancelBtnText',
        'headertitle'
    ],
    methods: {
        confirmAction(e) {
            EventBus.$emit('confirmed-action', e);
        }
    }
}