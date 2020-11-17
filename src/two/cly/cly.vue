<template>
  <div>
    <h1>管理员</h1>
    <mbx></mbx>
    <el-button type="primary" size="mini" @click="tj">添加</el-button>
    <list @show="sw"  @idd='aid'></list>
    <tc :nav="nav" @shou="qx" @shw="swc" ref="rsd"></tc>
  </div>
</template>

<script>
import mbx from "../../components/mbx";
import list from "./list";
import tc from "./tanchuang";
export default {
  data() {
    return {
      nav: {
        ishow: false,
        navshow: true,
      },
    };
  },
  methods: {
    tj() {
      this.nav.ishow = true;
    },
    qx(ex) {
      this.nav.ishow = ex;
    },
    sw(sw) {
      this.nav.ishow = true;
      this.nav.navshow = sw;
    },
    swc(ex) {
      this.nav.navshow = ex;
    },
    aid(ex){
  
        this.$refs.rsd.look(ex)
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
  margin: 20px 0;
}
</style>
