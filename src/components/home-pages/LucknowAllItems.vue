<template>
    <section class="allItems-articles_section">
        <div class="allItems-container">
            <div class="items">
                <LucknowDishesFilter />
            </div>

            <div class="articles">
                <LucknowArticles />
            </div>
        </div>
    </section>
</template>
<script>
import LucknowDishesFilter from './LucknowDishesFilter.vue';
import LucknowArticles from './LucknowArticles.vue';
export default {
    name: 'lucknow-items',
    components: { LucknowDishesFilter, LucknowArticles }
}
</script>