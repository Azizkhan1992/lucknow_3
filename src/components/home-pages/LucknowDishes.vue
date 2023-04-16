<template>
    <div class="allDishes-container">
        <div class="dishes-wrapper">
            <div class="allItems" v-for="item in dishes" :key="item.id">

                <div class="fire-circle" v-if="item.good">
                    <img src="../../assets/images/flame.svg" alt="">
                </div>

                <div class="like-circle" v-if="item.better">
                    <img src="../../assets/images/like.svg" alt="">
                </div>

                <div class="star-circle" v-if="item.best">
                    <img src="../../assets/images/star.svg" alt="">
                </div>
                <div class="item-image_wrapper">
                    <img :src="require('../../assets/images/swiper/' + item.img)" alt="">
                </div>
                <div class="item_details">
                    <h4>{{ item.name }}</h4>

                    <p>{{ item.title }}</p>

                    <div class="details-title">
                        <span>${{ item.price }}</span>

                        <div class="item-circle">
                            <font-awesome-icon :icon="['fas', 'check']" v-if="item.ready" />
                            <font-awesome-icon :icon="['fas', 'plus']" v-else />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'dishes',
    data() {
        return {
            dishes: this.$store.state.dishes
        }
    }
}
</script>