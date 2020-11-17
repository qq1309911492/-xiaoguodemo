<template>
  <div>
    <h1>录播图</h1>
    <mbx></mbx>
    <el-button type="primary" size="mini" @click="tj">添加</el-button>
    <list @ida="ida" @nvaf='nvaf'></list>
    <tc :nav="nav" @qx="qx" ref="look"></tc>
  </div>
</template>

<script>
import mbx from "../../components/mbx";
import list from "./list";
import tc from "./tuanchuang";
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
    qx(ex) {
      this.nav.ishow = ex;
    },
    ida(ex) {
      this.nav.ishow = true;
      this.$refs.look.look(ex);
    },
    nvaf(ex){
       this.nav.noshouw = ex;
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
