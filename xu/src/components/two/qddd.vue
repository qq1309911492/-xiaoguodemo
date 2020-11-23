<template>
 <div>

       <div class="drow">
        <!-- 头部 -->
        <form action="">
        <header class="head">

              <back></back>
           
                    <a href="" class="logo">确认订单</a>
                    <p>
                        <span style="background: #fff;"></span>
                        <span style="background: #fff;"></span>
                        <span style="background: #fff;"></span>
                    </p>
        </header>
      <div class="add">
          <div class="shr">
              <a href="" class="a1">收货人:YouSu</a>
              <a href="" class="a1">100000000000</a>
          </div>
          <div class="dizhi">
            <table>
                <tr>
                  <td class="a1">收货地址:</td>
                  <td class="a2">北京市海淀区隐泉路清林范6号楼中共优就业总部3层</td>
                  <td class="jt2">
                    <a href="">
                        <img src="@/assets/images/qrdd/arrowRight.jpg" alt="">
                    </a>
                  </td>
                </tr>
                
              </table>
          </div>
          
      </div>
      <!-- 选择规格 -->
      <div class="choice">
          <div class="tu clearfix">
              <img src="@/assets/images/qrdd/shop_4.jpg" alt="" class="fl">
              <div class="js clearfix fl">
              <p class="fl ">雅诗兰黛护肤霜</p>
              <p class="fl gg">规格:50g</p>
            </div>
          </div>
          <div class="jg">
              <p>￥123.00</p>
          </div>

      </div>
      <!-- 购买数量 -->
      <div class="gmsl">
         <p>购买数量:</p>
         <a href="">
            <span class="jian">-</span>
            <span class="d">1</span>
            <span class="jian">+</span>
         </a>
      </div>
      <!-- 配送方式 -->
      <div class="pssf">
          <p>配送方式</p>
         <a href="">XX快递</a>
      </div>
      <!-- 优惠卷 -->
      <div class="yhj">
        <p>优惠卷</p>
       <a href="">无可用</a>
    </div>
    <!-- 使用积分 -->
    <div class="syjf">
        <p>使用积分</p>
        <div class="zuo">
        <input type="text" placeholder="使用积分">
        <a href="" class="a1">使用</a>
        <a href="" class="a2">输入<span>50</span>积分</a>
    </div>
    </div>
    <!-- 小计 -->
    <div class="xiaoji">
       <div class="je">
           <p class="p1">商品金额</p>
           <p class="p2 p3">￥123.00</p>
       </div>
       <div class="je">
        <p>运费</p>
        <p class="p2">+￥0.00</p>
    </div>
    <div class="je">
        <p>优惠卷</p>
        <p class="p2">-￥0.00</p>
    </div>
    <div class="je">
        <p>会员优惠</p>
        <p class="p2">-￥0.00</p>
    </div>
    <div class="je">
        <p>积分折扣</p>
        <p class="p2">-￥0.00</p>
    </div>
  <!-- 提交 -->
    </div>
    <div class="tijiao">
        <div></div>
        <p>实付金额:<span>￥123.00</span></p>
    </div>
    <!-- 提交订单 -->
    <div class="qd">
    <input type="submit" value="提交订单">
</div>
       
    </form>
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
@import "../../assets/css/qrdd.css";
</style>
