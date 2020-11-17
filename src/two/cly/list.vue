<template>
  <div>
    <el-table :data="asd" border style="width: 100%">
      <el-table-column prop="uid" label="用户编号" width="180">
      </el-table-column>
      <el-table-column prop="username" label="用户名称" width="180">
      </el-table-column>
      <el-table-column prop="rolename" label="所属角色"> </el-table-column>
      <el-table-column prop="status" label="状态">
        <template>
          <div>
            <el-switch
              v-model="value"
              active-color="#13ce66"
              inactive-color="#ff4949"
              active-value="1"
              inactive-value="2"
            >
            </el-switch>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="address" label="操作">
        <template slot-scope="item">
          <div>
            <el-button type="success" @click="bj(item.row.uid)">编辑</el-button>
            <el-button type="danger" @click="sc(item.row.uid)">删除</el-button>
          </div>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="zong1"
      :page-size="sz"
      
      @current-change="chan"
    >
    </el-pagination>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { GLYdelet } from "../../util/axios/index";
export default {
  data() {
    return {
      tableData: [],
      value: 1,
    };
  },
  methods: {
    ...mapActions({
      add: "gly/add",
    }),
    ...mapActions({
      zong: "gly/zong",
    }),
    ...mapActions({
      page: "gly/page",
    }),

    chan(ax) {
      this.page(ax);
    },
    sc(uid) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })

        .then(() => {
          GLYdelet({ uid }).then((res) => {
            if (res.data.code == 200) {
              this.$message({
                type: "success",
                message: "删除成功!",
              });
              this.zong();
              this.add();
            }
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
    bj(id) {
      this.$emit("show", false);
      this.$emit("idd", id);
    },
  },
  computed: {
    ...mapGetters({
      asd: "gly/asd",
    }),
    ...mapGetters({
      zong1: "gly/zongshu",
    }),
    ...mapGetters({
      sz: "gly/size",
    }),
  },
  mounted() {
    this.add();
    this.zong();
  },
  components: {},
};
</script>

<style lang="" scoped>
.el-pagination {
  float: right;
}
</style>
