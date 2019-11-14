<template>
  <div >
   <div class="app-loader" v-if="isLoading">
   <img src="@/assets/andalusia-logo.gif" class="app-img-loader" />
   </div>
   
  </div>
</template>

<script>
export default {
  name: "app-loader",
  
   props: ['isLoading']

};
</script>


<style lang="scss" scopped>
@import './app-loader.scss';
</style>



