<template>
  <div class="bj">
    <el-form
      :model="main"
      label-width="100px"
      class="demo-ruleForm"
      :rules="rules"
      ref="bd"
    >
      <h1>login</h1>
      <el-form-item label="姓名" prop="username" class="inp">
        <el-input v-model="main.username" clearable></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password" class="inp">
        <el-input v-model="main.password" show-password clearable></el-input>
      </el-form-item>

      <el-button @click="login('bd')" class="dl">登录</el-button>
    </el-form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { GLYdlogin } from "../util/axios/index";
export default {
  data() {
    return {
      main: {
        username: "",
        password: "",
      },
      rules: {
        //用户名验证
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          {
            min: 2,
            max: 15,
            message: "长度在 2 到 15 个字符",
            trigger: "blur",
          },
        ],
        //密码验证
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 6,
            max: 18,
            message: "长度在 6 到 18 个字符",
            trigger: "blur",
          },
        ],
      },
      ...mapActions(["lflist"]),
    };
  },
  methods: {
    login(bd) {
      this.$refs[bd].validate((valid) => {
        if (valid) {
          GLYdlogin(this.main).then((res) => {
            if (res.data.code == 200) {
              this.$message.success(res.data.msg);
              this.lflist(res.data.list);
              this.$router.push("/index");
            } else {
              this.$message.error(res.data.msg);
            }
          });
        }
      });
    },
  },
  components: {},
};
</script>

<style lang="stylus" scoped>
@import '../stylus/index.styl';

.bj {
  background: $bgccc;

  .demo-ruleForm {
    width: 600px;
    position: absolute;
    left: 30%;
    top: 40%;
    background: $bgccc;

    .inp {
      margin-right: 20px;
    }

    .dl {
      margin: 0 auto;
    }
  }
}
</style>
