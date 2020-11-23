<template>
  <div>
    <div class="drow">
      <!-- 头部 -->
      <header class="head">
        <back></back>
        <a href="" class="logo">商品详情</a>
        <p>
          <span style="background: #fff"></span>
          <span style="background: #fff"></span>
          <span style="background: #fff"></span>
        </p>
      </header>
      <div class="zong" v-for="item in main" :key="item.id">
        <div class="tu1">
          <img
            :src="
              item.img
                ? $url + item.img
                : 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=30305038,711507037&fm=26&gp=0.jpg'
            "
            alt=""
          />

          <p class="p1">{{ item.goodsname }}</p>
          <p class="p2">
            ￥{{ item.market_price | to(2) }}
            <span> (此价格不与套装优惠同时享受)</span>
          </p>
        </div>
        <div class="choice">
          <div class="chuxiao">
            <div class="zuo clearfix">
              <p class="p1">促销：</p>
              <p class="p2">满减</p>
              <p class="p3">满2件9折；3件8折</p>
            </div>
            <div class="jt">
              <a href="">
                <img src="@/assets//images/spxq/arrow.jpg" alt="" />
              </a>
            </div>
          </div>
          <div class="number">
            <p>购买数量</p>
            <div>
              <van-stepper v-model="value" />
            </div>
          </div>
          <div class="guige">
            <div class="shang">
              <p>商品属性</p>
              <a href="">
                <img src="@/assets/images/spxq/arrow.jpg" alt="" />
              </a>
            </div>
            <div class="xia">
              <p>{{ item.specsname }}</p>
              <a
                href="javascript:;"
                class="a1"
                v-for="(item2, index) in guige"
                :key="index"
                >{{ item2 }}</a
              >
            </div>
          </div>
        </div>
        <!-- 详情 -->
        <div class="details">
          <p>商品详情</p>
          <div v-html="item.description"></div>
        </div>
        <!-- 评价 -->
        <div class="evaluate">
          <p class="p1">商品评价</p>
          <p class="p2">1235668fg</p>
          <p class="p2 p3">效果很好,物流到位，下次继续来！</p>
          <div class="tp">
            <img src="@/assets/images/spxq/picDetail_8.jpg" alt="" />
            <img src="@/assets/images/spxq/picDetail_9.jpg" alt="" />
            <img src="@/assets/images/spxq/picDetail_10.jpg" alt="" />
          </div>
          <p class="p4">2020-01-13</p>
          <div class="pl">
            <p>共1000+条评论</p>
            <a href="">查看更多></a>
          </div>
        </div>
        <div class="footer">
          <a href="@/assets/gwc.html" class="a1">
            <img src="@/assets/images/spxq/iconCart.jpg" alt="" />
            <p>购物车</p>
            <em>2</em>
          </a>
          <a href="javascript:;" class="a2" @click="jiaru">加入购物车</a>
          <a href="javascript:;" class="a3">立即购买</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onelist, gwcadd } from "../../util/axios/index";
export default {
  data() {
    return {
      main: [],
      value: 1,
      guige: [],
    };
  },
  mounted() {
    this.xiangqing();
  },
  methods: {
    xiangqing() {
      onelist({ id: this.$route.query.id }).then((res) => {
        console.log(res.data.list);
        if (res.data.code == 200) {
          this.main = res.data.list;
          console.log(this.main);
          this.guige = res.data.list[0].specsattr.split(",");
        }
      });
    },
    jiaru() {
      // console.log(JSON.parse(sessionStorage.getItem("info")).uid);
      let rain = {
        uid: JSON.parse(sessionStorage.getItem("info")).uid,
        goodsid: this.main[0].id,
        num: this.value,
        
      };
      gwcadd(rain).then((res) => {
       if(res.data.code==200){
         this.$router.push('/gwc')
       }
      });
    },
  },
  components: {},
};
</script>

<style lang="" scoped>
@import "../../assets/css/spxq.css";
</style>
