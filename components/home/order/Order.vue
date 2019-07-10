<template>
  <div class="order">
    <div class="top">
      <span class='jie'>订单</span>
      <span class="morning">早餐</span>
    </div>
    <div class="rate">
      <p class="talk"> <span class='close'>x</span> 尚有 <span class="score">5</span> 单未评价，立即评价最多可获得 <span class="score">716</span>  积分</p>
    </div>
    <div class="header">
      <span class="me">我的订单</span>  <span class="all">全部订单 ></span>
    </div>
    <div class="history">
      <ul class="orderH">
        <li class="orderOne" v-for="(item, id) in order" :key="id">
          <div class="imgClass">
            <img :src="item.img" alt="" class="img">
          </div>
          <div class="right">
            <p class="name">{{item.seller}}</p><br>
            <div class="state">
              <span class="more">></span>
              <span class="finish">{{item.state}}</span>
            </div>
            <p class='time'>{{item.date}}</p>
            <p class='some'>{{item.title}}</p>
            <p class="money">￥{{item.money}}</p>
            <button class="again">再来一单</button>
            <button class="rating">评价晒图的164积分</button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name:'Order',
  data () {
    return{
      order:[]
    }
  },
   created () {
    this.$http({
      url: 'static/json/order.json'
    }).then((res) => {
      this.order=res.data
    })
  },
}
</script>
<style scoped>
.top{
  width: 100%;
  height: 2rem;
  background: #3190e8;
  color:#fff;
  position:relative;
}
.jie,.morning{
  display:inline-block;
  font-size:0.38rem;
  margin-top:0.8rem;
  position: absolute
  /* text-align: left; */
}
.jie{
  left:0.4rem;
}
.morning{
  right:0.4rem;
}
.talk{
  width: 96%;
  height: 1rem;
  line-height:1rem;
  font-size: 0.34rem;
  border:0.02rem solid #ccc;
  border-radius:0.6rem;
  margin-top:.2rem;
}
.score{
  color:red;
}
.close{
  color:#ccc;
  /* display: inline-block; */
  /* height: 0.34rem;
  width: 0.34rem; */
  font-size:0.3rem;
  border:0.02rem solid #ccc;
  border-radius: 50%;
}
.header{
  position:relative;
  height: 1.5rem;
}
.all,.me{
  margin-top:0.6rem;
  position:absolute;
}
.all{
  color:#3190e8;
  font-size:0.3rem;
  right:0.4rem;
}
.me{
  color:#333;
  font-size: 0.38rem;
  left:0.4rem;
}
.orderOne{
  padding-left:0.4rem;
  background: transparent;
  height: 5.4rem;
  width: 100%;
  /* margin-top:1.6rem; */
  text-align: left;
  display:flex;
  border:0.01rem solid #ccc;
}
.orderH{
  overflow: hidden;
}
.again,.rating{
  border:0.01rem solid;
  height: 0.8rem;
  background: transparent;
  font-size:0.3rem;
  margin-top:0.4rem;
  border-radius: 0.1rem;
  padding:0 0.3rem;
  letter-spacing: 0.06rem;
}
.name{
  font-size:0.38rem;
  font-weight:bold;
  letter-spacing: 0.1rem;
}
.imgClass{
  flex:1;
}
.right{
  flex:4;
}
.state{
  margin-top:-0.2rem;
  position: relative;
}
.more{
  font-size:0.5rem;
  font-weight: bold;
}
.finish{
  position: absolute;
  right:0.6rem;
  font-size: 0.28rem;
  color: #333;
}
.time{
  margin-top:0.1rem;
  font-size: 0.3rem;
  color:#ccc;
}
.some{
  margin-top:0.4rem;
}
.money{
  margin-top:0.3rem;
  font-weight: bold;
}
.again{
  margin-left:1rem;
  margin-right:.3rem;
  color:skyblue;
}
.rating{
  color:red;
}
</style>
