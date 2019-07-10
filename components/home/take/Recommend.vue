<template>
  <div class="recommend">
    <div class="header">
      <h3>品质优选</h3>
      <p class="more">更多</p>
    </div>
    <ul class="recommend_list">
      <li class="recommend_menu" v-for="(item, index) in lists" :key="index">
        <a href="javascript:;">
          <img :src="item.icon" alt=""><br>
          <p class="list_name">{{item.name}}</p><br>
          <button class="hot">大牌精选</button>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name:'Recommend',
  data () {
    return {
      lists:[]
    }
  },
  created () {
    this.$http({
      url: 'static/json/recommend.json'
    }).then((res) => {
      this.lists=res.data
    })
  },
}
</script>
<style scoped>
  h3{
    float:left;
    color:brown;
  }
  .more{
    float:right;
    font-size:20px;
  }
  .header{
    overflow: hidden;
    padding-top:0.2rem;
  }
  .recommend{
    margin-top: 0.4rem;
    height:4rem;
    width:100%;
  }
  .recommend_menu{
    float:left;
    flex:1;
  }
  .recommend_list{
    overflow: hidden;
    display:flex;
  }
  img{
    margin-top:0.2rem;
    width:1.4rem;
    height: 1.4rem;
  }
  .recommend_list{
    font-size:16px;
  }
  .hot{
    border:2px solid #3190e8;
    width: 1.4rem;
    height:0.5rem;
    color: #3190e8;
    background: #fff;
    font-size:18px;
  }
  .list_name{
    text-align: center;
    font-size: 20px;
    color: #000;
    margin-top: 0.2rem;
    width: 1.3rem;
    margin-left:0.5rem;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
</style>
