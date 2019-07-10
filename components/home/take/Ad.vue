<template>
  <div class="ad_class">
    <swiper :options="swiperOption" class="swiper">
      <swiper-slide v-for = "(ad,index) in ads" class="cl" :key="index">
      <a class="item" :href="ad.url">
        <img :src="ad.icon" alt="">
      </a>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>  
    </swiper>
  </div>
</template>
<script>
import { swiper , swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
export default {
  data () {
    return {
      ads: [],
      swiperOption: {
        direction: 'horizontal',
        autoplay:true,
        pagination: {
          el: '.swiper-pagination',
          type :'bullets'
        }
      }
    }
  },
  created () {
    this.$http({
      url: 'static/json/ad.json'
    }).then((res) => {
      this.ads=res.data
    })
  },
  components : {
    swiper,swiperSlide
  }
}
</script>
<style scoped>
.ad_class,.swiper{
  height:2.34rem;
  width: 98%;
  margin: 0 auto;
}
img{
  width:100%;
}
</style>
