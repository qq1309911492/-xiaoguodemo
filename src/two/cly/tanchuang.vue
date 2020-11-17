<template>
  <div>
    <el-dialog
      :title="nav.navshow ? '添加管理员' : '编辑管理员'"
      :visible.sync="nav.ishow"
    >
      <el-form :model="form" :rules="rules">
        <el-form-item label="所属角色" :label-width="formLabelWidth"  prop="roleid" >
          <el-select v-model="form.roleid">
            <el-option
              v-for="item in asd"
              :key="item.id"
              :label="item.rolename"
              :value="item.id"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="用户名称" :label-width="formLabelWidth" prop="username">
          <el-input v-model="form.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" :label-width="formLabelWidth">
          <el-input v-model="form.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="状态" :label-width="formLabelWidth">
          <el-switch
            v-model="form.status"
            active-color="#13ce66"
            inactive-color="#ff4949"
            active-value="1"
            inactive-value="2"
          >
          </el-switch>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="qx">取 消</el-button>
        <el-button type="primary" @click="qd" v-if="nav.navshow"
          >确 定</el-button
        >
        <el-button type="primary" v-else @click="bianj">编 辑</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { GLYadd, GLYonelist, GLYreadit } from "../../util/axios/index";
export default {
  props: ["nav"],
  data() {
    return {
      form: {
        roleid: "",
        username: "",
        password: "",
        status: "1",
      },
      formLabelWidth: "120px",
      rules: {
        //用户名验证
        roleid: [
          { required: true, message: "请选择菜单名称", trigger: "blur" },
          {
            min: 2,
            max: 20,
            message: "长度在 2 到 20 个字符",
            trigger: "blur",
          },
        ],
        //密码验证
        username: [{ required: true, message: "请输入账号", trigger: "blur" }],
      },
    };
  },
  methods: {
    qx() {
      this.$emit("shou", false);
      this.$emit("shw", true);
    },
    qd() {
      console.log(this.form);
      GLYadd(this.form).then((res) => {
        if (res.data.code == 200) {
          this.$message.success(res.data.msg);
          this.qx();
          this.addd();
          this.zong();
        } else {
          this.$message.error("错了哦，这是一条错误消息");
        }
      });
    },
    ...mapActions({
      add: "JSadd/add",
    }),
    ...mapActions({
      addd: "gly/add",
    }),
    ...mapActions({
      zong: "gly/zong",
    }),
    look(uid) {
      GLYonelist({ uid }).then((res) => {
        this.form = res.data.list;
        this.form.id = uid;
      });
    },
    bianj() {
      GLYreadit(this.form).then((res) => {
        if (res.data.code == 200) {
          this.$message.success(res.data.msg);
          this.qx();
          this.addd();
        } else {
          this.$message.error(res.data.msg);
        }
      });
    },
  },
  mounted() {
    this.add();
  },
  computed: {
    ...mapGetters({
      asd: "JSadd/asd",
    }),
  },
  components: {},
};
</script>

<style lang="" scoped>
</style>
