<template>
  <div class="category">
    <swiper :options="swiperOption" class="swiper">
      <swiper-slide v-for = "(cates,index) in cate" class="cl" :key="index">
        <a class="item" v-for="(cate,i) in cates" :href="cate.url" :key="i">
          <img :src="cate.icon" alt="">
          <p>{{cate.name}}</p>
        </a>
      </swiper-slide>
      <!-- 分页器 -->
    <div class="swiper-pagination" slot="pagination"></div>  
    </swiper>
  </div>
</template>
<script>
import { swiper , swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
export default {
  name:'Category',
  data () {
    return {
      cate: [],
      swiperOption: {
        direction: 'horizontal',
        pagination: {
          el: '.swiper-pagination',
          type :'bullets'
        }
      }
    }
  },
  created () {
    this.$http({
      url: 'static/json/categories.json'
    }).then((res) => {
      this.cate=res.data
    })
  },
  components : {
    swiper,swiperSlide
  }
}
</script>
<style lang="less" scoped>
.category {
  margin-top: 0.2415rem;
  .swiper {
    margin: 0 0.2657rem;
    height: 4.72rem;
    .item {
      float: left;
      width: 20%;
      text-align: center;
      img {
        width: 1.1916rem;
        height: 1.1916rem;
      }
      p {
        color: #666;
      }
    }
  }
}
</style>


