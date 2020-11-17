<template>
  <div>
    <el-table
      :data="asd"
      border
      style="width: 100%"
      row-key="id"
      default-expand-all
      :tree-props="{ children: 'children' }"
    >
      <el-table-column prop="id" label="分类编号" width="80"> </el-table-column>
      <el-table-column prop="title" label="分类名称" width="80">
      </el-table-column>
      <el-table-column label="图片" width="180">
        <template slot-scope="item">
          <div>
            <img :src="$url + item.row.img" alt="" />
          </div>
        </template>
      </el-table-column>
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
            <el-button type="warning" size="mini" @click="shanchu(item.row.id)"
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
import { SPFLdelet } from "../../util/axios/index";
export default {
  data() {
    return {
      aaa: [],
    };
  },
  methods: {
    ...mapActions({
      add: "SPFL/add",
    }),
    shanchu(id) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          LBTdelet({ id }).then((res) => {
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
    bianji(id){
      this.$emit('ida',id)
        this.$emit('nvaf',false)
    }
  },
  computed: {
    ...mapGetters({
      asd: "lbt/asd",
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
