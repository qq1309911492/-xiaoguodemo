<template>
  <div>
    <mbx></mbx>
    <el-button type="primary" size="mini" @click="tj">添加</el-button>
    <list @ed='ed' @bj='bj' ></list>
    <tc :nav='nav' @qx='qx' ref="tree" @tr='tr'></tc>
  </div>
</template>

<script>
import mbx from "../../components/mbx";
import list from './list'
import tc from './tanchuang'
export default {
  data() {
    return {
      nav:{
        ishow:false,
        navshow:true
      }
    };
  },
  methods: {
    tj(){
      this.nav.ishow=true
    },
    qx(ex){
       this.nav.ishow=ex
    },
    ed(ex){
      this.$refs.tree.look(ex)
    },
    bj(ex){
           this.nav.navshow=ex
           this.nav.ishow=true
    },
    tr(ex){
       this.nav.navshow=ex
    }
  },
  components: {
    mbx,
    list,
    tc
  },
};
</script>

<style lang="" scoped>
.el-button {
  margin: 20px 0px;
}
</style>
