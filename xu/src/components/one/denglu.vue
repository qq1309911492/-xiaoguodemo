<template>
  <div>
    <div id="box">
      <div class="tou">
        <back class="ba"></back>
        <a href="">登录</a>
        <a href="" class="a2">注册</a>
      </div>
      <div class="main">
        <div class="clearfix">
          <p>手机号:</p>
          <input type="text" v-model="info.phone" :placeholder="sjh" />
          <span>{{ ts }}</span>
        </div>
        <div>
          <p>密码:</p>
          <input type="text" v-model="info.password" :placeholder="rgb" />
          <span>{{ mmm }}</span>
        </div>
        <span class="wj clearfix">
          <a href="">忘记密码</a>
        </span>
      </div>
      <div class="xyb">
        <button @click="dl">登录</button>
      </div>
    </div>
  </div>
</template>

<script>
import { denglu } from "../../util/axios/index";
import Vue from "vue";
import { Toast } from "vant";

Vue.use(Toast);
export default {
  data() {
    return {
      info: {
        phone: "",
        password: "",
      },

      sjh: "",
      ts: "",
      mm: "",
      mima: "",
      rgb: "",
      mmm: "",
      zq: false,
      zqq: false,
    };
  },
  methods: {
    dl() {
      if (this.info.phone == "") {
        this.sjh = "手机号不能为空";
      } else {
        this.zq = true;
      }
      if (this.info.password == "") {
        this.rgb = "密码不能为空";
      } else {
        this.zqq = true;
      }
      if (this.zq && this.zqq) {
        denglu(this.info).then((res) => {
          if (res.data.code == 200) {
            sessionStorage.setItem("info", JSON.stringify(res.data.list));
            this.$router.push('/wd')
            Toast({
              message: res.data.msg,
              position: "top",
            });
          } else {
            Toast({
              message: res.data.msg,
              position: "top",
            });
          }
        });
      }
      //

      // let {name,psw } = JSON.parse(localStorage.getItem('main'))
      //   if (this.name == '') {
      //     this.sjh = '手机号不能为空'
      // } else if (name != this.name) {
      //     this.ts = '手机号不正确'
      // }else{
      //     this.ts = ''
      //     this.zq=true
      // }
      // if (this.psw == '') {
      //     this.mima = '密码不能为空'
      // } else if (this.psw != psw) {
      //     this.mmm = '密码不正确'
      // }else{
      //     this.mmm = ''
      //     this.zqq=true
      // }

      // if(this.zq&&this.zqq){

      //  this.$router.push('/shouye')
      // }
    },
  },
  components: {},
};
</script>

<style lang="" scoped>
.ba {
  margin-left: 0.2rem;
  margin-top: 0.4rem;
}
.tou {
  width: 100%;
  height: 1.3rem;
  background-color: coral;
  display: flex;
  text-align: center;
}

.tou .a1 {
  flex: 0.3;
}

.tou .a2 {
  flex: 0.5;
}

.tou a {
  flex: 1;
  font-size: 0.4rem;
  line-height: 1.3rem;
  color: #fff;
}

.main {
  margin-top: 1.4rem;
}

.main div {
  width: 80%;
  border-bottom: 1px solid red;
  margin: 0 auto;

  margin-top: 0.6rem;
}

.main div p {
  display: inline-block;
  font-size: 0.3rem;
  line-height: 0.8rem;
  width: 1rem;
  text-align: justify;
  text-justify: inter-ideograph;
}

.main div .yzm {
  width: 1.6rem;
  display: inline-block;
  border-bottom: none;
}

.xyb {
  width: 75%;
  margin: 0 auto;

  margin-top: 0.6rem;
}

.xyb button {
  width: 100%;
  height: 1rem;
  margin: 0 auto;
  background-color: coral;
}

.ty {
  margin-left: 0.7rem;
  margin-top: 0.5rem;
}

.ty p {
  display: inline-block;
  margin-left: 0.1rem;
}

.wj {
  display: block;
  width: 80%;
  margin: 0 auto;
}

.wj a {
  float: right;
  margin-top: 0.4rem;
  color: #ccc;
}
</style>
