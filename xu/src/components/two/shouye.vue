<template>
  <div>
    <!-- 头部 -->
    <header class="head">
      <a href="" class="logo"
        ><img src="@/assets/images/index/logo.jpg" alt=""
      /></a>
      <input type="search" placeholder="寻找商品" class="xzsp" />
      <p>
        <span class="iconfont icon-shenglve" @click="suos"></span>
      </p>
    </header>

    <!-- 导航栏tuijian -->
    <div class="navbar">
      <ul class="clearfix">
        <li v-for="(item, index) in dhl" :key="item.id">
          <a
            href="javascript:;"
            @click="dj(index)"
            :class="index == num ? 'tuijian' : ''"
            >{{ item.name }}</a
          >
        </li>
      </ul>
      <a href="" class="jt"></a>
    </div>

    <!-- 轮播 -->
    <div class="tb">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="item in bannerlist" :key="item.id">
          <img :src="$url + item.img" alt="" class="tupian" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- icon -->
    <ul class="icon">
      <li v-for="(item, index) in icon" :key="item.id" @click="tz(index)">
        <a href="javascript:;">
          <img :src="item.img" alt="" />
          <p>{{ item.name }}</p>
        </a>
      </li>
    </ul>

    <div class="main">
      <div class="zuo">
        <em></em>
        <p class="xianshi">限时秒杀</p>
        <p class="ldc">每天零点场 好货秒不停</p>
        <div class="shijian">
          <span class="one">02</span>
          <span>:</span>
          <span class="one">16</span>
          <span>:</span>
          <span class="one">45</span>
          <span class="ms">秒杀</span>
        </div>
        <div class="sp">
          <img src="@/assets/images/index/shop_5.jpg" alt="" />
          <div>￥14.8</div>
        </div>
      </div>
      <div class="you">
        <div class="shang clearfix">
          <div class="fl js">
            <p class="p1">品牌上新<em></em></p>
            <p class="p2">每日9点 抢大牌</p>
            <img src="@/assets/images/index/brand.jpg" alt="" />
          </div>
          <div class="fr yf">
            <img src="@/assets/images/index/indexshop.jpg" alt="" />
          </div>
        </div>
        <div class="xia">
          <div class="left">
            <p class="p1">每日十件</p>
            <p class="p2">只为你选好货</p>
            <img src="@/assets/images/index/shop_2.jpg" alt="" />
          </div>
          <div class="right">
            <p class="p1">拼阿</p>
            <p class="p2">超级好价拼团</p>
            <img src="@/assets/images/index/shop_3.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>

    <!-- 图 -->
    <div class="icon2">
      <img src="@/assets/images/index/bar.jpg" alt="" />
    </div>

    <!-- 抢购 -->
    <div class="rob">
      <van-tabs v-model="active">
        <van-tab title="商品热卖">
          <div class="wuping clearfix" v-for="item in reemai" :key="item.id">
            <div class="left fl">
              <img
                :src="
                  item.img
                    ? $url + item.img
                    : 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=30305038,711507037&fm=26&gp=0.jpg'
                "
                alt=""
              />
            </div>
            <div class="right fl">
              <p class="p1">名 称:{{ item.goodsname }}</p>
              <p class="p2">价 格:{{ item.market_price }}</p>
            </div>
          </div>
        </van-tab>
        <van-tab title="新品推销">
          <div class="wuping clearfix" v-for="item in xinping" :key="item.id">
            <div class="left fl">
              <img
                :src="
                  item.img
                    ? $url + item.img
                    : 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=30305038,711507037&fm=26&gp=0.jpg'
                "
                alt=""
              />
            </div>
            <div class="right fl">
              <p class="p1">名 称:{{ item.goodsname }}</p>
              <p class="p2">价 格:{{ item.market_price }}</p>
            </div>
          </div>
        </van-tab>
        <van-tab title="日常产品">
          <div class="wuping clearfix" v-for="item in shangp" :key="item.id">
            <div class="left fl">
              <img
                :src="
                  item.img
                    ? $url + item.img
                    : 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=30305038,711507037&fm=26&gp=0.jpg'
                "
                alt=""
              />
            </div>
            <div class="right fl">
              <p class="p1">名 称:{{ item.goodsname }}</p>
              <p class="p2">价 格:{{ item.market_price }}</p>
            </div>
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
  <!-- <div class="biaoti">
        <a
          href=""
          :class="index == 0 ? 'a2 a3' : 'a3'"
          v-for="(item, index) in rmtj"
          :key="item.id"
          >{{ item.name }}</a -->
  <!-- > -->
  <!-- <span>{{item.name}}</span> -->
  <!-- </div>
      <div class="wuping clearfix" v-for="item in rmhh" :key="item.id">
        <div class="left fl">
          <img :src="item.img" alt="" />
        </div>
        <div
          class="right fl"
          v-for="item2 in item.list"
          :key="item2.id"
          @click="xq(item2.id)"
        >
          <p class="p1">{{ item2.p1 }}</p>
          <p class="p2">{{ item2.p2 }}</p>
          <p class="p3">{{ item2.p3 }}</p>
          <a href="" class="p4">{{ item2.p4 }}</a>
        </div>
      </div>
    </div>
  </div> -->
</template>

<script>
import { banner, shangping } from "../../util/axios/index";
export default {
  data() {
    return {
      active: 2,
      num: 0,
      dhl: [
        {
          id: 1,
          name: "推荐",
        },
        { id: 2, name: "女装" },
        { id: 3, name: "居家" },
        { id: 4, name: "母婴儿童" },
        { id: 5, name: "美食" },
        { id: 6, name: "男装" },
        { id: 7, name: "标题" },
        { id: 8, name: "标题" },

        { id: 9, name: "标题" },
      ],
      icon: [
        {
          id: 1,
          img: require("@/assets/images/index/indexicon1.jpg"),
          name: "限时抢购",
        },
        {
          id: 2,
          img: require("@/assets/images/index/indexicon1.jpg"),
          name: "限时抢购",
        },
        {
          id: 3,
          img: require("@/assets/images/index/indexicon1.jpg"),
          name: "限时抢购",
        },
        {
          id: 4,
          img: require("@/assets/images/index/indexicon1.jpg"),
          name: "商品分类",
        },
      ],
      rmtj: [
        { id: 1, name: "热门推荐" },
        { id: 2, name: "热门推荐" },
        { id: 3, name: "热门推荐" },
        { id: 4, name: "热门推荐" },
      ],
      rmhh: [
        {
          id: 1,
          img: require("@/assets/images/index/shop_4.jpg"),
          list: [
            {
              id: 1,
              p1: "雅诗兰黛染发膏60ml",
              p2: "￥123.00",
              p3: "已售800件",
              p4: "立即抢购",
            },
          ],
        },
        {
          id: 2,
          img: require("@/assets/images/index/shop_4.jpg"),
          list: [
            {
              id: 2,
              p1: "雅诗兰黛染发膏60ml",
              p2: "￥123.00",
              p3: "已售800件",
              p4: "立即抢购",
            },
          ],
        },
        {
          id: 3,
          img: require("@/assets/images/index/shop_4.jpg"),
          list: [
            {
              id: 3,
              p1: "雅诗兰黛染发膏60ml",
              p2: "￥123.00",
              p3: "已售800件",
              p4: "立即抢购",
            },
          ],
        },
      ],
      bannerlist: [],
      reemai: [],
      xinping: [],
      shangp: [],
    };
  },
  mounted() {
    this.lb();
    this.remai();
  },
  methods: {
    lb() {
      banner().then((res) => {
        if (res.data.code == 200) {
          this.bannerlist = res.data.list;
        }
      });
    },
    remai() {
      shangping().then((res) => {
        if (res.data.code == 200) {
          this.reemai = res.data.list[0].content;
          this.xinping = res.data.list[1].content;
          this.shangp = res.data.list[2].content;
          console.log(this.reemai);
        }
      });
    },

    dj(id) {
      this.num = id;
    },
    tz(int) {
      if (int == 3) {
        this.$router.push("/spfl");
      }
    },
    xq(id) {
      this.$router.push("/spxq?id=" + id);
    },
    suos() {
      this.$router.push("/spss");
    },
    onChange(index) {
      console.log("当前 Swipe 索引：" + index);
    },
  },
  components: {},
};
</script>

<style lang="" scoped>
@import "../../assets/css/index.css";
.tupian {
  height: 4rem;
  width: 100%;
}
</style>
