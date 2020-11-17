<template>
  <div>

    <el-table
      :data="aaa"
      border
      style="width: 100%"
      row-key="id"
      default-expand-all
      :tree-props="{ children: 'children' }"
    >
      <el-table-column prop="id" label="菜单编号" width="180">
      </el-table-column>
      <el-table-column prop="title" label="菜单名称" width="180">
      </el-table-column>
      <el-table-column prop="pid" label="上级菜单"> </el-table-column>
      <el-table-column prop="icon" label="菜单图标"> </el-table-column>
      <el-table-column prop="url" label="菜单地址"> </el-table-column>
      <el-table-column label="状态" prop="status">
        <template slot-scope="item">
          <div>
              <el-button type="danger" disabled v-if="item.row.status==2">禁用</el-button>
                <el-button type="success" disabled v-else>启动</el-button>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="item">
          <div>
            <el-button type="primary" size="mini" @click="bianji(item.row.id)">编辑</el-button>
            <el-button type="warning" size="mini" @click="delet(item.row.id)"
              >删除</el-button
            >
          </div>
        </template>
      </el-table-column>
    </el-table>
 
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { del } from "../../util/axios/index";

export default {
  data() {
    return {
      idd:0,
    
      tableData: [],
    };
  },
  methods: {
   
    qx(ax) {
   
      this.add();
    },
    bjqx(qx){
 
       this.add();
    },
    delet(id) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          del({ id }).then((res) => {
            if (res.data.code == 200) {
              this.$message({
                type: "success",
                message: res.data.msg,
              });
              this.add();
            } else {
              this.$message({
                type: "info",
                message: res.data.msg,
              });
            }
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
      console.log(id);
    },
    bianji(id){
    this.$emit('bj',false)
    this.$emit('listid',id)
    },
    ...mapActions(["add"]),
  },
  mounted() {

    this.add();
  },
  computed: {
    ...mapGetters(["aaa"]),
  },
  components: {
   
  },
};
</script>

<style lang="" scoped>
.el-button {
  margin: 20px 0px;
}
</style>
