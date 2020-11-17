<template>
  <div>
    <el-dialog
      :title="nav.navshow ? '商品管理' : '商品编辑'"
      :visible.sync="nav.ishow"
      @opened="fuwenben"
    >
      <el-form :model="form" :rules="rules">
        <el-form-item label="一级分类" prop="first_cateid">
          <el-select
            v-model="form.first_cateid"
            placeholder="请选择活动区域"
            @change="one(false)"
          >
            <el-option
              v-for="item in asd"
              :key="item.id"
              :label="item.catename"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="二级分类" prop="second_cateid">
          <el-select v-model="form.second_cateid" placeholder="请选择活动区域">
            <el-option
              v-for="item2 in two"
              :key="item2.id"
              :label="item2.catename"
              :value="item2.id"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="活动名称" prop="goodsname">
          <el-input v-model="form.goodsname" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="价格" prop="price">
          <el-input v-model.number="form.price" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="价格" prop="market_price">
          <el-input
            v-model.number="form.market_price"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="上传图片">
          <el-upload
            v-model="form.img"
            action="#"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove"
            :file-list="filelist"
            :auto-upload="false"
            :on-change="tp"
            :limit="1"
            :on-exceed="handleExceed"
          >
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="" />
          </el-dialog>
        </el-form-item>
        <el-form-item label="商品规格" prop="specsid">
          <el-select
            v-model="form.specsid"
            placeholder="请选择活动区域"
            @change="erji(false)"
          >
            <el-option
              v-for="item5 in List"
              :key="item5.id"
              :label="item5.specsname"
              :value="item5.id"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="商品规格" prop="specsattr">
          <el-select
            v-model="form.specsattr"
            multiple
            placeholder="请选择活动区域"
          >
            <el-option
              v-for="item3 in three"
              :key="item3"
              :label="item3"
              :value="item3"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="是否热卖">
          <el-radio v-model="form.isnew" :label="1">是</el-radio>
          <el-radio v-model="form.isnew" :label="2">否</el-radio>
        </el-form-item>
        <el-form-item label="是否热卖推荐">
          <el-radio v-model="form.ishot" :label="1">是</el-radio>
          <el-radio v-model="form.ishot" :label="2">否</el-radio>
        </el-form-item>
        <el-form-item label="商品描述">
          <div id="fwb"></div>
        </el-form-item>
        <el-form-item label="状态">
          <el-switch
            v-model="form.status"
            active-color="#13ce66"
            inactive-color="#ff4949"
            :active-value="1"
            :inactive-value="2"
            :limit="1"
            :on-exceed="handleExceed"
          >
          </el-switch>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="qx">取 消</el-button>
        <el-button type="primary" @click="qd" v-if="nav.navshow"
          >确 定</el-button
        >
        <el-button type="primary" v-else @click="bsj">编 辑</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import E from "wangeditor";
import { mapGetters, mapActions } from "vuex";
import { SPGLadd, SPGLonelist, SPGLedit } from "../../util/axios/index";

export default {
  props: ["nav"],
  data() {
    return {
      rules: {
        goodsname: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        first_cateid: [
          { required: true, message: "请选择活动区域", trigger: "change" },
        ],
        second_cateid: [
          { required: true, message: "请选择活动区域", trigger: "change" },
        ],
        sepcsid: [
          { required: true, message: "请选择活动区域", trigger: "change" },
        ],
        sepcsattr: [
          { required: true, message: "请选择活动区域", trigger: "change" },
        ],
        price: [{ required: true, message: "请输入数字", trigger: "blur" }],
        market_price: [
          { required: true, message: "请输入数字", trigger: "blur" },
        ],
        type: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个活动性质",
            trigger: "change",
          },
        ],
        resource: [
          { required: true, message: "请选择活动资源", trigger: "change" },
        ],
        desc: [{ required: true, message: "请填写活动形式", trigger: "blur" }],
      },
      dialogVisible: false,
      dialogImageUrl: "",
      dialogFormVisible: true,
      filelist: [],
      form: {
        first_cateid: "",
        second_cateid: "",
        goodsname: "",
        price: "",
        specsid: "",
        specsattr: "",
        market_price: "",
        isnew: "",
        img: "",
        ishot: "",
        status: "1",
        description: "",
      },
      fuwb: null,
      two: [],
      three: [],
      urll: "",
    };
  },
  methods: {
    fuwenben() {
      console.log("123");
      this.fuwb = new E("#fwb");
      console.log(this.fuwb);
      this.fuwb.create();
      this.fuwb.txt.html(this.form.description);
    },

    qx() {
      this.$emit("qx", false);
      this.$emit("bjs", true);
      this.form = {
        first_cateid: "",
        second_cateid: "",
        goodsname: "",
        price: "",
        img: "",
        specsid: "",
        specsattr: "",
        market_price: "",
        isnew: "",
        ishot: "",
        status: "1",
        description: "",
      };
      // this.filelist = [];
    },
    ...mapActions({
      add: "SPFL/add",
      addd: "SPGG/add",
      ad: "SPGL/add",
      zong: "SPGL/zong",
    }),
    one(ex) {
      let idd = this.asd.findIndex((item, i) => {
        return this.form.first_cateid == item.id;
      });

      this.two = this.asd[idd].children;
      if (!ex) {
        this.form.second_cateid = "";
      }
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    tp(filie) {
      this.form.img = filie.raw;
    },
    erji(ex) {
      let exx = this.List.findIndex((item) => item.id == this.form.specsid);
      this.three = this.List[exx].attrs;
      console.log(this.three);
      if (!ex) {
        this.form.specsattr = "";
      }
    },
    qd() {
      // this.form.specsattr = this.form.specsattr
      //   ? this.form.specsattr.join(",")
      //   : "";
      this.form.description = this.fuwb.txt.html();
      let data = this.form;
      let file = new FormData();
      for (let i in data) {
        file.append(i, data[i]);
      }
      SPGLadd(file).then((res) => {
        console.log(res);
        if (res.data.code == 200) {
          this.qx();
          this.ad();
          this.zong();
        }
      });
    },
    look(id) {
      SPGLonelist({ id }).then((res) => {
        this.form = res.data.list;
        this.fileList = this.form.img
          ? [{ url: `${this.$url}${this.form.img}` }]
          : [];
        this.form.specsattr = this.form.specsattr
          ? this.form.specsattr.split(",")
          : [];
        this.form.id = id;
        this.one(true);
        // this.form.specsattr = this.form.specsatt
        //   ? this.form.specsatt.split(",")
        //   : [];
      });
    },
    bsj() {
      this.form.description = this.fuwb.txt.html();
      let file = new FormData();
      let data = this.form;
      for (let i in data) {
        file.append(i, data[i]);
      }
      SPGLedit(file).then((res) => {
        if (res.data.code == 200) {
          this.qx();
          this.ad();
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
      List: "SPGG/List",
      list: "SPGL/List",
    }),
  },

  mounted() {
    this.add();
    this.addd();
  },
  components: {},
};
</script>

<style lang="" scoped>
</style>
