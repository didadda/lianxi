<template>
    <div class="take_class">
        <Top></Top>
        <Category></Category>
        <Ad></Ad>
        <Recommend></Recommend>
        <div>
          <!-- <skeleton></skeleton>
          <skeleton></skeleton>
          <skeleton></skeleton>
          <skeleton></skeleton>
          <skeleton></skeleton>
          <skeleton></skeleton> -->
        </div>
        <div >
          <SellerList></SellerList>
          <goTop></goTop>
        </div>
    </div>
</template>
<script>
import Ad from './Ad'
import Category from './Category'
import Recommend from './Recommend'
import SellerList from './SellerList'
import Top from './Top'
import goTop from '../../../base/goTop/goTop'
import skeleton from '@/base/skeleton/skeleton'
export default {
  data() {
    return{
      flag:true,
    }
  },
  components: {
    Top, Category, Ad, Recommend, SellerList,goTop,skeleton
  }
}
</script>
<style>

</style>
