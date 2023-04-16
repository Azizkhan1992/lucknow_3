<template>
    <div class="lucknow-dishes_section">
        <div class="dishes-header">
            <h3>All Items</h3>
            <img src="../../assets/images/filter.svg" alt="" @click="dishes = !dishes">
        </div>

        <div class="lucknow-items_wrapper">
            <LucknowDishes v-if="dishes" />
            <LucknowFilter v-else />
        </div>
    </div>
</template>
<script>
import LucknowDishes from './LucknowDishes.vue';
import LucknowFilter from './LucknowFilter.vue';
export default {
    name: 'lucknow-dishes',
    components: { LucknowDishes, LucknowFilter },
    data() {
        return {
            dishes: true
        }
    }
}
</script>