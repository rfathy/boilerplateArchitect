<template>
  <div>
    <header class="main-header">
        <ProfileBar />
        <NavBar />
        <div class="container-fluid main-container-fluid mb-2">
        </div>
    </header>
    <div id="right-panel" class="right-panel rounded-lg">
        <div class="content">
        <slot />          
        </div>
        <div class="clear"></div>
    </div>
  </div>
</template>

<script>
import ProfileBar from '@/app/shared/layouts/components/header/profile-bar.vue';
import NavBar from '@/app/shared/layouts/components/header/nav-bar.vue';


export default {
  name: 'default',
  data() {
    return {
    navEl: false
    }
  },
  components: {
    ProfileBar,
    NavBar
  },
};
</script>

<style lang="scss" scoped>
  #right-panel{
    margin: 127px auto 0 auto;
    width: 100%;
    flex: 1;
  }
</style>