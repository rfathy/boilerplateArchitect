<template>
    <div class="breadcrumbs fixed-top m-auto rounded-lg">
        <a href="javascript:;" class="pr-2 start-nav" @click="navEl = !navEl">
            <img class="ml-2 mt-1" src="@/assets/svg/dots.svg" alt="">
        </a>
        <div class="container-fluid mega-menu rounded-lg mt-2" v-if="navEl" :class="{ displaynavEl : navEl }">
            <ul id="site-navigation" class="list-inline mb-0 p-0 text-center">
                <li class="list-inline-item pt-2 pb-2 pl-3 pr-3">
                    <a class="d-inline-block" href="javascript:;">
                        <img src="@/assets/nav/nav1.svg" alt=""> <span class="d-block c-blue font-weight-bold">Page name</span>
                    </a>
                </li>
                <li class="list-inline-item pt-2 pb-2 pl-3 pr-3"><a class="d-inline-block" href="javascript:;"><img src="@/assets/nav/nav2.svg" alt=""><span class="d-block c-blue font-weight-bold">Page name</span></a></li>
                <li class="list-inline-item pt-2 pb-2 pl-3 pr-3">
                    <a href="javascript:;" class="d-inline-block" @click="mega = !mega"><img src="@/assets/nav/nav3.svg" alt=""></a><span class="d-block c-blue font-weight-bold">Vue Testing</span>                    
                    <div class="container-fluid mega-menu rounded-lg" v-if="mega" :class="{ displayMega : mega }">
                        <div class="row justify-content-md-center" style="flex-wrap: nowrap">
                            <div class="col-md-2 rout-holder" style="">
                                <ul class="level-2">
                                    <li class="list-inline-item col"><router-link :to="'/users/user-list'">User List </router-link></li>
                                    <li class="list-inline-item col"><router-link :to="'/'"> Form Validate</router-link></li>
                                    <li class="list-inline-item col"><router-link to="/users/user-item">User Item</router-link></li>
                                    <li class="list-inline-item col"><a href="javascript:;">Product 4</a></li>
                                </ul>
                            </div>
                            <div class="col-md-2 rout-holder" style="">
                                <ul class="level-2">
                                    <li class="list-inline-item col"><a href="javascript:;">Product 1</a></li>
                                    <li class="list-inline-item col"><a href="javascript:;">Product 2</a></li>
                                    <li class="list-inline-item col"><a href="javascript:;">Product 3</a></li>
                                    <li class="list-inline-item col"><a href="javascript:;">Product 4</a></li>
                                </ul>
                            </div>
                            <div class="col-md-2 rout-holder" style="">
                                <ul class="level-2">
                                    <li class="list-inline-item col"><a href="javascript:;">Product 1</a></li>
                                    <li class="list-inline-item col"><a href="javascript:;">Product 2</a></li>
                                    <li class="list-inline-item col"><a href="javascript:;">Product 3</a></li>
                                    <li class="list-inline-item col"><a href="javascript:;">Product 4</a></li>
                                </ul>
                            </div>
                            <div class="col-md-2 rout-holder" style="">
                                <ul class="level-2">
                                    <li class="list-inline-item col"><a href="javascript:;">Product 1</a></li>
                                    <li class="list-inline-item col"><a href="javascript:;">Product 2</a></li>
                                    <li class="list-inline-item col"><a href="javascript:;">Product 3</a></li>
                                    <li class="list-inline-item col"><a href="javascript:;">Product 4</a></li>
                                    <li class="list-inline-item col"><a href="javascript:;">Product 1</a></li>
                                    <li class="list-inline-item col"><a href="javascript:;">Product 2</a></li>
                                    <li class="list-inline-item col"><a href="javascript:;">Product 3</a></li>
                                    <li class="list-inline-item col"><a href="javascript:;">Product 4</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>   
                </li>
                <li class="list-inline-item pt-2 pb-2 pl-3 pr-3"><a href="javascript:;" class="d-inline-block"><img src="@/assets/nav/nav4.svg" alt=""><span class="d-block c-blue font-weight-bold">Page name</span></a></li>
            </ul>
        </div>
        <div class="bread-links d-inline-block text-capitalize">
            <ul class="opaque-5 m-0 d-inline-block">
                <li class="d-inline-block"><router-link :to="'/'"><img class="ml-1 mr-lg-n1 mt-1" src="@/assets/svg/home.svg" alt=""></router-link></li>
                <li class="d-inline-block"><a href="javascript:;">Page Name</a></li>   
            </ul>
            <span class="d-inline-block">current page</span>
        </div>       
    </div>
</template>

<script src="./nav-bar.js"></script>
<style lang="scss" scoped>@import "./theme/header.scss"</style>
