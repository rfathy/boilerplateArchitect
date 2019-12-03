import { EventBus } from '@/app/shared/services/event-bus.js';

export default {
    name: "popup",
   
    props: [
        'confirmdata'
    ],
    methods: {
        confirmAction(e) {
            EventBus.$emit('confirmed-action', e);
        }
    },
    created: function () {
        console.log(this.confirmdata) //prints out an empty string
    },
}