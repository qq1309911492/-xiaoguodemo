<template>
  <div>
    <header class="head">
      <back></back>
      <a href="" class="logo">商品分类</a>
      <p class="iconfont icon-shenglve"></p>
    </header>
    <div class="main">
      <ul class="left">
        <van-sidebar v-model="activeKey" @change="onchange">
          <van-sidebar-item
            :title="item.catename"
            v-for="item in biaoti"
            :key="item.id"
          />
        </van-sidebar>
      </ul>
      <div class="you clearfix">
        <div class="biaoti clearfix">
          <p class="p1">洗发类</p>
          <a href="" class="a1">更多></a>
        </div>
        <ul class="right">
          <van-grid column-num='3' class="gz">
            <van-grid-item icon="photo-o" text="文字" v-for="item2 in main" :key="item2.id" @click="tz(item2.id)">
                <img :src="item2.img?$url+item2.img:'https://www.baidu.com/link?url=vjMX2xbCKxjWA4rG3BuhldzQknr4_nEz-BAqmBLHGQtxyhH36Yn_UBXX4r8mAt26DaLxfC5a1mO2XA2cF5qsfyZWSKgKDxGbjzR8hMCIXZbZYNAr3jTRJuZTqEIoRbdEWnteAzeONUb4RrqR2SWEAp7CV4lcgraiMOdqkUZn6fRwqSfVJKk3AcbawG0KUxkB6vCZdUjdysHxkFPV10MnysYSsrDnptkcKHwO_F787xJRVhqaummoLbg2u33s0zQknHXC5CMk-zKt54_WNqJ90fGqXVG039V2uzmGxIXAo4wZyqBAaFRVlw3NjZs8H0qwT83M3EQ971YC5NC59qgBVjrnEtgkGWJJeHhMpjccv04tvznRy_e1fBMXXmvi4Fs9YhMIfuR0oFMfLbDBiz2nkj7EXw2Oo8VUd4UCOzVLvqpsm56lfN8dnG4Kzi3THud8AyJN_k8I5NtuTHICmi76GEIngMQBUkUhO8-YL-Bb5bCzJejaLqvYJtZhcQD_c6jdx68Y8pznFPfgJjROvAUU8O7Dg_59wO9kn4qmLOQx_K-UiDSD4yYijPQ5rq-NE1ljnGZTOuH4aierrsTKbqzqVB0n_YihEd_SDtMTdO_E6DKTJkdohrwvMeMw41tdXMxtVvg5AJK5fjVlPG9cvhuOGqEJTcEEVNKxu4QMjrPViNi&timg=&click_t=1605705556413&s_info=1519_722&wd=&eqid=d71bfb1b001dc272000000035fb5095b'" alt="" class="tp">
                    <p>{{item2.catename}}</p>
            </van-grid-item>
           
          </van-grid>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { list } from "../../util/axios/index";
import axios from "axios";
export default {
  data() {
    return {
      activeKey: 0,
      fl: [
        { id: 1, name: "施华蔻" },
        { id: 2, name: "沙宣" },
        { id: 3, name: "欧莱雅" },
        { id: 4, name: "潘婷" },
        { id: 5, name: "资生堂" },
        { id: 6, name: "阿道夫" },
        { id: 7, name: "卡诗" },
        { id: 8, name: "海飞丝" },
      ],
      biaoti: [],
      main: [],
    };
  },
  mounted() {
    axios.all([list()]).then(
      axios.spread((res, res2) => {
        if (res.data.code == 200) {
          this.biaoti = res.data.list;
          this.main = res.data.list[this.activeKey].children;
        }
      })
    );
  },
  methods: {
    onchange(ex) {
      this.main = this.biaoti[ex].children;
    console.log(this.main);
    },
    tz(fid){
        this.$router.push('/spss?id='+fid)
    }
  },
  components: {},
};
</script>

<style lang="" scoped>
@import "../../assets/css/cpfl.css";
.gz{
    width: 100%;
}
.tp{
    width: 100%;
}
</style>
