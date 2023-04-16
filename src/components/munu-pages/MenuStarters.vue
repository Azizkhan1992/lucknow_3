<template>
    <div class="menu-starters-container">
        <div class="starters_wrapper">
            <div class="menu-items" v-for="starter in starters" :key="starter.id">
                <div class="menu-content">
                    <h4>{{ starter.name }}</h4>
                    <span>${{ starter.price }}</span>
                </div>
                <div class="menu-details">
                    <p>{{ starter.title }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'menu-starters',
    data(){
        return{
            menus: this.$store.state.menu,
            starters: null
        }
    },
    mounted(){
        this.getStarters()
    },
    methods:{
        getStarters(){
            this.starters = this.menus.filter(e => e.type === 2)
        }
    }
}
</script>