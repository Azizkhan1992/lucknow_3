<template>
    <nav class="nav-section">
        <div class="navigation-container">
            <font-awesome-icon :icon="['fas', 'xmark']" class="close" @click="close" />
            <div class="nav-logo">
                <div class="logo-img_wrapper">
                    <img src="../assets/images/logo.png" alt="">
                </div>
                <div class="logo_details">
                    <p>Alka Yagik</p>
                </div>
            </div>

            <div class="navigation-wrapper">
                <router-link :to="`${menu.link}`" class="nav-items" v-for="menu in menus" :key="menu.id">
                    <div class="menu-img_wrapper">
                        <font-awesome-icon v-if="menu.id === 1" :icon="['fas', 'house']" />

                        <svg v-if="menu.id === 2" width="18" height="22" viewBox="0 0 18 22" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M17.5714 3.66655H15.4286V0.366531C15.4285 0.164039 15.2365 -9.16289e-05 14.9998 3.83786e-08C14.959 3.83786e-08 14.9184 0.00504174 14.8791 0.014896L0.307714 3.68159C0.299143 3.68159 0.292714 3.68892 0.284143 3.69149C0.262339 3.69905 0.241232 3.70812 0.221143 3.71862C0.195214 3.73049 0.170839 3.74465 0.148286 3.76079C0.131678 3.77399 0.116196 3.78819 0.102 3.80332C0.0831964 3.8228 0.0666965 3.84379 0.0527143 3.86602C0.0425893 3.88316 0.0339642 3.90095 0.0269999 3.91919C0.0170892 3.94499 0.0107143 3.97167 0.00814288 3.99875C0.00814288 4.01085 0 4.02112 0 4.03322V21.6333C0 21.8358 0.191893 22 0.428571 22H17.5714C17.8081 22 18 21.8358 18 21.6333V4.03322C18 3.83068 17.8082 3.66655 17.5714 3.66655ZM14.5714 0.856401V3.66655H3.40457L14.5714 0.856401ZM17.1429 21.2667H0.857143V4.39989H17.1429V21.2667Z"
                                fill="currentcolor" />
                            <path
                                d="M15.8571 7.83327H2.1428C1.90613 7.83327 1.71423 7.99745 1.71423 8.19994C1.71423 8.40244 1.90613 8.56661 2.1428 8.56661H15.8571C16.0938 8.56661 16.2857 8.40244 16.2857 8.19994C16.2857 7.99745 16.0938 7.83327 15.8571 7.83327Z"
                                fill="currentcolor" />
                            <path
                                d="M15.8571 13.0333H2.1428C1.90613 13.0333 1.71423 13.1975 1.71423 13.4C1.71423 13.6025 1.90613 13.7666 2.1428 13.7666H15.8571C16.0938 13.7666 16.2857 13.6025 16.2857 13.4C16.2857 13.1975 16.0938 13.0333 15.8571 13.0333Z"
                                fill="currentcolor" />
                        </svg>

                        <font-awesome-icon v-if="menu.id === 3" :icon="['fasr', 'fire']" />
                        <font-awesome-icon v-if="menu.id === 4" :icon="['fas', 'gear']" />
                    </div>
                    <h3>{{ menu.name }}</h3>
                </router-link>
            </div>

            <div class="navbar_bottom">
                <img src="../assets/images/delivery-man.svg" alt="" class="deliver_man">
                <div class="mini-circle"></div>
                <div class="middle-circle"></div>
                <div class="purple-circle">
                    <div class="white-circle"></div>
                </div>
                <div class="blue-circle"></div>

                <div class="navbar_bottom_details">
                    <h4>Faster
                        delivery!</h4>

                    <div class="detail_items">
                        <div class="red-circle"></div>

                        <p>Know More</p>

                        <font-awesome-icon :icon="['fas', 'right-long']" size="xs" />
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>
<script>
export default {
    name: 'nav-section',
    data() {
        return {
            menus: this.$store.state.menus
        }
    },
    methods: {
        close() {
            this.$emit('close')
        }
    }
}
</script>