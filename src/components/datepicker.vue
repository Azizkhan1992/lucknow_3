<template>
    <div class="datepicker_container">
        <a-date-picker :getCalendarContainer="getCalendarContainer()" :placeholder="'Visiting Time'" />
    </div>
</template>
<script>
export default {
    name: 'datepicker',
    methods: {
        getCalendarContainer() {
            return (triggerNode) => {
                return triggerNode.parentNode.parentNode;
            }
        },
    }
}
</script>