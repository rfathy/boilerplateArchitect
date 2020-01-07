import $ from 'jquery'
export default {
  name: "user-list",
  data(){
    return{
      testdata: 'test data',
      text: 'init text'
    }
  },
  beforeCreate(){
    alert("beforeCreated: " + this.testdata);
  },
  created() {  
    alert("created: " + this.testdata);
  },
  beforeMount(){
    alert("beforeMount");
  },
  mounted() {
    alert("mounted");
  },
  beforeUpdate(){
    alert("beforeUpdate");
  },
  updated(){
    alert("updated");
  },
  beforeDestroy(){
    alert("beforeDestroy");
  },
  destroyed(){
    alert("destroyed");
  },
  methods: {
    updateText: function(){
      this.text = 'updated text'
    }
  }
};