<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/shouye' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item
        ><a href="/">{{ $route.name }}</a></el-breadcrumb-item
      >
    </el-breadcrumb>
  </div>
</template>

<script>

export default {
  data() {
    return {};
  },
  methods: {},
  components: {},
};
</script>

<style lang="" scoped>
</style>
