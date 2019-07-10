//引入mutation-type其中所有用到mutation-type中的值要加mutationType.
import * as mutationType from './mutation-type'
export default {
  activity ({commit}, payload) {
    setTimeout (function () {
      commit(mutationType.ADD_COUPON, payload.coupon)
      commit(mutationType.UPDATE_INTEGRAL,20)
    },2000)
  },
  add ({commit}, payload) {
    commit(mutationType.ADD_SELLER, payload)
  }
}