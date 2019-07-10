<template>
  <div class="shopcart">
    <div class="something">
      <transition name="fade" @enter="enter" @afterEnter="afterEnter" @leave="leave">
      <div class="slide" v-if="showList" ref="disHeight">
        <p class="disP">已满50元，结算减 <span class="disNum">34</span> 元</p>
          <ul class="headerTop">
            <li class="header">
              <div class="left">
                <span class="xian"></span>
                <span class='select'>已选商品</span>
              </div>
              <div class="right">
                <span class="icon"></span>
                <span class="blank">清空</span>
              </div>
            </li>
            <li class="menu">
              <p class="name">脆皮鸡拌饭+鸡排+饮品</p>
              <p class="jie">脆皮鸡拌饭+鸡排+饮品/ggkwsgesgsa</p>
              <span class="price">￥23</span>
              <span class="cut">-</span>
              <span class="num">2</span>
              <span class="add">+</span>
            </li>
            <li class="menu">
              <p class="name">脆皮鸡拌饭+鸡排+饮品</p>
              <p class="jie">脆皮鸡拌饭+鸡排+饮品/ggkwsgesgsa</p>
              <span class="price">￥23</span>
              <span class="cut">-</span>
              <span class="num">2</span>
              <span class="add">+</span>
            </li>
            <li class="menu">
              <p class="name">脆皮鸡拌饭+鸡排+饮品</p>
              <p class="jie">脆皮鸡拌饭+鸡排+饮品/ggkwsgesgsa</p>
              <span class="price">￥23</span>
              <span class="cut">-</span>
              <span class="num">2</span>
              <span class="add">+</span>
            </li>
            <li class="white">

            </li>
          </ul>
      </div>
    </transition>
    </div>
    <div class="footer" @click="showList=!showList">
      <p class="cart"></p>
      <p class="money">￥80</p>
      <p class="any">另需配送费￥2.5元</p>
      <span class="over">去结算</span> 
    </div>

  </div>
</template>
<script>
export default {
  name:'ShopCart',
  data () {
    return {
      showList: false,
      slideHeight:null,
    }
  },
  methods:{
    enter (el) {
      el.style.height = 0
    },
    afterEnter (el) {
      el.style.height =8 + 'rem'
      el.style.transition = 'all .5s'
    },
    leave (el) {
      el.style.height = 0
    }
  },
  mounted () {
    // console.log(dis.height)
    // console.log(this.$refs.dis.offsetHeight)
    this.slideHeight = 8+"rem"
    this.showList = false
  },
//   v-enter: 定义进入过渡的开始状态。在元素被插入时生效，在下一个帧移除。
// v-enter-active: 定义进入过渡的结束状态。在元素被插入时生效，在transition/animation完成之后移除。
// v-leave:定义离开过渡的开始状态。在离开过渡被触发时生效，在下一个帧移除。
// v-leave-active: 定义离开过渡的结束状态。在离开过渡被触发时生效，在transition/animation完成之后移除。

}
</script>
<style scoped>
.shopcart{
  position: relative;
}
.footer{
  position: fixed;
  width:100%;
  height: 1.4rem;
  background: #000;
  opacity:0.8;
  bottom:0rem;
}
.over{
  position:fixed;
  right:0;
  bottom: 0;
  font-size:0.4rem;
  color:#fff;
  display: inline-block;
  width: 3rem;
  height: 1.4rem;
  line-height:1.4rem;
  background: rgb(15, 189, 73);
}
.cart{
  position: fixed;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  display:inline-block;
  background: #000;
  bottom:0;
  left:0.2rem;
}
.money,.any{
  color:#fff;
  position: absolute;
  left:2.2rem;
}
.money{
  font-size:0.4rem;
  font-weight: bold;
}
.any{
  bottom:0.2rem;
}
.headerTop{
  width: 100%;
  /* height: 5rem;
  background: pink; */
}
.something{
  position: fixed;
  bottom:0;
  width: 10rem;
}
.disP{
  width: 100%;
  background:rgb(250, 219, 46);
  opacity: 0.8;
}
.xian{
  display:inline-block;
  width: 0.1rem;
  height: 0.5rem;
  background: #3190e8;
  margin-top:0.2rem;
}
.left{
  position:absolute;
  left:0.4rem;
}
.right{
  margin-top:0.1rem;
  position: absolute;
  right:0.2rem;
}
.left,.right{
  letter-spacing: 0.1rem;
}
.icon{
  display:inline-block;
  width: 0.6rem;
  height: 0.6rem;
  background: #3190e8;
}
.header{
  height: 1rem;
  background: #ccc;
  line-height: 1rem;
}
.name{
  font-weight:bold;
  text-align: left;
  margin-left:0.4rem;
  padding-top:0.3rem;
}
.jie{
  display: inline-block;
  width:4.4rem;
  color:#ccc;
  /* height: 0.8rem; */
  text-align: left;
  float:left;
  margin-left:0.4rem;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
  margin-top:0.2rem;
}
.price{
  color:red;
  font-size:0.4rem;
  position: absolute;
  bottom:0.3rem;
  right:2.2rem;
}
.cut{
  color:#3190e8;
  border-color:#3190e8;
  background: transparent;
  bottom:0.4rem;
  right:1.38rem;
}
.cut,.add{
  border-radius: 50%;
  display:inline-block;
  width: .4rem;
  height: 0.4rem;
  font-size:0.5rem;
  border:0.02rem solid;
  line-height: 0.4rem;
  position: absolute;
}
.menu{
  position:relative;
  height:1.4rem;
  background: #fff;
  border-bottom:0.03rem solid #ccc;
}
.add{
  right:0.4rem;
  bottom:0.4rem;
}
.num{
  position: absolute;
  font-size:0.36rem;
  bottom:0.4rem;
  right:1rem;
}
.white{
  height: 2rem;
  width: 100%;
  background: #fff;
}
.disNum{
  color:red;
}
/* .fade-enter{
  opacity: 0;
}
.fade-enter-active{
  transition: opacity .5s;
}
.fade-leave-active{
  transition: transform .5s;
}
.fade-leave-to{
  transform: translateX(10px);
} */
</style>
