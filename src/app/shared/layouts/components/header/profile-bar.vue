<template>
  <nav class="profile-bar pb-1 pt-1 navbar navbar-expand-md navbar-light fixed-top bg-light">
    <a class="navbar-brand" href="#">
      <img class="custom-logo" src="@/assets/img/logo.png" alt="logo" draggable="false">
    </a>
    <div class="collapse navbar-collapse" id="navbarCollapse">
        <form class="form-inline navbar-nav mr-auto col-5">
        <button class="border-bottom border-left border-right border-top btn mr-1 rounded-left" type="button">
            <img src="@/assets/svg/register-new.svg" alt="Register New Patient">
        </button>
        <button class="btn border-bottom border-left border-right border-top rounded-right" type="button">
            <img src="@/assets/svg/search.svg" alt="Search">
        </button>
        <input class="form-control w-75" type="search" placeholder="Search for patient (Name, Code, Phone Number)" aria-label="Search">
      </form>
      <div>
        <img class="user-img" src="@/assets/img/user.png" alt="user image" draggable="false">
        <span class="align-bottom d-inline-block ml-1">
          <strong class="d-flex">Moataz Mohamed</strong>
          <span class="d-flex">Physician</span>
        </span>
        <b-dropdown id="dropdown-right" right text="" variant="link" class="m-2">
          <b-dropdown-item href="javascript:;">Profile</b-dropdown-item>
          <b-dropdown-item href="javascript:;">Logout</b-dropdown-item>
        </b-dropdown>
      </div>
    </div>
  </nav>
    <!-- <router-link :to="'/users/user-list'">User List </router-link> | 
    <router-link :to="'/'"> Form Validate</router-link>  | 
    <router-link to="/users/user-item">User Item</router-link> -->  
</template>


<script src="./profile-bar.js"></script>
<style lang="scss" scoped>
  @import './theme/header.scss';    
</style>


