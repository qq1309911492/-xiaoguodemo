<template>
  <div>
    <div class="drow">
      <!-- 头部 -->
      <header class="head">
        <back></back>
        <a href="" class="logo">我的订单</a>
        <p>
          <span style="background: #fff"></span>
          <span style="background: #fff"></span>
          <span style="background: #fff"></span>
        </p>
      </header>
      <div v-if="info">
        <div class="tou">
          <div class="zuo clearfix">
            <div class="touxiang fl"></div>
            <div class="xx clearfix fl">
              <p class="fl name">欢迎用户：{{info.nickname}}</p>
              <p class="jb">V1</p>
            </div>
          </div>
          <div class="you">
            <a href="javascript:;" @click="duichu">退出登录</a>
          
          </div>
        </div>
        <ul class="navbar">
          <li>
            <a href="">
              <img src="@/assets/images/wddd/iconMine_1.jpg" alt="" />
              <p>全部订单</p>
            </a>
          </li>
          <li>
            <a href="">
              <img src="@/assets/images/wddd/iconMine_1.jpg" alt="" />
              <p>全部订单</p>
            </a>
          </li>
          <li>
            <a href="">
              <img src="@/assets/images/wddd/iconMine_1.jpg" alt="" />
              <p>全部订单</p>
            </a>
          </li>
        </ul>
        <div class="zong">
          <div class="main">
            <div class="dizhi clearfix">
              <img
                src="@/assets/images/wddd/iconMine_4.jpg"
                alt=""
                class="fl"
              />
              <a href="" class="fl">地址管理</a>
            </div>
            <div class="jiantou">
              <a href="">
                <img src="@/assets/images/wddd/arrowRight.jpg" alt="" />
              </a>
            </div>
          </div>
          <div class="main">
            <div class="dizhi clearfix">
              <img
                src="@/assets/images/wddd/iconMine_4.jpg"
                alt=""
                class="fl"
              />
              <a href="" class="fl">地址管理</a>
            </div>
            <div class="jiantou">
              <a href="" class="clearfix">
                <img
                  src="@/assets/images/wddd/arrowRight.jpg"
                  alt=""
                  class="fr"
                />
                <p>200余额</p>
              </a>
            </div>
          </div>
          <div class="main">
            <div class="dizhi clearfix">
              <img
                src="@/assets/images/wddd/iconMine_4.jpg"
                alt=""
                class="fl"
              />
              <a href="" class="fl">地址管理</a>
            </div>
            <div class="jiantou">
              <a href="">
                <img src="@/assets/images/wddd/arrowRight.jpg" alt="" />
              </a>
            </div>
          </div>
          <div class="main">
            <div class="dizhi clearfix">
              <img
                src="@/assets/images/wddd/iconMine_4.jpg"
                alt=""
                class="fl"
              />
              <a href="" class="fl">地址管理</a>
            </div>
            <div class="jiantou">
              <a href="">
                <img src="@/assets/images/wddd/arrowRight.jpg" alt="" />
              </a>
            </div>
          </div>
          <div class="main">
            <div class="dizhi clearfix">
              <img
                src="@/assets/images/wddd/iconMine_4.jpg"
                alt=""
                class="fl"
              />
              <a href="" class="fl">地址管理</a>
            </div>
            <div class="jiantou">
              <a href="">
                <img src="@/assets/images/wddd/arrowRight.jpg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <van-empty description="未登录">
          <van-button type="info" icon-position="right" to="/denglu">请去登录</van-button>
        </van-empty>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        info:''
    };
  },
  mounted(){
      this.info=sessionStorage.getItem('info')?JSON.parse(sessionStorage.getItem('info')):''
      console.log(this.info);
  },
  methods: {
      duichu(){
          sessionStorage.removeItem('info')
          this.$router.push('/shouye')

      }
  },
  components: {},
};
</script>

<style lang="" scoped>
@import "../../assets/css/wddd.css";
</style>
