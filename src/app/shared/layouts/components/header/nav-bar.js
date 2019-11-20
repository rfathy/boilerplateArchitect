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
      },
      collapsenavbar: function(e){        
        if (e.target.classList.contains('rout-holder') || e.target.classList.contains('links-parent')){
          e.preventDefault;
        }
        else{
          console.log("sdf");
          this.navEl = false;
          this.mega = false;
          this.isActivelink =false
        }
      }
    }
  };
