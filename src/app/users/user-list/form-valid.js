import { ValidationProvider, extend, ValidationObserver } from 'vee-validate';
import { required, email, min, max } from 'vee-validate/dist/rules';
import { setInteractionMode } from 'vee-validate';
setInteractionMode('passive');
import { onlyAr, onlyEn, onlyNumeric, allowDecimal } from '@/app/shared/directives/InputHelpers.js';
import Loader from '@/app/shared/layouts/components/loader/loader';

localStorage.getItem('selectedLang') == 'en' ? import('../theme/users.scss') : import('../theme/users-rtl.scss');

import Child from '@/app/shared/layouts/components/child'
import ChildTwo from '@/app/shared/layouts/components/child2'


//Module localization 
import localeEn from '../locales/en'
import localeAr from '../locales/ar'

//https://www.npmjs.com/package/vue-axios
//https://vuejs.org/v2/cookbook/using-axios-to-consume-apis.html
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios' 
Vue.use(VueAxios, axios)

extend('required', {
    ...required,
    message: 'This field is required'
});
extend('secret', {
    validate: value => value === 'example',
    message: 'This is not the magic word'
});
extend('email', {
    ...email,
    message: 'The mailbox format is incorrect'
});
extend('min', {
    ...min,
    message: 'min of 5'
});
extend('max', {
    ...max,
    message: 'max of 5'
});
extend('password', {
    validate: (value, { other }) => value === other,
    message: 'The password confirmation does not match.',
    params: [{ name: 'other', isTarget: true }]
});

export default {
    name: "app-form-valid",
    components: {
        ValidationProvider,
        ValidationObserver,
        Loader,
        Child,
        ChildTwo
    },
    mounted(){
        axios
            .get('https://api.coindesk.com/v1/bpi/currentprice.json')
            .then(response => (this.info = response.data.bpi))
            .catch(error => console.log(error));
        axios
            .get('https://api.coindesk.com/v1/bpi/currentprice.json')
            .then(response => (this.AllInfo = response))
            .catch(error => console.log(error))
    },
    methods: {
        async submit() {
            const isValid = await this.$refs.observer.validate();
            if (isValid) {
                alert('Data is valid');
                return
            } else {
                alert('Data is not valid');
                return
            }

        },
        formSubmitted(){
            console.log("form submited")
        }
    },
    data: () => ({
        isLoading: false,
        value: '',
        email: '',
        password: '',
        min: '',
        max: '',
        compared: '',
        confirm: '',
        binding:'',
        parentData:'',
        name:'',
        website: 'www.google.com',
        test: false,
        htmlTag: '<a data-v-97b90552="" href="javascript:;" class="pr-2 start-nav pl-1">rendered link</a>',
        firstName: 'Randa',
        lastName: 'Fathy',
        items: ['car', 'bike', 'dog'],
        info: null,
        AllInfo: null
    }),
    directives: {
        onlyEn,
        onlyAr,
        onlyNumeric,
        allowDecimal
    },
    i18n: {
        messages: {
            en: {
                ...localeEn
            },
            ar: {
                ...localeAr
            }
        },
    }
};