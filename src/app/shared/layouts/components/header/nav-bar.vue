<template>
    <div class="breadcrumbs fixed-top m-auto rounded">
        <div class="">
            <a href="#" class="col col-md-1" @click="navEl = !navEl">ooo</a>
            <div class="container-fluid mega-menu rounded mt-2" v-if="navEl" :class="{ displaynavEl : navEl }">
                <ul id="site-navigation" class="list-inline mb-0 pb-1 pt-1 text-center">
                    <li class="list-inline-item"><a href="#">Home</a></li>
                    <li class="list-inline-item"><a href="#">About</a></li>
                    <li class="list-inline-item">
                        <a href="#" class="products" @click="mega = !mega">Products</a>
                        
                        <div class="container-fluid mega-menu" v-if="mega" :class="{ displayMega : mega }">
                            <div class="row" style="flex-wrap: nowrap">
                                <div class="col-md-12" style="">
                                    <ul class="level-2 list-inline row">
                                        <li class="list-inline-item col" 
                                            @click="
                                                level3 = 'product1';
                                            "><a href="#">Product 1</a>
                                            <div v-if="level3 === 'product1'">
                                            <div class="row">
                                                <div class="col-12">
                                                <ul class="level3 list-unstyled">
                                                    <li class="title-item">
                                                    <a href="#">
                                                        Product 1 Products
                                                    </a>
                                                    </li>
                                                    <li class="item">
                                                    <a href="#">
                                                        Product A
                                                    </a>
                                                    </li>
                                                    <li class="item">
                                                    <a href="#">
                                                        Product B
                                                    </a>
                                                    </li>
                                                </ul>
                                                </div>
                                            </div>
                                            </div>
                                        </li>
                                        <li class="list-inline-item col"><a href="#">Product 2</a></li>
                                        <li class="list-inline-item col"><a href="#">Product 3</a></li>
                                        <li class="list-inline-item col"><a href="#">Product 4</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>   
                    </li>
                    <li class="list-inline-item"><a href="#">Contact Us</a></li>
                    <li class="list-inline-item"><a href="#">Resources</a></li>
                </ul>
            </div>
        </div>        
    </div>
</template>

<script src="./nav-bar.js"></script>
<style lang="scss" scoped>
  @import './theme/header.scss';    
</style>