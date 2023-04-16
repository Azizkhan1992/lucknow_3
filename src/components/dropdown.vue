<template>
    <div class="dropdown-container">
        <div class="dropdown-visible" @click="changeDrop">
            <p>{{ activeVal.title }}</p>
            <font-awesome-icon :icon="['fas', 'chevron-down']" />
        </div>

        <div class="dropdown-hidden" :class="dropActive ? 'active' : 'deactive'">
            <div class="drop-items" v-for="(item, idx ) in dropItems" :key="idx" @click="selectItem(item)">
                <span>{{ item.title }}</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'dropdown',
    props: {
        dropItems: {
            type: Array,
            default: () => []
        },
        defaultVal: {
            type: Object,
            default: () => { }
        }
    },
    data() {
        return {
            dropActive: false,
            activeVal: {}
        }
    },
    mounted() {
        this.initialization()
    },
    methods: {
        initialization() {
            this.activeVal = this.defaultVal
        },
        changeDrop() {
            this.dropActive = !this.dropActive
        },
        selectItem(val) {
            this.activeVal = val
            this.dropActive = false
        }
    }
}
</script>