

export default {
    name: "nav-bar",
    component :{
        props: [ 
            'mega', 
            'level3', 
            'products',
            'navEl'
        ],
        template: ''
    },
    data: () => ({
        mega: false,
        navEl: false,
        level3: '',
        products: [
          { product1: [ 
              { url: '#', title: 'Product 1',
                subproducts: [ 
                  { sub_url: '#', sub_title: 'Product 1A'},
                  { sub_url: '#', sub_title: 'Product 1B'},
                  { sub_url: '#', sub_title: 'Product 1C'},
                  { sub_url: '#', sub_title: 'Product 1D'}
                ] 
              } 
            ] 
          },
          { product2: [ 
              { url: '#', title: 'Product 2',
                subproducts: [ 
                  { sub_url: '#', sub_title: 'Product 2A'},
                  { sub_url: '#', sub_title: 'Product 2B'},
                  { sub_url: '#', sub_title: 'Product 3C'},
                  { sub_url: '#', sub_title: 'Product 4D'}
                ] 
              }
            ] 
          }, 
          { product3: [ 
              { url: '#', title: 'Product 3',
                subcategories: [ 
                  { sub_url: '#', sub_title: 'Product 3A'},
                  { sub_url: '#', sub_title: 'Product 3B'},
                  { sub_url: '#', sub_title: 'Product 3C'},
                  { sub_url: '#', sub_title: 'Product 3D'}
                ] 
              } 
            ] 
          },
          { product4: [ 
            { url: '#', title: 'Product 4',
              subcategories: [ 
                  { sub_url: '#', sub_title: 'Product 4A'},
                  { sub_url: '#', sub_title: 'Product 4B'},
                  { sub_url: '#', sub_title: 'Product 4C'},
                  { sub_url: '#', sub_title: 'Product 5D'}
                ] 
              } 
            ]
          }
        ]
      }), 
      methods: {
        // Reset all variables upon leaving mega menu area
        levelReset: function() {
          this.level3 = ''
        }
      }
  };