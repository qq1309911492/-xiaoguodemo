<template>
  <div>
    <el-dialog
      :title="noshouw ? '添加菜单' : '编辑菜单'"
      :visible.sync="ishow"
      :before-close="camcel"
    >
      <el-form :model="form" :rules="rules">
        <el-form-item label="菜单名称" prop="title">
          <el-input v-model="form.title" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="上级菜单" prop="psw">
          <el-select
            v-model="form.pid"
            placeholder="请选择活动区域"
            @change="xz(form.pid)"
          >
            <el-option label="顶级菜单" :value="0"></el-option>
            <el-option
              v-for="item in aaa"
              :label="item.title"
              :value="item.id"
              :key="item.id"
            ></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="菜单类型">
          <el-radio v-model="form.type" :label="1" disabled>目录</el-radio>
          <el-radio v-model="form.type" :label="2" disabled>菜单</el-radio>
        </el-form-item>
        <el-form-item label="菜地图标" v-if="form.pid == 0">
          <el-select v-model="form.icon" placeholder="亲选择图标">
            <el-option
              v-for="item3 in icon"
              :label="item3"
              :value="item3"
              :key="item3"
            ></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="菜地地址" v-else>
          <!-- <el-input v-model="form.url"></el-input> -->

          <el-select v-model="form.url" placeholder="请选地址">
            <el-option
              v-for="item2 in acd"
              :label="item2.name"
              :value="item2.path"
              :key="item2.path"
            ></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="状态">
          <el-switch
            v-model="form.status"
            active-color="#13ce66"
            inactive-color="#ff4949"
            :active-value="1"
            :inactive-value="2"
          >
          </el-switch>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <template slot-scope="">
          <div>
            <el-button @click="qx">取 消</el-button>
            <el-button type="primary" @click="qd" v-if="noshouw"
              >确 定</el-button
            >
            <el-button type="primary" v-else @click="bianji">编 辑</el-button>
          </div>
        </template>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { apd } from "../router/index";
import { getadd, setadd, onelist, edit } from "../util/axios/index";
import { mapActions, mapGetters } from "Vuex";
export default {
  props: ["ishow", "noshouw", "idd"],
  a: false,
  data() {
    return {
      icon: [
        "el-icon-user",
        "el-icon-s-tools",
        "el-icon-menu",
        "el-icon-folder-opened",
      ],
      acd: [],
      form: {
        title: "",
        pid: 0,
        icon: "",
        type: 1,
        url: "",
        status: 2,
      },
      rules: {
        //用户名验证
        title: [
          { required: true, message: "请输入菜单名称", trigger: "blur" },
          {
            min: 2,
            max: 20,
            message: "长度在 2 到 20 个字符",
            trigger: "blur",
          },
        ],
        //密码验证
        psw: [{ required: true, message: "请选择上级菜单", trigger: "blur" }],
      },
    };
  },
  methods: {
    qx() {
      this.$emit("qd", this.a);
      this.$emit("bjqx", true);
    },
    camcel() {
      this.qx();
    },
    qd() {
      // console.log(this.form);
      if (this.form.title.trim() == "") {
        alert("不能为空");
        return;
      }
      getadd(this.form).then((res) => {
        if (res.data.code == 200) {
          this.$message.success(res.data.msg);
          this.form = {
            title: "",
            pid: 0,
            icon: "",
            type: 1,
            url: "",
            status: 2,
          };
          this.qx();
          this.add();
        } else {
          this.$message.success(res.data.msg);
        }
      });
    },
    xz(id) {
      if (this.form.pid == 0) {
        this.form.type = 1;
      } else {
        this.form.type = 2;
      }
    },

    look(id) {
      onelist({ id }).then((res) => {
        this.form = res.data.list;
        this.form.id = id;
      });
    },
    bianji() {
      edit(this.form).then((res) => {
        if (res.data.code == 200) {
          this.$message.success(res.data.msg);
        } else {
          this.$message.success(res.data.msg);
        }
        this.qx();
        this.add();
      });
    },
    ...mapActions(["add"]),
  },
  mounted() {
    this.acd = apd;
  },
  computed: {
    ...mapGetters(["aaa"]),
  },
  components: {},
};
</script>

<style lang="" scoped>
</style>
