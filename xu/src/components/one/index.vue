<template>
 <div>
     
     <router-view></router-view>
      <div class="foot">
           <router-link to="/shouye" tag="div" active-class="red">
               <p class="iconfont icon-shouye"></p>
                <p>首页</p>
               </router-link>
        <router-link to="/gwc" tag="div" active-class="red">
             <p class="iconfont icon-gouwuche"></p>
                <p>购物车</p>
        </router-link>
         <router-link to="/wd" tag="div" active-class="red">
             <p class="iconfont icon-wode2"></p>
                <p>我的</p>
        </router-link>
        </div>

        
 </div>
</template>

<script>

export default {
 data() {
 return {

 };
 },
 methods: {
 },
 components: {
 },
};
</script>

<style lang="" scoped>
@import '../../assets/css/public.css';
.foot{
       text-align: center;
}
.red{
 
    color: orange !important;
}
</style>
