<template>
  <div>
    <el-table :data="List" border style="width: 100%">
      <el-table-column prop="id" label="角色编号" width="180">
      </el-table-column>
      <el-table-column prop="goodsname" label="商品名称"> </el-table-column>
      <el-table-column prop="price" label="商品价格"> </el-table-column>
      <el-table-column prop="market_price" label="市场价格"> </el-table-column>
      <el-table-column label="图片">
        <template slot-scope="item">
          <div>
            <img :src="$url + item.row.img" alt="" />
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="isnew" label="是否新品"> </el-table-column>
      <el-table-column prop="ishot" label="是否热卖推荐"> </el-table-column>
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
            <el-button type="primary" @click="bj(item2.row.id)">编辑</el-button>
            <el-button type="warning" @click="shanc(item2.row.id)"
              >删除</el-button
            >
          </div>
        </template>
      </el-table-column>
    </el-table>
  <el-pagination
      background
      layout="prev, pager, next"
      :total="zongshu"
      :page-size="1"
      @current-change="chan"
    >
    </el-pagination>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { SPGLdelet } from "../../util/axios/index";
export default {
  data() {
    return {
      lis: [],
    };
  },
  methods: {
    ...mapActions({
      add: "SPGL/add",
      zong:'SPGL/zong',
      gaibian:"SPGL/gai"
    }),
    bj(id) {
      this.$emit("tr", false);
      this.$emit("aid", id);
    },
    shanc(id) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          SPGLdelet({ id }).then((res) => {
            if (res.data.code == 200) {
              this.$message({
                type: "success",
                message: res.data.msg,
              });
              this.zong()
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
    chan(ex){
      console.log(ex);
      this.gaibian(ex)
      
    }
  },
  computed: {
    ...mapGetters({
      List: "SPGL/List",
      zongshu:'SPGL/zongshu',
   
    }),
  },
  mounted() {
    this.zong()
    this.add();
  },
  components: {},
};
</script>

<style lang="" scoped>
</style>
