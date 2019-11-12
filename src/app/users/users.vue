<template>
  <div>
    <app-header/>
    <router-link to="/users/user-list">User List</router-link>  | 
    <router-link to="/users/user-item">User Item</router-link>
    <router-view/>
  </div>
</template>

<script>
import { AppHeader } from "../shared/components";

export default {
  name: "app-users",
  components: {
    AppHeader
  }
};
</script>

<style lang="scss" scoped>
</style>


