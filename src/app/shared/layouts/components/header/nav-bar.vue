<template>
    <div class="breadcrumbs fixed-top m-auto rounded-lg">
        <a href="javascript:;" class="pr-2 start-nav" @click="navEl = !navEl">
            <img class="ml-2 mt-1" src="@/assets/svg/dots.svg" alt="">
        </a>
        <transition name="slide-fade">
            <div class="container-fluid mega-menu rounded-lg mt-2 shadow-sm" v-show="navEl" :class="{ displaynavEl : navEl }">
                <ul id="site-navigation" class="list-inline mb-0 p-0 text-center">
                    <li class="list-inline-item pt-2 pb-2 pl-3 pr-3">
                        <a class="d-inline-block" href="javascript:;">
                            <img src="@/assets/nav/nav1.svg" alt=""> <span class="d-block c-blue font-weight-bold">Page name</span>
                        </a>
                    </li>
                    <li class="list-inline-item pt-2 pb-2 pl-3 pr-3"><a class="d-inline-block" href="javascript:;"><img src="@/assets/nav/nav2.svg" alt=""><span class="d-block c-blue font-weight-bold">Page name</span></a></li>
                    <li class="list-inline-item pt-2 pb-2 pl-3 pr-3" :class="{'active-link': isActivelink}">
                        <a href="javascript:;" class="d-inline-block" @click="mega = !mega;isActivelink = !isActivelink"><img src="@/assets/nav/nav3.svg" alt=""></a><span class="d-block c-blue font-weight-bold">Vue Testing</span>                    
                        <transition name="slide-fade">
                        <div class="container-fluid mega-menu rounded-lg" v-if="mega" :class="{ displayMega : mega }">
                            <div class="row justify-content-md-center" style="flex-wrap: nowrap">
                                <div class="col-md-2 rout-holder text-capitalize text-left pt-3 pl-4 pb-2" 
                                    v-for="m in modules" :key="m.id">
                                    <h6 class="font-weight-normal pl-1 ml-lg-n2">{{m.name}}</h6>
                                    <ul class="level-2">
                                        <li class="list-inline-item col mb-1"
                                            v-for="s in m.submodules" :key="s.id">
                                            <router-link :to="{ path: s.link }" class="text-white">{{s.name}}</router-link></li> 
                                    </ul>
                                </div>
                            </div>
                        </div>      
                        </transition>
                    </li>
                    <li class="list-inline-item pt-2 pb-2 pl-3 pr-3"><a href="javascript:;" class="d-inline-block"><img src="@/assets/nav/nav4.svg" alt=""><span class="d-block c-blue font-weight-bold">Page name</span></a></li>
                </ul>
            </div>
        </transition>
        <div class="bread-links d-inline-block text-capitalize mr-auto">
            <ul class="m-0 d-inline-block">
                <li class="opaque-5 d-inline-block"><router-link :to="'/'"><img class="ml-1 mr-lg-n1 mt-1" src="@/assets/svg/home.svg" alt=""></router-link></li>
                <li class="opaque-5 d-inline-block" v-for="route in $route.matched" :key="route.name">
                    <router-link :to="{name: route.name}">
                    {{ route.meta.title }}
                    </router-link>
                </li>
            </ul>
            
            <span class="d-inline-block"></span>
        </div>
        <b-dropdown id="patient-classification" right text="out Patient" variant="link" class="text-capitalize text-white border border-light rounded-lg">
          <b-dropdown-item href="javascript:;">inpatient</b-dropdown-item>
          <b-dropdown-item href="javascript:;">ER</b-dropdown-item>
        </b-dropdown>       
    </div>
</template>

<script src="./nav-bar.js"></script>
<style lang="scss" scoped>@import "./theme/header.scss"</style>
