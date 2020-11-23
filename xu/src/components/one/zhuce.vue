<template>
  <div>
    <div id="box">
      <div class="tou">
        <back class="ba"></back>
        <a href="">注册</a>
        <a href="" class="a2">登录</a>
      </div>
      <div class="main">
        <div class="clearfix">
          <p>昵称:</p>
          <input type="text" v-model="name" :placeholder="name1" />
        </div>
        <div>
          <p>手机号:</p>
          <input type="text" v-model="ipom" :placeholder="ipom1" />
        </div>
        <div>
          <p>密码:</p>
          <input type="text" v-model="psw" :placeholder="psw1" />
        </div>
        <div>
          <p>验证码:</p>
          <input type="text" v-model="yzm" :placeholder="yzm1" />
          <button class="yzm" @click="ym">提交验证码</button>
        </div>
      </div>
      <div class="xyb">
        <button @click="tj">下一步</button>
      </div>
      <div class="ty">
        <input type="checkbox" v-model="xy" />
        <p>我已阅读并同意使用条款和隐私政策</p>
      </div>
    </div>
  </div>
</template>

<script>
import {zhuce} from '../../util/axios/index'
export default {
  data() {
    return {
      name: "",
      ipom: "",
      psw: "",
      yzm: "",
      xy: true,
      name1: "",
      ipom1: "",
      psw1: "",
      yzm1: "",
      yms: 3,
    };
  },
  methods: {
    tj() {
      if (this.name == ""||this.ipom == ""||this.psw == "") {
        if (this.name == "") {
          this.name1 = "用户名不能为空";
        }
        if (this.ipom == "") {
          this.ipom1 = "手机号不能为空";
        }
        if (this.psw == "") {
          this.psw1 = "密码不能为空";
        }
      }else{
        let main={
            nickname:this.name,
            phone:this.ipom,
            password:this.psw
        }
        zhuce(main).then(res=>{
          console.log(res);
        })
        //  localStorage.setItem('main', JSON.stringify(main))
          this.$router.push('/denglu')
      }
    },
    ym(e) {
      let time = null;
      time = setInterval(() => {
        e.target.innerHTML = "重新发送" + "(" + this.yms-- + ")";
        e.target.disabled = true;
        if (this.yms < 0) {
          clearInterval(time);
          e.target.innerHTML = "重新发送";
          this.yms = 3;
          e.target.disabled = false;
        }
      }, 1000);
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
</style>
