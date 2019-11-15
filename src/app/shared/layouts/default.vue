<template>
  <div>
        <header class="main-header">
            <ProfileBar />
            <NavBar />
            <div class="container-fluid main-container-fluid mb-2">
            </div>
        </header>
        <div id="right-panel" class="right-panel rounded pt-2 pb-2 pr-4 pl-4 shadow-sm">
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
    pagetitle: 'Dashboard',
  }),
};
</script>

<style lang="scss" scoped>
  #right-panel{
    margin: 113px auto 0 auto;
    background: #f7f7f7;
    width: 100%;
    flex: 1;
  }
</style>