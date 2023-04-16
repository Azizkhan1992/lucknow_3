<template>
    <div class="menu-specials-container">
        <div class="specials-wrapper">
            <div class="menu-items" v-for="special in specials" :key="special.id">
                <div class="menu-content">
                    <h4>{{ special.name }}</h4>
                    <span>${{ special.price }}</span>
                </div>
                <div class="menu-details">
                    <p>{{ special.title }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'menu-specials',
    data(){
        return{
            menus: this.$store.state.menu,
            specials: null
        }
    },
    mounted(){
        this.getSpecials()
    },
    methods: {
        getSpecials(){
            this.specials = this.menus.filter(e => e.type === 4)
        }
    }
}
</script>