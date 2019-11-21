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
      selectedLang: localStorage.getItem('selectedLang')
    }
  },
  methods: {
    changeLocale(locale) {
      i18n.locale = locale;
      localStorage.setItem('selectedLang', locale);
      // localStorage.getItem('selectedLang', locale);
      location.reload()
    }
  }
};