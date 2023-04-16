<template>
    <div class="all-menu-container">
        <div class="menu_wrapper">
            <div class="menu-items" v-for="menu in menus" :key="menu.id">
                <div class="menu-content">
                    <h4>{{ menu.name }}</h4>
                    <span>${{ menu.price }}</span>
                </div>
                <div class="menu-details">
                    <p>{{ menu.title }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'all-menu',
    data() {
        return {
            menus: this.$store.state.menu
        }
    }
}
</script>