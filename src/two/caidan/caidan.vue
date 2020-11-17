<template>
  <div>
    <h1>菜单管理</h1>
    <mbx></mbx>
      <el-button type="primary" size="mini" @click="tj" >添加</el-button>
    <list @bj='bj' @listid='listid'></list>
       <tc  :ishow='ishow' :noshouw='noshouw' @qd='qx' @bjqx='bjqx' ref="log"></tc>
  </div>
</template>

<script>
import tc from "../../components/tanchuang";
import mbx from "../../components/mbx";
import list from "./list";
export default {
  data() {
    return {
      ishow: false,
      noshouw: true,
      
    };
  },
  methods: {
    tj() {
      this.ishow = true;
    },
    qx(er){

      this.ishow=er
      
    },
    bj(er){
        this.ishow = true;
      this.noshouw=er
    },
    bjqx(er){
        this.ishow = false
      this.noshouw=er
    },
    listid(id){
        console.log(id);
        this.$refs.log.look(id)
    }
  },
  components: {
    mbx,
    list,
     tc,
  },
};
</script>

<style lang="" scoped>
.el-button {
  margin: 20px 0px;
}
</style>
