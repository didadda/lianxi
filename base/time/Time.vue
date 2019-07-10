<template>
  <span>
    <slot v-if="initSuccess"></slot>
  </span>
</template>
 
<script>
  export default {
    name: "Time",
    props: {
      time: {
        required: false,
        default: 3000
      }
    },
    data() {
      return {
        initSuccess: false
      }
    },
    created() {
      this.initSlot();
    },
 
    methods: {
      initSlot() {
        let vm = this;
        setTimeout(function () {
          vm.initSuccess = true;
        }, (Number(vm.time || 3000)));
      }
    }
  }
</script>
 
<style scoped>
 
</style>