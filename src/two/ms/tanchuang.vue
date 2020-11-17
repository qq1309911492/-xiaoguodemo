<template>
  <div>
    <el-dialog
      :title="nav.navshow ? '添加活动' : '编辑活动'"
      :visible.sync="nav.ishow"
    >
      <el-form :model="form">
        <el-form-item label="秒杀名称">
          <el-input v-model="form.title" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="秒杀时间">
          <el-date-picker
            v-model="value1"
            type="datetimerange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          >
          </el-date-picker>
        </el-form-item>
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
        <el-form-item label="二级分类">
          <el-select
            v-model="form.second_cateid"
            placeholder="请选择活动区域"
            @change="three(false)"
          >
            <el-option
              v-for="item2 in two"
              :key="item2.id"
              :label="item2.catename"
              :value="item2.id"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="商品" prop="second_cateid">
          <el-select v-model="form.goodsid" placeholder="请选择活动区域">
            <el-option
              v-for="item3 in four"
              :key="item3.id"
              :label="item3.goodsname"
              :value="item3.id"
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
        <el-button @click="qx">取 消</el-button>
        <el-button type="primary" @click="qd" v-if="nav.navshow"
          >确 定</el-button
        >
        <el-button type="primary" v-else @click="bj">编 辑</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import {
  SPGLadd,
  SPGLonelist,
  SPGLedit,
  SPGLlist,
  MSadd,
  MSonelist,
  MSedit,
} from "../../util/axios/index";
export default {
  props: ["nav"],
  data() {
    return {
      form: {
        title: "",
        first_cateid: "",
        goodsid: "",
        second_cateid: "",
        begintime: "",
        endtime: "",
        status: "1",
      },
      value1: [],
      two: [],
      four: [],
    };
  },
  methods: {
    qx() {
      (this.form = {
        title: "",
        first_cateid: "",
        goodsid: "",
        second_cateid: "",
        begintime: "",
        endtime: "",
        status: "1",
      }),
        (this.value1 = []);
      this.$emit("tr", true);
      this.$emit("qx", false);
    },
    qd() {
      this.form.begintime = new Date(this.value1[0]).getTime();
      this.form.endtime = new Date(this.value1[1]).getTime();
      MSadd(this.form).then((res) => {
        if (res.data.code == 200) {
          this.$message.success(res.data.msg);
          this.qx();
          this.MS();
        } else {
          this.$message.success(res.data.msg);
        }
      });
    },
    one(ex) {
      let idd = this.asd.findIndex((item, i) => {
        return this.form.first_cateid == item.id;
      });
      this.two = this.asd[idd].children;
      if (!ex) {
        this.form.second_cateid = "";
        this.form.goodsid = "";
      }
    },
    three(ex) {
      SPGLlist({
        fid: this.form.first_cateid,
        sid: this.form.second_cateid,
      }).then((res) => {
        if (res.data.code == 200) {
          this.four = res.data.list;
        }
        console.log(this.four);
        if (!ex) {
          this.form.goodsid = "";
        }
      });
    },
    look(id) {
      MSonelist({ id }).then((res) => {
        this.form = res.data.list;
        this.value1 = [
          new Date(parseFloat(res.data.list.begintime)),
          new Date(parseFloat(res.data.list.endtime)),
        ];
        this.form.id = id;
        this.one(true);
        this.three(true);
      });
      console.log("look");
    },
    bj() {
      MSedit(this.form).then((res) => {
        console.log(res);
        if (res.data.code == 200) {
          this.$message.success(res.data.msg);
          this.qx();
          this.MS();
        } else {
          this.$message.success(res.data.msg);
        }
      });
    },
    ...mapActions({
      add: "SPFL/add",
      addd: "SPGG/add",
      ad: "SPGL/add",
      MS: "MS/add",
    }),
  },
  mounted() {
    this.add();
    this.addd();
  },
  computed: {
    ...mapGetters({
      asd: "SPFL/asd",
      List: "SPGG/List",
      list: "SPGL/List",
    }),
  },

  components: {},
};
</script>

<style lang="" scoped>
</style>
