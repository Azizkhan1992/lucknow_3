<template>
    <div class="menu-salads-container">
        <div class="salads-wrapper">
            <div class="menu-items" v-for="salad in salads" :key="salad.id">
                <div class="menu-content">
                    <h4>{{ salad.name }}</h4>
                    <span>${{ salad.price }}</span>
                </div>
                <div class="menu-details">
                    <p>{{ salad.title }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'menu-salads',
    data(){
        return{
            menus: this.$store.state.menu,
            salads: null
        }
    },
    mounted(){
        this.getSalads()
    },
    methods: {
        getSalads(){
            this.salads = this.menus.filter(e => e.type === 3)
        }
    }
}
</script>