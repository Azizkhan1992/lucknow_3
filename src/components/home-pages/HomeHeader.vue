<template>
    <header class="header">
        <div class="header_wrapper">
            <div class="header_left">
                <div class="header_title">
                    <div class="header_title_details">
                        <h2>Welcome To
                            Lucknow</h2>
                        <img src="../../assets/images/drooling.png" alt="">
                    </div>
                </div>
                <div class="header_search">
                    <div class="search_details" :class="isSearch ? 'active' : ''" @mouseover="isSearch = true"
                        @mouseleave="isSearch = false">
                        <input type="text" placeholder="Search" :class="isSearch ? 'active' : ''">
                        <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
                    </div>
                </div>
            </div>
            <div class="header_right">
                <div class="header_cart">

                    <font-awesome-icon :icon="['fas', 'cart-shopping']" size="xs" />
                </div>
            </div>
        </div>
    </header>
</template>
<script>
export default {
    name: 'home-header',
    data() {
        return {
            isSearch: false
        }
    }
}
</script>