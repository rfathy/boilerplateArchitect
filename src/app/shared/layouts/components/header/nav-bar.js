import json from '../../../../../mock-data/navigation.json'

export default {
  name: "nav-bar",
  component :{
      props: [ 
          'mega', 
          'isActivelink',
          'level3', 
          'products',
          'navEl'
      ],
      template: ''
  },
  data: () => ({
      mega: false,
      navEl: false,
      isActivelink: false,
      level3: '',
      modules: json
    }), 
    methods: {
      // Reset all variables upon leaving mega menu area
      levelReset: function() {
        this.level3 = ''
      }
    }
  };
