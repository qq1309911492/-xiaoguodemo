<template>
  <div>
    <el-table :data="tj" border style="width: 100%">
      <el-table-column prop="id" label="用户编号" width="180">
      </el-table-column>
      <el-table-column prop="nickname" label="昵称名称" width="180">
      </el-table-column>
       <el-table-column prop="phone" label="手机号" width="180">
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
            <el-button type="primary" plain @click="bj(item2.row.uid)">编辑</el-button>
         
            
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
      tj: "huiyuan/asd",
    }),
  },
  methods: {
    ...mapActions({
      add: "huiyuan/add",
    }),


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
