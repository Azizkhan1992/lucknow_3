<template>
    <section class="banner-section">
        <div class="banner-container">
            <div class="slider">
                <BannerSlider />
            </div>
            <div class="advertising">
                <BannerAdvertising />
            </div>
        </div>
    </section>
</template>
<script>
import BannerAdvertising from './BannerAdvertising.vue';
import BannerSlider from './BannerSlider.vue';
export default {
    name: 'banner',
    components: { BannerSlider, BannerAdvertising }
}
</script>