<template>
  <div class="app-header">
    <h2 class="header-title">App Header</h2>
    <router-link :to="'/users/user-list'">User List </router-link> | 
    <router-link :to="'/'"> Form Validate</router-link>  | 
    <router-link to="/users/user-item">User Item</router-link>
  </div>
</template>

<script>
export default {
  name: "app-header"
};
</script>

<style lang="scss" scoped>
.app-header {
  display: flex;
  height: 56px;
  box-shadow: 0 0 10px 5px #efefef;
  align-items: center;
  border-bottom: 1px solid #efefef;
}

.header-title {
  margin: 0 16px;
  font-weight: 500;
}
</style>


