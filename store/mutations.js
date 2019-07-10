import * as types from './mutation-type'
export default {
    [types.UPDATE_INTEGRAL] (state, newInteral) {//积分
        state.UPDATE_INTEGRAL +=newInteral
    } ,
    [types.ADD_COUPON] (state, coupon) {//优惠卷
        state.coupon.push(coupon)
    },
    [types.ADD_SELLER] (state,seller) {//存储seller对象
        state.seller = seller
    },
   
}