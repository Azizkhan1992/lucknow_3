<template>
    <div class="banner-slider">
        <div class="slider_wrapper">
            <swiper :slides-per-view="6" :space-between="15" :autoplay="true" :loop="true">
                <swiper-slide v-for="slide in delices" :key="slide.id" class="test">
                    <img :src="require('../../assets/images/swiper/' + slide.img)" class="img-fluid" blank="true">
                    <p>{{ slide.title }}</p>
                </swiper-slide>
            </swiper>
        </div>

        <div class="mobile-slider_wrapper">
            <swiper :slides-per-view="2" :space-between="15" :autoplay="true" :loop="true">
                <swiper-slide v-for="slide in delices" :key="slide.id" class="test">
                    <img :src="require('../../assets/images/swiper/' + slide.img)" class="img-fluid" blank="true">
                    <p>{{ slide.title }}</p>
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>
<script>
import { Navigation, Pagination, Autoplay } from 'swiper'

import { SwiperCore, Swiper, SwiperSlide } from 'swiper-vue2'
import 'swiper/swiper-bundle.css'

SwiperCore.use([Navigation, Pagination, Autoplay])
export default {
    name: 'banner-slider',
    components: { Swiper, SwiperSlide },
    data() {
        return {
            delices: this.$store.state.delices
        }
    },
}
</script>