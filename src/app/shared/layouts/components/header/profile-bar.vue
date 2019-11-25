<template>
  <nav class="profile-bar p-0 navbar navbar-expand-md navbar-light fixed-top bg-light shadow-sm">
    <a class="navbar-brand" href="#">
      <img class="custom-logo" src="@/assets/img/logo.png" alt="logo" draggable="false">
    </a>
    <div class="collapse navbar-collapse" id="navbarCollapse">
        <form class="form-inline navbar-nav mr-auto col-5 search-patient">
          <input class="bg-grey-lt form-control w-75 cust-input rounded-lg c-blue" 
                 type="search" 
                 :placeholder="$t('Common.SearchPatient')" 
                 aria-label="Search">                 
          <button class="bg-grey-lt btn cust-btn mr-1 p-0 rounded-lg" type="button">
              <img src="@/assets/svg/search.svg" alt="Search">
          </button>
      </form>
      <div>
        <b-dropdown id="language-dropdown-right" right :text="selectedLang" variant="link" class="mr-2">
          <b-dropdown-item href="javascript:;"
            v-for="lang in languages"
            :key="lang.title"
            @click="changeLocale(lang.language)">{{lang.title}}</b-dropdown-item>
        </b-dropdown>
        <img class="user-img" src="@/assets/img/user.png" alt="user image" draggable="false">
        <span class="align-middle d-inline-block ml-1 c-blue user-id">
          <label class="d-flex">Moataz Mohamed</label>
          <span class="d-flex opaque-5">Physician</span>
        </span>
        <b-dropdown id="profile-dropdown-right" right text="" variant="link" class="mr-2 mt-xl-n3 mt-1">
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


