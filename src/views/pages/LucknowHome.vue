<template>
    <section class="home_section">
        <div class="home-container">
            <HomeHeader/>
            <LucknowBanner/>
            <LucknowAllItems/>
        </div>
    </section>
</template>
<script>
import HomeHeader from '@/components/home-pages/HomeHeader.vue';
import LucknowBanner from '@/components/home-pages/LucknowBanner.vue';
import LucknowAllItems from '@/components/home-pages/LucknowAllItems.vue';
export default {
    name: 'home-page',
    components: {HomeHeader, LucknowBanner, LucknowAllItems}
}
</script>