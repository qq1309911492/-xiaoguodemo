<template>
  <div>
    <h1>角色管理</h1>
    <mbx></mbx>
 
    <list @tc='tc' @idd='idd'></list>
    <tc :nvr='nvr' @qx='qx' @bjqx='bjqx' ref="look"></tc>
  </div>
</template>

<script>
import mbx from "../../components/mbx";
import list from '../huiyuan/list'
import tc from '../huiyuan/tanchuang'
export default {
  data() {
    return {
      nvr:{
        ishow:false,
        nvrshow:true
      }
    };
  },
  methods: {
   
    qx(ex){
      this.nvr.ishow=ex
    },
    tc(ex){
      this.nvr.nvrshow=false
      this.nvr.ishow=ex
    },
    idd(ex){
      this.$refs.look.look(ex)
    },
    bjqx(ex){
         this.nvr.nvrshow=ex
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
