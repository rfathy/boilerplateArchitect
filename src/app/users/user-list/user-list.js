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
    // alert("beforeCreated: " + this.testdata);
  },
  created() {  
    // alert("created: " + this.testdata);
  },
  beforeMount(){
    // alert("beforeMount");
  },
  mounted() {
    // alert("mounted");
  },
  beforeUpdate(){
    // alert("beforeUpdate");
  },
  updated(){
    // alert("updated");
  },
  beforeDestroy(){
    // alert("beforeDestroy");
  },
  destroyed(){
    // alert("destroyed");
  },
  // does NOT have access to `this` component instance,
  // because it has not been created yet when this guard is called!
  beforeRouteEnter(to, from, next){
    const loggedIn = true;
    if(loggedIn) next();
    else next('*')
  },
  beforeRouteLeave(to, from, next){
    const confirm = window.confirm("data won't be saved");
    if(confirm) next();
    else next(false)
  },
  methods: {
    updateText(){
      this.text = 'updated text'
    }
  }
};