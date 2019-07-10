<template>
  <div class="top">
    <div class="header">
      <Geo class="address"></Geo>
    </div>
    <div class="main">
      <input type="text" class="search-input" placeholder="搜索饿了吗商家，商品名称">
    </div>
    <div class='tags'>
      <span v-for="(item, index) in tags" :key="index">
        <a href='item.url' class='tag_name'>{{item.name}}</a>
      </span>
    </div>
  </div>
</template>
<script>
import Geo from '../../../base/geo/Geo'
export default {
  name : 'Top',
  data () {
    return {
      tags:[]
    }
  },
  created () {
    this.$http({
      url: 'static/json/tag.json'
    }).then((res) => {
      this.tags=res.data
    })
  },
  components:{
    Geo
  }
}
</script>
<style lang="stylus" scoped>
.top
  height 20vh
  background #3190e8
  text-align center
.header
  height 40%
.main
  height 30%
.search-input
  width 96%;
  height 0.8rem
  font-size 22px
  text-align center
.tags
  height 1rem
  line-height 1rem
.tag_name
  margin-left 0.4rem
  color #fff
.address
  font-size 28px
  line-height 1.6rem
  color #fff
  font-weight bold
</style>
