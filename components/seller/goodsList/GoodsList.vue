<template>
  <div class="goodslist">
    <ul class="list" ref="juan">
      <li class="hot fl">
        拌饭
      </li>
      <li class="fl">拌饭类</li>
      <li class="goods_contain fl">
        <ul class="goods">
          <li class="good_xiang">
            <img src="static/img/goods/bbz.webp" alt="" class="good_img">
            <h3 class="good_name">石锅拌饭</h3>
            <p class="something">鲜香美味</p>
            <span class="sale">月售300份</span> <span class="well">好评率100%</span><br>
            <button class="tui">老板推荐</button>
            <span class="money">￥20</span>
            <span class="shop">+</span>
          </li>
        </ul>
      </li>
      <li>  
      </li>
    </ul>
    <ul class="list" ref="juan">
      <li class="hot fl">
        拌饭
      </li>
      <li class="fl">拌饭类</li>
      <li class="goods_contain fl">
        <ul class="goods">
          <li class="good_xiang">
            <img src="static/img/goods/bbz.webp" alt="" class="good_img">
            <h3 class="good_name">石锅拌饭</h3>
            <p class="something">鲜香美味</p>
            <span class="sale">月售300份</span> <span class="well">好评率100%</span><br>
            <button class="tui">老板推荐</button>
            <span class="money">￥20</span>
            <span class="shop">+</span>
          </li>
        </ul>
      </li>
      <li>  
      </li>
    </ul>
    <ul class="list" ref="juan">
      <li class="hot fl">
        拌饭
      </li>
      <li class="fl">拌饭类</li>
      <li class="goods_contain">
        <ul class="goods">
          <li class="good_xiang">
            <img src="static/img/goods/bbz.webp" alt="" class="good_img">
            <h3 class="good_name">石锅拌饭</h3>
            <p class="something">鲜香美味</p>
            <span class="sale">月售300份</span> <span class="well">好评率100%</span><br>
            <button class="tui">老板推荐</button>
            <span class="money">￥20</span>
            <span class="shop">+</span>
          </li>
        </ul>
      </li>
      <li>  
      </li>
    </ul>
  </div>
</template>
<script>
// import '../../../base/js/scroll'
// import {mapGetters} from 'vuex'
export default {
  name:'GoodsList',
  data () {
    return {
      activeCate:0,//激活的分类
      cateItemsHeight: [0],
      goodsList: [],
      list:[],
      flag:false,
      scroll:0
    }
  },
  created () {
    let id=Number(this.$route.params.id)
    console.log(id)
    this.$http({
      url: 'static/json/goods.json'
    }).then((res) => {
      for(let i=0;i<res.data.length;i++){
        // console.log(res.data[i].sellerId)
        if (id == res.data[i].sellerId){
          console.log(res.data[i])
          this.goodsList = res.data[i]}
      }
    })
    },
  updated () {
    console.log(this.$refs.cateItems)
    this.$refs.cateItems.forEach(item =>{
      let lastHeight =this.cateItemsHeight [this.cateItemsHeight.length -1]
      this.cateItemsHeight.push(item.offsetHeight + lastHeight)
    })
  },
  methods: {
    selectList (event) {
      let i = event.currentTarget.dataset.index
      console.log(i)
      this.$refs.goods.scrollTop = this.cateItemsHeight[i]
    },
    sliderList (event) {
      let scrollTop = event.target.scrollTop
      for (let i= this.cateItemsHeight.length - 1;i>=0;i--){
        if (scrollTop >= this.cateItemsHeight[i]) {
          this.activeCate = i
          break
        }
      }
    },
  },
  updated () {
    scroll = this.$refs.juan.scrollTop
  }
}
</script>
<style scoped>
.hot{
  width: 20%;
  height: 1.2rem;
  background: #ccc;
  display:inline-block;
  position: absolute;

}
.goodsList{
  position:relative;
}
.goods_contain{
  width:80%;
  height:4rem;
  background: seagreen;
  display: inline-block;
}
</style>
