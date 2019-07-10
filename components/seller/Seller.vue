<template>
  <div class="seller">
    <Top></Top>
    <GoodsList></GoodsList>
    <!-- <router-view></router-view> -->
    <ShopCart></ShopCart>
  </div>
</template>
<script>
import Top from './top/Top'
import GoodsList from './goodsList/GoodsList'
import ShopCart from './shopCart/ShopCart'
export default {
    name:'Seller',
    components:{
        Top,ShopCart,GoodsList
    }
}
</script>
