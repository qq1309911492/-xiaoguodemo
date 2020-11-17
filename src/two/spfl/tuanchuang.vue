<template>
  <div>
    <el-dialog
      :title="nav.noshouw ? '添加菜单' : '编辑菜单'"
      :visible.sync="nav.ishow"
    >
      <el-form :model="form" :rules="rules" ref="qd">
        <el-form-item label="上级分类" prop="pid">
          <el-select v-model="form.pid" placeholder="请选择上级分类">
            <el-option label="顶级菜单" :value="0"></el-option>
            <el-option
              v-for="item in asd"
              :label="item.catename"
              :value="item.id"
              :key="item.id"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="分类名称" prop="catename">
          <el-input v-model="form.catename" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="上传图片 " prop="title">
          <el-upload
            v-model="form.img"
            action="#"
            list-type="picture-card"
            :on-preview="onok"
            :on-remove="nomove"
            :auto-upload="false"
            :on-change="igg"
            :file-list="filelist"
            :limit="1"
            :on-exceed="handleExceed"
          >
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="" />
          </el-dialog>
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
            <el-button type="primary" @click="qd('qd')" v-if="nav.noshouw"
              >确 定</el-button
            >
            <el-button type="primary" v-else @click="bsj">编 辑</el-button>
          </div>
        </template>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { SPFLadd, SPFoneLlist, SPFLedit } from "../../util/axios/index";
import { mapActions, mapGetters } from "vuex";
export default {
  props: ["nav"],
  data() {
    return {
      dialogImageUrl: "",
      dialogVisible: false,
      filelist: [],
      form: {
        catename: "",
        pid: 0,
        img: "",
        status: 1,
      },
      rules: {
        //用户名验证
        catename: [
          { required: true, message: "请选择菜单名称", trigger: "blur" },
          {
            min: 2,
            max: 20,
            message: "长度在 2 到 20 个字符",
            trigger: "blur",
          },
        ],
        //密码验证
        pid: [{ required: true, message: "请选择菜单名称  ", trigger: "blur" }],
      },
    };
  },
  methods: {
    onok(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    nomove(file, fileList) {
      console.log(file, fileList);
    },
    qx() {
      this.$emit("bjqx", true);
      this.$emit("qx", false);
    },
    qd(qd) {
      this.$refs[qd].validate((valid) => {
        if (valid) {
          console.log(this.form);
          let file = new FormData();
          let data = this.form;

          for (let i in data) {
            file.append(i, data[i]);
          }
          // file.append("img", this.urll);
          SPFLadd(file).then((res) => {
            if (res.data.code == 200) {
              this.$message.success(res.data.msg);
              this.form = {
                catename: "",
                pid: 0,
                img: "",
                status: 1,
              };
              this.filelist = [];
              this.qx();
              this.add();
            } else {
              this.$message.success(res.data.msg);
            }
          });
        }
      });
    },
    igg(filie) {
      this.form.img = filie.raw;
     
    },

    ...mapActions({
      add: "SPFL/add",
    }),
    look(id) {
      SPFoneLlist({ id }).then((res) => {
        this.form = res.data.list;
        this.filelist = this.form.img
          ? [{ url: `${this.$url}${this.form.img}` }]
          : [];
        this.form.id = id;
      });
    },
    bsj() {
      let file = new FormData();
      let data = this.form;

      for (let i in data) {
        file.append(i, data[i]);
      }
      SPFLedit(file).then((res) => {
        if (res.data.code == 200) {
          this.$message.success(res.data.msg);
          this.form = {
            catename: "",
            pid: 0,
            img: "",
            status: 1,
          };
          this.form.img = this.form.img ? this.form.img : this.form.img;
          this.filelist = [];
          this.qx();
          this.add();
        } else {
          this.$message.error(res.data.msg);
        }
      });
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 1 个文件，本次选择了 ${files.length} 个文件，共选择了 ${
          files.length + fileList.length
        } 个文件`
      );
    },
  },
  computed: {
    ...mapGetters({
      asd: "SPFL/asd",
    }),
  },
  mounted() {
    this.add();
  },
  components: {},
};
</script>

<style lang="" scoped>
</style>
