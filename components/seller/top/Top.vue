<template>
  <div class="top" id="top" ref="topbox">
    <div class="headerOne">
      <div class="Topheader">
        <div class="fan">
        <button class="come fl" @click="back"><</button>
        </div>
        <div class="logo_div">
          <img :src="seller.logo" alt="" class="logo fl">
        </div>
        <!-- 由于调用了mapGetters，所以seller里存储了你点击的商店的信息，不需要再额外去拿到它的id号，所以用的时候不用循环，直接写{{seller.属性}}即可 -->
        <h2 class="name">{{seller.name}}欢迎光临</h2>
        <p class="huan">欢迎光临，请在用餐高峰期提前下单，谢谢。</p>
      </div>
    </div>
    <div class="dis">
      <span class="label fl">特</span>
      <span class="fl">满25减12，满64减20，满120减40</span> 
      <span class="fr">3个优惠</span> 
    </div>
    <div class="menu">
      <!-- <router-link :to="'/seller/'+seller._id+'/goodsList'" class="link good" replace>商品</!-->
      <!-- <router-link :to="'/seller/'+seller._id+'/goodsList'" class="link rating" replace>商品</router-link>  -->
      <span class="good" replace>商品</span>
      <span class="rating" replace>评价4.4分</span>
    </div>
  </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
  name: 'top',
  data () {
    return {
      showDiscount: false,
    }
  },
  created () {
  this.$http({
    url: 'static/json/seller.json'
  }).then((res) => {
    this.list=res.data
  })
  },
  computed:{
    ... mapGetters(['seller'])
  },
  methods:{
    back () {
      console.log(123)
      this.$router.back
    }
  }
}
</script>
<style scoped>
.menu{
  margin-top:0.4rem;
  width: 100%;
  font-size:0.38rem;
  text-align: left;
  border-bottom:2px solid gainsboro;
  padding-left:0.4rem;
  /* height:2rem; */
}
.good,.rating{
  display: inline-block;
  height:1rem;
  line-height: 1rem;
  border-bottom:3px solid blue;
  font-weight: bold;
  color: #ccc;
}
.come{
  width: 0.8rem;
  height: 0.6rem;
  font-size: 36px;
  border:none;
  color:#fff;
  background: transparent;
}
.logo{
  margin-top:0.8rem;
  margin-left:0.4rem;
}
.fan{
  overflow: hidden;
}
.name{
  margin-top:0.7rem;
  width: 6rem;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
}
.huan{
  margin-top:0.2rem;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
  width: 4.6rem;
}
.Topheader{
  width: 100%;
  height: 2.8rem;
  background:#3190e8;
  padding-top:0.6rem;
  /* margin-left:.4rem; */
  color:#fff;
}
.headerOne{
  height: 4.2rem;
  width: 100%;

}
.dis{
  margin-left:0.4rem;
  font-size:0.26rem;;
  margin-right:0.2rem;
}
.label{
  width: 0.4rem;
  height: 0.4rem;
  background:red;
  color: #fff;
  display:inline-block;
  /* margin-left:0.4rem; */
}
.top{
  width: 100%;
  height:5.6rem;
}
</style>
