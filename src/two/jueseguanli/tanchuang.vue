<template>
  <div>
    <el-button type="text"></el-button>

    <el-dialog
      :title="nvr.nvrshow ? '添加角色' : '编辑角色'"
      :visible.sync="nvr.ishow"
    >
      <el-form :rules="rules" :model="form">
        <el-form-item label="角色名称" prop="rolename">
          <el-input v-model="form.rolename" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="角色权限" prop="menus" >
          <br />
          <el-tree
            :data="aaa"
            default-expand-all
            node-key="id"
            check-strictly
            ref="tree"
            highlight-current
            :props="{
              children: 'children',
              label: 'title',
            }"
            show-checkbox
          >
          </el-tree>
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
        <el-button @click="qx">取 消</el-button>
        <el-button type="primary" @click="tj" v-if="nvr.nvrshow"
          >确 定</el-button
        >
        <el-button type="primary" v-else @click="bianji">编 辑</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { JSadd, JSonelist, JSedit } from "../../util/axios/index";
export default {
  props: ["nvr"],
  data() {
    return {
      dialogFormVisible: true,
      form: {
        rolename: "",
        menus: "",
        status: 1,
      },
      rules: {
        //用户名验证
        rolename: [
          { required: true, message: "请输入菜单名称", trigger: "blur" },
          {
            min: 2,
            max: 20,
            message: "长度在 2 到 20 个字符",
            trigger: "blur",
          },
        ],
        //密码验证
        menus: [{ required: true, message: "请选择", trigger: "blur" }],
      },
    };
  },
  methods: {
    qx() {
      this.$emit("bjqx", true);
      this.$emit("qx", false);
    },
    tj() {
      this.form.menus = this.$refs.tree.getCheckedKeys().join(",");
      JSadd(this.form).then((res) => {
        if (res.data.code == 200) {
          this.$message.success(res.data.msg);
          this.qx();
          this.add();
          this.form = {
            rolename: "",
            menus: "",
            status: 1,
          };
          this.$refs.tree.setCheckedKeys([])
        } else {
          this.$message.success(res.data.msg);
        }
      });
    },
    look(id) {
      JSonelist({ id }).then((res) => {
        if (res.data.code == 200) {
          this.form = res.data.list;
          this.$refs.tree.setCheckedKeys(this.form.menus.split(","));
          this.form.id = id;
        }
      });
    },
    bianji() {
      JSedit(this.form).then((res) => {
        if (res.data.code == 200) {
          this.$message.success(res.data.msg);
          this.qx();
          this.add();
        } else {
          this.$message.error("错了哦，这是一条错误消息");
        }
      });
    },
    ...mapActions({
      add: "JSadd/add",
    }),
  },
  mounted() {},
  computed: {
    ...mapGetters({
      ast: "/JSadd/aaa",
    }),
    ...mapGetters(["aaa"]),
  },
  components: {},
};
</script>

<style lang="" scoped>
</style>
