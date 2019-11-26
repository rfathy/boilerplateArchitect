<template>
    <div>
        <div class="overlay" v-if="navEl" @click="collapseothers($event);navEl = false;mega = false;isActivelink =false"></div>
        <div class="hide-scroll"></div>
        <div class="breadcrumbs fixed-top m-auto rounded-lg row">
            <a href="javascript:;" class="pr-2 start-nav pl-1" @click="collapseothers($event);navEl = !navEl">
                <img class="" src="@/assets/svg/dots.svg" alt="">
            </a>
            <transition name="slide-fade">
                <div class="container-fluid mega-menu rounded-xl mt-2 shadow-sm" v-show="navEl" :class="{ displaynavEl : navEl }">
                    <ul id="site-navigation" class="list-inline mb-0 p-0">
                        <li v-for="m in modules" 
                            :key="m.id" 
                            class="list-inline-item text-center position-relative" 
                            :class="{'active-link': m.isActivelink && isActivelink}"
                            @click="collapseothers($event);
                                    m.isExpand = !m.isExpand;
                                    m.isActivelink = !m.isActivelink;
                                    isActivelink = true;
                                    mega = true">
                            <a href="javascript:;" class="d-inline-block mt-2 mb-2 ml-3 mr-3" :class="{'expanded-mega': m.isActivelink}">
                                <img src="@/assets/nav/nav3.svg" alt="">
                                <span class="d-block c-blue">{{m.name}}</span>
                            </a>                           
                            <div class="container-fluid">
                                <div class="mega-menu-holder mega-menu rounded-xl row"
                                    v-show="m.isExpand && mega" :class="{ displayMega : m.isExpand }">
                                    <div class="col-md-auto d-inline-block align-top rout-holder text-capitalize text-left pt-3 pl-4 pb-2" 
                                        v-for="n in m.maincat" :key="n.id">
                                        <h6 class="font-weight-normal pl-1 ml-lg-n2 links-parent">{{n.name}}</h6>
                                        <ul class="level-2">
                                            <li class="list-inline-item col mb-1"
                                                v-for="s in n.submodules" :key="s.id"
                                                @click="navEl = !navEl">
                                                <router-link :to="{ path: s.link }" class="text-white">{{s.name}}</router-link></li> 
                                        </ul>
                                    </div>
                                </div> 
                            </div>                                
                        </li>
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
    </div>
</template>

<script src="./nav-bar.js"></script>
<style lang="scss" scoped>@import "./theme/header.scss"</style>
