<template>
  <div>
    <mbx></mbx>
    <el-button type="primary" size="mini" @click="tj">添加</el-button>
    <list @navr='navr' @show='show' @id='id'></list>
    <tc :nav='nav' @qx="qx" @bjqx='bjqx' ref="tree"></tc>
  </div>
</template>

<script>
import mbx from "../../components/mbx";
import list from './list'
import tc from './tangchuang'
export default {
  data() {
    return {
        nav: {
        ishow: false,
        noshouw: true,
      },
    };
  },
  methods: {
    tj() {
         this.nav.ishow = true;
    },
    qx(ex){
       this.nav.ishow = ex;
    },
    navr(ex){
          this.nav.noshouw = ex;
    },
    show(ex){
       this.nav.ishow = ex;
    },
    bjqx(ex){
         this.nav.noshouw = ex;
    },
    id(ex){
      this.$refs.tree.look(ex)
     
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
