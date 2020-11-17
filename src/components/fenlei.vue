<template>
  <div>

    <el-col :span="12">
      <h5>默认颜色</h5>
      <el-menu
        :default-active="defaultactive"
        class="el-menu-vertical-demo"
        unique-opened
        router
      >
        <el-menu-item index="/shouye">
          <i class="el-icon-menu"></i>
          <span slot="title">首页</span>
        </el-menu-item>
        <el-submenu :index="item.id+''"  v-for="item in List.menus" :key="item.id">
          <template slot="title">
            <i :class="item.icon"></i>
            <span>{{item.title}}</span>
          </template>
          <el-menu-item-group v-for="item2 in item.children" :key="item2.id">
            <el-menu-item :index="item2.url">{{item2.title}}</el-menu-item>
         
          </el-menu-item-group>
        </el-submenu>


      </el-menu>
    </el-col>
  </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'
export default {
  data() {
    return {
      defaultactive:'/shouye'
    };
  },
  methods: {
   ...mapActions(["add"]),
  
  },
  computed: {
    ...mapGetters(['aaa']),
    ...mapGetters(['List'])
  },
  mounted(){
    this.add()
   this.defaultactive=this.$route.fullPath
  }
};
</script>

<style lang="stylus" scoped>
@import '../stylus/index.styl';

.el-header {
  background: $bgred;
}

.el-aside {
  min-height: 500px;
}

.el-main {
  background: $bgccc;
}

.el-col-12 {
  width: 100%;
}
</style>
