<template>
  <div>
        <header class="main-header">
            <ProfileBar />
            <NavBar />
            <div class="container-fluid mb-2">
            </div>
        </header>
        <div id="right-panel" class="right-panel rounded p-2">
            <div v-bind:pagetitle="pagetitle"></div>
            <div class="content">
            <slot />          
            </div>
        </div>
    
    
  </div>
</template>

<script>
import ProfileBar from '@/app/shared/layouts/components/header/profile-bar.vue';
import NavBar from '@/app/shared/layouts/components/header/nav-bar.vue';

export default {
  watch: {
    '$route' (to) {
      this.pagetitle = to.meta.title;
    }
  },
  components: {
    ProfileBar,
    NavBar
  },
  data: () => ({
    pagetitle: '',
  }),
};
</script>

<style lang="scss" scoped>
  #right-panel{
    margin: 113px auto 0 auto;
    background: #d5d5d5;
    box-shadow: 0 4px 3px 2px #adadad;
    width: 99.5%;
  }
</style>