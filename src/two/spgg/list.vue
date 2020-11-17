<template>
  <div>
    <el-table :data="List" border style="width: 100%">
      <el-table-column prop="id" label="规格编号" width="180">
      </el-table-column>
      <el-table-column prop="specsname" label="规格名称" width="180">
      </el-table-column>
      <el-table-column label="规格属性">
        <template slot-scope="item">
          <div>
            <button v-for="(item2, index) in item.row.attrs" :key="index">
              {{ item2 }}
            </button>
          </div>
        </template>
      </el-table-column>
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
            <el-button type="success" @click="bj(item.row.id)">编辑</el-button>
            <el-button type="danger" @click="sadc(item.row.id)">删除</el-button>
          </div>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="zongshu"
      :page-size="2"
      @current-change="chan"
    >
    </el-pagination>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import loginVue from "../../pages/login.vue";
import { SPGGdelet } from "../../util/axios/index";
export default {
  data() {
    return {
      asd: [],

      value: "1",
    };
  },
  methods: {
    ...mapActions({
      zong: "SPGG/zong",
    }),
    ...mapActions({
      add: "SPGG/add",
    }),
    ...mapActions({
      gai: "SPGG/gai",
    }),
    chan(ex) {
      this.gai(ex);
    },
    bj(ex){
      this.$emit('id',ex)
      this.$emit('show',true)
      this.$emit('navr',false)
    },
    sadc(id) {
      // console.log(id);
      // SPGGdelet({id}).then(res=>{
      //     console.log(res);
      // })
      // console.log('2323');
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          SPGGdelet({ id }).then((res) => {
            console.log(res);
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
  },
  mounted() {
    this.add();
    this.zong();
  },
  computed: {
    ...mapGetters({
      zongshu: "SPGG/zongshu",
    }),
    ...mapGetters({
      pag: "SPGG/pag",
    }),
    ...mapGetters({
      List: "SPGG/List",
    }),
  },
  components: {},
};
</script>

<style lang="" scoped>
</style>
