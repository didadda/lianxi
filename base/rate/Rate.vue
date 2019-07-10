<template>
  <div class="rate">
    <div class="item" v-for="i in max" :key="i" :style="{width: size+unit,height: size+unit}">
      <i class="behind icon-take icon-xing" :style="{fontSize: size+unit}"></i>
      <i class="front icon-take icon-xing" v-if="i < frontCount" :style="{fontSize: size+unit}"></i>
      <i class="front icon-take icon-xing" v-if="i===frontCount" :style="{fontSize: size+unit,width:lastWidth}"></i>
    </div>
  </div>
</template>
<script>
export default {
  name : "Rate",
  props: {
    max: {
      type :Number,
      default: 5
    },
    size: {
      type :Number,
      default: 30
    },
    unit: {
      type: String,
      default: "px"
    },
    score: {
      type: Number,
      default:5
    }
  },
  computed: {
    frontCount () {
        return Math.ceil(this.score)
    },
    lastWidth () {
      let num = this.score.toFixed(1)
      let i = parseInt(num.toString().substring(num.indexOf("'")+1))
      if (i === 0) return this.size + this.unit
      return i/10 * this.size + this.unit
    }
  }
}
</script>
<style scoped>
.item{
  display:inline-block;
  width: 3rem;
  height: 0.4rem;
  position: relative;
}
.icon-xing{
  float:left;
}
.front{
  color:gold;
  position:absolute;
  top:0rem;
  left:0rem;
}
.behind{
  color:#ccc;
}
</style>
