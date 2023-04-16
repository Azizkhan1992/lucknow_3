<template>
    <div class="lucknow-filter">
        <div class="filter_wrapper">
            <div class="filter-dropdown">
                <dropdown :dropItems="guests" :defaultVal="activeGuests" />
            </div>
            <div class="filter-datepicker">
                <datepicker />
            </div>

            <div class="filter-timepicker">
                <timepicker />
            </div>

            <div class="filter_offer">
                <div class="offer-container">
                    <div class="content">
                        <h2>Welcome</h2>
                        <h2>Welcome</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import dropdown from '../dropdown.vue';
import datepicker from '../datepicker.vue';
import timepicker from '../timepicker.vue';
export default {
    name: 'dishes-filter',
    components: { dropdown, datepicker, timepicker },
    data() {
        return {
            guests: [
                {
                    id: 1,
                    title: '1 guest'
                },
                {
                    id: 2,
                    title: '2 guests'
                },
                {
                    id: 3,
                    title: '3 guests'
                },
                {
                    id: 4,
                    title: '4 guests'
                },
                {
                    id: 5,
                    title: '5 guests'
                },
                {
                    id: 6,
                    title: '6 guests'
                }
            ],
            activeGuests: {
                title: '2 guests'
            }
        }
    }
}
</script>