import i18n from '@/i18n'

export default {
  name: "profile-bar",
  data() {
    return {
      languages: [
        {
          language: 'en',
          title: this.$i18n.t('Common.En')
        },
        {
          language: 'ar',
          title: this.$i18n.t('Common.Ar')
        }
      ],
      selectedLang: ''
    }
  },
  methods: {
    changeLocale(locale) {
      i18n.locale = locale;
      localStorage.setItem('selectedLang', locale);
      location.reload(); // would completely destroy all stored states, including WebSocket connections
      // this.$router.reload();
    }
  },
  mounted () {
    if (
      localStorage.getItem('selectedLang') == 'en'
      || localStorage.getItem('selectedLang') == null
      || localStorage.getItem('selectedLang') == undefined
      ) {
      this.selectedLang = this.$i18n.t('Common.En');
      document.querySelector('html').setAttribute('lang', 'en');
      document.querySelector('html').setAttribute('dir', 'ltr');
      document.querySelector('body').classList.remove('rtl', 'k-rtl');
    } else  {
      this.selectedLang = this.$i18n.t('Common.Ar');
      document.querySelector('html').setAttribute('lang', 'ar');
      document.querySelector('html').setAttribute('dir', 'rtl');
      document.querySelector('body').classList.add('rtl', 'k-rtl');
    }
  }
};