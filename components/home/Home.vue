<template>
  <div>
    <div class="main">
      <keep-alive>
        <router-view/>
      </keep-alive>
    </div>
    <div class='footer'></div>
    <div class="navbar">
      <div class="nav-menu">
        <li class="menu-item">
          <router-link to="take" class="link">
            <i class="icon-take icon-eleme"></i>
            <p>外卖</p>  
          </router-link>
        </li>
        <li class="menu-item">
          <router-link to="find" class="link">
            <i class="icon-take icon-faxian"></i>
            <p>发现</p>  
          </router-link>
        </li>
        <li class="menu-item">
          <router-link to="order" class="link">
            <i class="icon-take icon-order"></i>
            <p>订单</p>  
          </router-link>
        </li>
        <li class="menu-item">
          <router-link to="mine" class="link">
            <i class="icon-take icon-wode"></i>
            <p>我的</p>  
          </router-link>
        </li>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name : 'Home',
  components : {}
}
</script>
<style scoped lang="stylus">
.navbar
  position fixed
  bottom 0
  background #cccccc
  width 100%
  padding 10px 0
.nav-menu
  display flex
.menu-item
  flex 1
  &:active
    color skyblue
.icon-take
  font-size 46px
.footer
  height 102px
</style>
