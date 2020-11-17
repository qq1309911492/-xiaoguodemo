<template>
  <div>
    <!-- <h1>index</h1> -->

    <el-container>
      <el-header
        >Header
        <div class="gly">管理员 :{{ List.username }}</div>
        <div>
          <button class="gly" @click="tc">退出</button>
        </div>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <cbl></cbl>
        </el-aside>
        <el-main>
          <router-view></router-view>
          
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import cbl from "../components/fenlei";
export default {
  data() {
    return {};
  },
  methods: {
    ...mapActions(['lflist']),
    tc(){
      this.lflist()
      this.$router.push('/login')
    }
  },
  computed: {
    ...mapGetters(["List"]),
    
  },
  components: {
    cbl,
  },
};
</script>

<style lang="stylus" scoped>
@import '../stylus/index.styl';

.gly {
  float: right;
  color: red;
}

.el-header {
  background: $bgred;
}

.el-aside {
  min-height: 500px;
}

.el-main {
  background: $bgccc;
}
</style>
