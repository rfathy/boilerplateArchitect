import json from '../../../../../mock-data/navigation.json'

export default {
  name: "nav-bar",
  component :{
      props: [ 
          'mega', 
          'isActivelink',
          'products',
          'navEl'
      ],
      template: ''
  },
  data: () => ({
      mega: false,
      navEl: false,
      isActivelink: false,
      modules: json
    }), 
    methods: {
      collapseothers(e) {  //collapse other mega menu when one is clicked
        let activeList = document.querySelectorAll('li.active-link');
        for (var i = 0; i < activeList.length; i++){ 
          if(!activeList[i].contains(event.target)) activeList[i].click()
        }
      }
    }
  };
