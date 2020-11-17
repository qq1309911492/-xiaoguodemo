<template>
  <div>
    <mbx></mbx>
    <el-button type="primary" size="mini" @click="tj">添加</el-button>
    <list @tr='tr' @aid='aid'></list>
    <tc :nav='nav' @qx='qx' @bjs='bjs' ref="look"></tc>
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
    bjs(ex){
       this.nav.navshow=ex
    },
    tr(ex){
        this.nav.ishow=true
      this.nav.navshow=ex
    },
    aid(id){
        this.$refs.look.look(id)
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
