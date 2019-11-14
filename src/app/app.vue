<template>
  <div class="container-fluid">
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>

<script>
const default_layout = "default";
export default {
  name: "app",
  watch: {
    '$route' (to) {
      document.title = to.meta.title;
      this.pagetitle = to.meta.title;
    }
  },
  computed:{
    layout(){
      return (this.$route.meta.layout || default_layout) + '-layout';
    }
  },
};
</script>

<style>
</style>
