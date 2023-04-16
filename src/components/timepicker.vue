<template>
    <div class="timepicker_container">
        <a-time-picker :getPopupContainer="getCalendarContainer()" :default-value="moment('12:08', 'HH:mm')"
            format="HH:mm" />
    </div>
</template>
<script>
import moment from 'moment';
export default {
    name: 'timepicker',
    methods: {
        moment,
        getCalendarContainer() {
            return (triggerNode) => {
                return triggerNode.parentNode;
            }
        },
    }
}
</script>