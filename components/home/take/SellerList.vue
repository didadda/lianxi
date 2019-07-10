<template>
  <div class="sellerList">
    <Time>
      <div class="header">
        <h3 class="great">推荐商家</h3>
      </div>
      <div class="sellerbody">
        <ul class="seller-menu">
          <li class="store" v-for="(item, id) in list" :key="id" @click="jump(item)">
            <img :src="item.logo" alt="" class="store_img">
            <div class="store_msg">
              <h3 class="name">{{item.name}}</h3>
              <span class="rate">
                <Rate :max=5 :size="0.2415" :unit="'rem'" :score="item.rating"></Rate>
              </span>
              <span>{{item.rating}}</span>
              <span>
                月售{{item.orderNo}}单
              </span>
              <p>￥{{item.sendFee}}起送|配送费￥{{item.deliveryFee}}</p>
              <button class="label">品质联盟</button>
              <div class='dis'>
                <p v-for="(item,i) in item.discount" :key="i">{{item.icon}}{{item.content}}</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </Time>
  </div>
</template>
<script>
import Rate from '../../../base/rate/Rate'
import Time from '@/base/time/Time'
export default {
  name:'SellerList',
  data () {
    return {
      list:[]
    }
  },
  created () {
    this.$http({
      url: 'static/json/seller.json'
    }).then((res) => {
      this.list=res.data
    })
  },
  methods:{
    jump(seller) {
      console.log(this.$store)
      this.$store.dispatch('add', seller)//调用action的方法，将seller对象传入
      // console.log(this.$store.state)
      this.$router.push('/seller/'+seller.id)
      console.log(seller.id)
      this.$route.params.seller//将seller保存在$route.params
    },
  },
  components:{
    Rate,Time
  }  
}
</script>
<style scoped>
p{
  font-size:0.29rem;
  margin-top:0.1rem;
}
.rate{
  display:inline-block;
  width: 3rem;
  height: 0.4rem;
}
.sellerList{
  margin-top:0.4rem;
  width: 100%;
}
.header{
  overflow: hidden;
}
.name{
  margin-bottom: 0.2rem;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
}
.great{
  float: left;
}
.sellerbody{
  /* padding-top:1rem; */
}
.store{
  height: 3.2rem;
  overflow: hidden;
  margin-bottom:0.5rem;
}
.seller-menu{
  padding:0.4rem 0.2rem;
}
.store_img{
  float:left;
  width: 17%;
  height: 1.7rem;
}
.store_msg{
  float: left;
  text-align: left;
  width: 80%;
  height: 100%;
  padding-left: 0.2rem;
}
.label{
  width: 1.4rem;
  border: none;
  font-size: 14px;
}
</style>
