<template>
  <div class="mine">
    <div class="top">
      <div class="title cl">
        <span class="fl">我的</span>
        <span class="fr">
          <i class="icon-take icon-tongzhi"></i>
          <i class="icon-take icon-shezhi"></i>
        </span>
      </div>
      <div class="user cl">
        <img class="head-pic" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562316951924&di=9041377ff6f07f087cd652ab338f0725&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201809%2F25%2F20180925111353_VdXNm.thumb.700_0.jpeg" alt="">
        <div class="content">
          <div class="name">冷眼望世界</div>
          <div class="phone">
            <i class="icon-take icon-shouji"></i>
          {{user.phone|savePhone}}
          </div>
        </div>
        <i class="fr icon-take icon-jiantou3"></i>
      </div>
    </div>
    <div class="account">
      <div class="cell">
        <p class="money">{{user.wallet|money}}
          <span class="unit">元</span>
        </p>
        <p class="text">钱包</p>
      </div>
      <div class="cell">
        <p class="number">{{user.coupon.length}}
          <span class="unit">个</span>
        </p>
        <p class="text">优惠</p>
      </div>
      <div class="cell">
        <p class="score">{{user.integral}}
          <span class="unit">分</span>
        </p>
        <p class="text">积分</p>
      </div>
    </div>
    <div class="ad">
      <img src="http://vip.xunlei.com/vip_service/notice/n-img/msg/msg_top.jpg" alt="">
    </div>
    <ul class="list">
      <li class="item">
        <a href="">
          <i class="icon icon-blue icon-take icon-weizhi"></i>
          <span class="title">收货地址</span>
        </a>
      </li>
      <li class="item">
        <a href="">
          <i class="icon icon-orange icon-take icon-shoucang"></i>
          <span class="title">我的收藏</span>
        </a>
      </li>
    </ul>
    <ul class="list">
      <li class="item">
        <a href="">
          <i class="icon icon-orange icon-take icon-gift"></i>
          <span class="title">推荐有奖</span>
          <span class="fr desc">5元现金</span>
        </a>
      </li>
      <li class="item">
        <a href="">
          <i class="icon icon-green icon-take icon-bao"></i>
          <span class="title">积分商城</span>
          <span class="fr desc">0元好物在这里</span>
        </a>
      </li>
      <li class="item">
        <a href="">
          <i class="icon icon-yellow icon-take icon-xing1"></i>
          <span class="title">每日精选</span>
          <span class="fr desc">1元起秒杀</span>
        </a>
      </li>
      <li class="item">
        <a href="">
          <i class="icon icon-blue icon-take icon-sim"></i>
          <span class="title">免费流量</span>
          <span class="fr desc">每月最高500M</span>
        </a>
      </li>
    </ul>
    <ul class="list">
      <li class="item">
        <a href="">
          <i class="icon icon-orange icon-take icon-iconfont-game"></i>
          <span class="title">玩游戏领红包</span>
        </a>
      </li>
    </ul>
    <ul class="list">
      <li class="item">
        <a href="">
          <i class="icon icon-blue icon-take icon-hua"></i>
          <span class="title">服务中心</span>
        </a>
      </li>
      <li class="item">
        <a href="">
          <i class="icon icon-blue icon-take icon-zan"></i>
          <span class="title">欢迎评分</span>
        </a>
      </li>
      <li class="item">
        <a href="">
          <i class="icon icon-blue icon-take icon-iconfontdianpu"></i>
          <span class="title">加盟合作</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: 'mine',
  computed: mapGetters(['user'])
}
</script>

<style lang="scss">
.mine {
  background: #f5f5f5;
  .top {
    padding: 0.8052rem 0.3623rem;
    color: #fff;
    font-size: 0.4026rem;
    background: #009aff;
    box-sizing: border-box;
    .title {
      & > span > i {
        margin-left: 0.8052rem;
        font-size: 0.4026rem;
      }
    }
    .user {
      margin-top: 30px;
      .head-pic {
        display: inline-block;
        width: 1.6908rem;
        height: 1.6908rem;
        border-radius: 50%;
        vertical-align: middle;
      }
      .content {
        display: inline-block;
        font-size: 0;
        vertical-align: middle;
        .name {
          font-size: 0.4026rem;
          font-weight: 400;
        }
        .phone {
          margin-top: 35px;
          font-size: 0.4026rem;
          i {
            font-size: 0.4026rem;
          }
        }
      }
      .icon-take {
        margin-top: 0.5636rem;
        font-size: 0.4026rem;
      }
    }
  }
  .account {
    display: flex;
    background: #fff;
    border-bottom: 1px solid #ccc;
    .cell {
      flex: auto;
      text-align: center;
      border-right: 1px solid #ccc;
      &:nth-child(3) {
        border: none;
      }
      p > .unit {
        font-size: 0.2254rem;
      }
      .money {
        color: #ff9900;
        font-size: 0.4026rem;
      }
      .number {
        color: #ff5f3e;
        font-size: 0.4026rem;
      }
      .score {
        color: #6ac20b;
        font-size: 0.4026rem;
      }
      .text {
        color: #666;
        font-size: 0.2576rem;
      }
    }
  }
  .ad {
    margin: 0.2415rem 0;
    img {
      height: 1.9324rem;
      width: 100%;
    }
  }
  .list {
    margin-bottom: 0.2415rem;
    background: #fff;
    .item {
      padding: 0.3623rem 0.4026rem;
      border-top: 1px solid #ccc;
      &:last-child {
        border-bottom: 1px solid #ccc;
      }
      a {
        display: block;
        font-size: 0;
        .icon {
          margin-right: 0.4026rem;
          font-size: 0.4026rem;
        }
        .icon-blue {
          color: #4aa5f0;
        }
        .icon-orange {
          color: #fd7b53;
        }
        .icon-green {
          color: #94d94a;
        }
        .icon-yellow {
          color: #ffb453;
        }

        .title {
          color: #333;
          font-size: 0.4026rem;
          font-weight: 400;
        }
        .desc {
          display: inline-block;
          margin-top: 0.0483rem;
          color: #999;
          font-size: 0.3221rem;
          font-weight: 400;
        }
      }
    }
  }
}
</style>
