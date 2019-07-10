import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import Seller from '@/components/seller/Seller'
import Take from '@/components/home/take/Take'
import Find from '@/components/home/find/Find'
import Order from '@/components/home/order/Order'
import Mine from '@/components/home/mine/Mine'
import GoodsList from '@/components/seller/goodsList/GoodsList'
import ShopCart from '@/components/seller/shopCart/ShopCart'
Vue.use(Router)

const router = new Router({
  linkActiveClass: 'select',
  routes: [
    {
      path: '/',
      redirect: '/home/take'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children: [
        {
          path: 'take',
          name: 'Take',
          component: Take
        },
        {
          path: 'find',
          name: 'Find',
          component: Find
        },
        {
          path: 'order',
          name: 'Order',
          component: Order
        },
        {
          path: 'mine',
          name: 'Mine',
          component: Mine
        }
      ]
    },
    {
      path: '/seller/:id',
      name: 'Seller',
      component: Seller
    }
  ]
})
export default router
