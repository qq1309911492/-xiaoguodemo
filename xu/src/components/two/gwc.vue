<template>
  <div>
    <router-view></router-view>

    <!-- 头部 -->
    <header class="head">
      <back></back>
      <a href="" class="logo">购物车</a>
      <p></p>
    </header>
    <div>
      <div v-if="main">
        <div>
          <div v-for="item in main" :key="item.id">
            <van-swipe-cell class="box">
              <input type="checkbox" v-model="item.qxx" @change="at" />

              <van-card
                :num="item.num"
                :price="item.price"
                desc="描述信息"
                :title="item.goodsname"
                class="goods-card"
                :thumb="
                  item.img
                    ? $url + item.img
                    : 'https://img.yzcdn.cn/vant/cat.jpeg'
                "
              >
                <template #footer>
                  <div>
                    <van-stepper v-model="item.num" @click="ddd" />
                  </div>
                </template>
              </van-card>

              <template #right>
                <van-button
                  square
                  text="删除"
                  type="danger"
                  class="delete-button"
                  @click="shanchu(item.id)"
                />
              </template>
            </van-swipe-cell>
          </div>
        </div>
        <div>
          <van-submit-bar :price="jisuan" button-text="提交订单" class="tou">
            <template>
              <div>
                <!-- <van-checkbox v-model="checked" @change="a()"></van-checkbox> -->
                <input type="checkbox" v-model="checked" @change="dqx()" />
              </div>
            </template>
          </van-submit-bar>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { gwclist, gwcdelete } from "../../util/axios/index";
export default {
  data() {
    return {
      xx: "",
      qx: false,
      s: -1,
      value: 1,
      checked: false,
      main: [],
      ck: [],
      numm: 0,
    };
  },
  methods: {
    at(x) {
      this.checked = this.main.every((item) => item.qxx);
    },
    dqx() {
      this.checked = this.checked;
      this.main.map((item) => (item.qxx = this.checked));
    },
    shanchu(id) {
      let idd = id;
      gwcdelete({ id }).then((res) => {
        console.log(res);

        this.gwcliebiao();
      });
    },

    gwcliebiao() {
      gwclist({ uid: JSON.parse(sessionStorage.getItem("info")).uid }).then(
        (res) => {
          if (res.data.code == 200) {
            if (res.data.list) {
              let b = res.data.list.map((item, index) => {
           
                item.qxx = false;
                return item;
              });
              this.main = b;
            } else {
              this.main = res.data.list;
            }
          }
        
        }
      );
    },
    zong() {
      console.log(this.main);
    },
    ddd() {},
  },
  mounted() {
    this.gwcliebiao();
  },
  components: {},
  computed: {
    age() {
      let a = 0;
      this.msg.forEach((item) => {
        item.zuo.forEach((item2) => {
          a += item2.s2;
        });
      });
      return a;
    },
    gj() {
      let a = 0;

      this.msg.forEach((item) => {
        item.zuo.forEach((item2) => {
          a += item2.s2 * item2.p3;
        });
      });
      return a;
    },
    jisuan() {
     let age=0
      this.main.map((item) => {
        age+= item.num * item.price;
        console.log(item.num);
        console.log(item.price);
        console.log(age,'123');
      });
      let b = age + "00";
      return Number(b);
    
    },
  },
};
</script>

<style lang="" scoped>
@import "../../assets/css/gwc.css";
.goods-card {
  margin: 0;
  flex: 1;
}

.delete-button {
  height: 100%;
}
.tou {
  margin-bottom: 0.5rem;
}
.aa {
  z-index: 10;
}
/* .box {
  display: flex;
}
.a2 {
  width: 0.4rem;
} */
</style>
