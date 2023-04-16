<template>
    <section class="menu_page_section">
        <div class="menu_page_container">
            <div class="menu_page_header">
                <h2>Check our tasty
                    <span>Menu</span>
                </h2>
            </div>

            <div class="menu_page_wrapper">
                <div class="items-header">
                    <div class="type-items" :class="item.id === activeId ? 'active' : ''" v-for="item in types" :key="item.id" @click="selectMenu(item.id)">
                    <h3>{{ item.title }}</h3>
                    
                </div>
                </div>

                <div class="type-items-wrapper">
                        <AllMenuItems v-if="activeId === 1"/>
                        <MenuStarters v-else-if="activeId === 2"/>
                        <MenuSalads v-else-if="activeId === 3"/>
                        <MenuSpecials v-else/>
                    </div>

                
            </div>
        </div>
    </section>
</template>
<script>
import AllMenuItems from './AllMenuItems.vue'
import MenuStarters from './MenuStarters.vue';
import MenuSalads from './MenuSalads.vue';
import MenuSpecials from './MenuSpecials.vue';
export default {
    name: 'menu-section',
    components: {AllMenuItems, MenuStarters, MenuSalads, MenuSpecials},
    data(){
        return{
            types: [
                {
                    id: 1,
                    title: 'Show All'
                },
                {
                    id: 2,
                    title: 'Starters'
                },
                {
                    id: 3,
                    title: 'Salads'
                },
                {
                    id: 4,
                    title: 'Speciality'
                }
            ],
            activeId: 1
        }
    },
    methods: {
        selectMenu(id){
            this.activeId = id
        }
    }
}
</script>