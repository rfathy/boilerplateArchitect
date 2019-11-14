<template>
  <div>
        <header class="main-header">
            <ProfileBar />
            <NavBar />
            <div class="container-fluid mb-2">
            </div>
        </header>
        <div id="right-panel" class="right-panel">
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
    margin-top: 110px;
  }
</style>