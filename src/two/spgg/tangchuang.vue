<template>
  <div>
    <el-dialog
      :title="nav.noshouw ? '添加规格' : '编辑规格'"
      :visible.sync="nav.ishow"
    >
      <el-form :model="form" :rules="rules">
        <el-form-item label="规格名称" prop="specsname">
          <el-input v-model="form.specsname"></el-input>
        </el-form-item>
        <el-form-item
          label="规格属性"
          v-for="(item, index) in array"
          :key="index"
        >
          <el-input v-model="item.value" class="one"></el-input>
          <el-button type="primary" @click="xz(index)" v-if="index == 0"
            >新增规格属性</el-button
          >
          <el-button type="primary" v-else @click="shanchu(item)"
            >删除</el-button
          >
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
        <el-button type="primary" @click="BIANJI" v-if="!nav.noshouw"
          >编 辑</el-button
        >
        <el-button type="primary" @click="tj" v-else>确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { SPGGadd, SPGGonelist, SPGGedit } from "../../util/axios/index";
import { mapActions, mapGetters } from "vuex";
export default {
  props: ["nav"],
  data() {
    return {
      dialogFormVisible: true,
      form: {
        attrs: "",
        specsname: "",
        status: "1",
      },
      array: [
        {
          value: "",
        },
      ],
       rules: {
        //用户名验证
        specsname: [
          { required: true, message: "请选择菜单名称", trigger: "blur" },
          {
            min: 2,
            max: 20,
            message: "长度在 2 到 20 个字符",
            trigger: "blur",
          },
        ],
        //密码验证
     
      },
    
    };
  },
  methods: {
    xz(index) {
      if (this.array.length <= 5) {
        this.array.push({
          value: "",
        });
      } else {
        this.$message.warning("周凯旋跟你说只能添加五条！！！！！你太笨了");
      }
    },
    qx() {
      this.$emit("bjqx", true);
      this.$emit("qx", false);
      this.chongzhi();
      this.form = {
        attrs: "",
        specsname: "",
        status: "1",
      };
    },
    chongzhi() {
      this.array = [
        {
          value: "",
        },
      ];
    },
    tj() {
      let ab = this.array.map((item) => {
        return item.value;
      });
      this.form.attrs = ab.join(",");
      // SPGGadd(this.form).then((res) => {
      //   console.log(res);
      // });

      SPGGadd(this.form).then((res) => {
        if (res.data.code == 200) {
          this.$message.success(res.data.msg);

          this.qx();
          this.add();
          this.zong();
        } else {
          this.$message.success(res.data.msg);
        }
      });
    },
    look(id) {
      SPGGonelist({ id }).then((res) => {
        console.log(res.data.list[0]);
        let data = res.data.list[0];
        this.form = data;
        data.attrs.map((item, index) => {
          console.log(item);
          if (index == 0) {
            this.array[0].value = item;
          } else {
            this.array.push({
              value: item,
            });
          }
        });
      });
      // console.log(ex,'look');
    },
    shanchu(item) {
      var index = this.array.indexOf(item);
      if (index !== -1) {
        this.array.splice(index, 1);
      }
    },
    BIANJI() {
      let ab = this.array.map((item) => {
        return item.value;
      });
      this.form.attrs = ab.join(",");
      SPGGedit(this.form).then((res) => {
        if (res.data.code == 200) {
          this.$message({
            type: "success",
            message: "删除成功!",
          });
          this.qx();
          this.add();
        } else {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        }
      });
    },
    ...mapActions({
      add: "SPGG/add",
    }),

    ...mapActions({
      zong: "SPGG/zong",
    }),
  },
  computed: {
    ...mapGetters({
      zongshu: "SPGG/zongshu",
    }),
  },
  components: {},
};
</script>

<style lang="" scoped>
.one {
  width: 70%;
}
</style>
