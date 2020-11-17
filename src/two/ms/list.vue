<template>
  <div>
    <el-table :data="asd" border style="width: 100%">
      <el-table-column prop="id" label="角色编号" width="180">
      </el-table-column>
      <el-table-column prop="title" label="角色名称" width="180">
      </el-table-column>
      <el-table-column label="状态">
        <template slot-scope="item">
          <div>
            <el-button type="danger" disabled v-if="item.row.status == 2"
              >禁用</el-button
            >
            <el-button type="success" disabled v-else>启动</el-button>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="item2">
          <div>
            <el-button type="primary" plain @click="bj(item2.row.id)"
              >编辑</el-button
            >
            <el-button type="warning" plain @click="shanc(item2.row.id)"
              >删除</el-button
            >
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import {MSdelet} from '../../util/axios/index'
export default {
  data() {
    return {
      tj: [],
    };
  },
  methods: {
    ...mapActions({
      MSadd: "MS/add",
    }),
    bj(ed) {
      this.$emit("bj", false);
      this.$emit("ed", ed);
    },
    shanc(id) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          MSdelet({ id }).then((res) => {
            if (res.data.code == 200) {
              this.$message({
                type: "success",
                message: res.data.msg,
              });
              this.MSadd();
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
  },
  mounted() {
    this.MSadd();
  },
  computed: {
    ...mapGetters({
      asd: "MS/asd",
    }),
  },

  components: {},
};
</script>

<style lang="" scoped>
</style>
