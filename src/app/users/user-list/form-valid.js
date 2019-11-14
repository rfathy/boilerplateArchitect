import { ValidationProvider, extend, ValidationObserver } from 'vee-validate';
import { required, email, min, max } from 'vee-validate/dist/rules';
import { onlyAr, onlyEn, onlyNumeric, allowDecimal } from '@/app/shared/directives/InputHelpers.js';
import { AppLoader } from "@/app/shared/components";

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
        AppLoader
    },
    methods:{
        async submit () {
            const isValid = await this.$refs.observer.validate()
            if (isValid) {
                alert('Data is valid');
                this.isLoading=true;
                return
            } else {
              alert('Data is not valid');
              return
            }
          }
    },
    data: () => ({
        value: '',
        email: '',
        password:'',
        min:'',
        max:'',
        compared:'',
        confirm:'',
        isLoading:false
    }),
    directives: {
        onlyEn,
        onlyAr,
        onlyNumeric,
        allowDecimal
    },
  };