<template>
    <main class="main-page_layout">

        <div class="main_page_wrapper responsive">
            <img src="../../assets/images/grapes.svg" alt="" class="grapes">
            <font-awesome-icon :icon="['fas', 'bars']" class="barItem" @click="navActive = !navActive" />

            <div class="nav_container" :class="navActive ? 'active' : 'deactive'">
                <NavigationBar @close="close" />
            </div>

            <img src="../../assets/images/orange1.svg" alt="" class="main_orange">
            <router-view />
        </div>
    </main>
</template>
<script>
import NavigationBar from '../NavigationBar.vue';
export default {
    name: 'main-layout',
    components: { NavigationBar },
    data() {
        return {
            navActive: false
        }
    },
    methods: {
        close() {
            this.navActive = false
        }
    }
}
</script>