<template>
  <div>
    <el-table :data="tj" border style="width: 100%">
      <el-table-column prop="id" label="角色编号" width="180">
      </el-table-column>
      <el-table-column prop="rolename" label="角色名称" width="180">
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
            <el-button type="primary" plain @click="bj(item2.row.id)">编辑</el-button>
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
import { JSadd, JSdelet } from "../../util/axios";
export default {
  data() {
    return {
      tableData: [],
    };
  },
  computed: {
    ...mapGetters({
      tj: "JSadd/asd",
    }),
  },
  methods: {
    ...mapActions({
      add: "JSadd/add",
    }),

    shanc(id) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          JSdelet({ id }).then((res) => {
            if (res.data.code == 200) {
              this.$message({
                type: "success",
                message: res.data.msg,
              });
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
    bj(id){
      this.$emit('tc',true)
      this.$emit('idd',id)
    }
  },
  mounted() {
    console.log(this.add());
  },
  components: {},
};
</script>

<style lang="" scoped>
</style>
