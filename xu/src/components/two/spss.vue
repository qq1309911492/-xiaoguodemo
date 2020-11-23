<template>
  <div>
    <div class="drow">
      <!-- 头部 -->
      <header class="head" >
        <back></back>
        <a href="" class="logo"
          ><img src="@/assets/images/index/logo.jpg" alt=""
        /></a>
        <p>
          <span></span>
          <span></span>
          <span></span>
        </p>
      </header>

      <div v-if="main">
        <div class="search">
          <img src="@/assets/images/cplb/search.jpg" alt="" />
          <input type="search" placeholder="搜索商品" class="xzsp" />
        </div>
        <div class="main">
          <div class="neirong" v-for="item in main" :key="item.id" @click="tj(item.id)">
            <div class="left">
              <img :src="$url + item.img" alt="" />
            </div>
            <div class="right">
              <p class="p1">{{ item.goodsname }}</p>
              <p class="p2">￥{{ item.market_price | to(2) }}</p>
            </div>
          </div>
        </div>
      </div>
      <div v-else >
         <van-empty description="暂时没有商品" />
      </div>
      <!-- 搜索 -->
    </div>
  </div>
</template>

<script>
import { fenlei } from "../../util/axios/index";
export default {
  data() {
    return {
     
      main: [],
    };
  },
  mounted() {
    this.neirong();
  },
  methods: {
    neirong() {
      fenlei({ fid: this.$route.query.id }).then((res) => {
        if (res.data.code == 200) {
          this.main = res.data.list;
        }
      });
      //  this.$route.query.id
    },
    tj(id){
        this.$router.push('/spxq?id='+id)
    }
  },
  components: {},
};
</script>

<style lang="" scoped>
@import "../../assets/css/cplb.css";
</style>
