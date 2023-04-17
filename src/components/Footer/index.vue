<template>
  <div id="Footer">
    <div class="footer-top">
      <ul class="footer-top-ul">
        <li>关于我们<span class="span"></span></li>
        <li>联系我们<span class="span"></span></li>
        <li>联系客服<span class="span"></span></li>
        <li>商家入驻<span class="span"></span></li>
        <li>营销入驻<span class="span"></span></li>
        <li>营销中心<span class="span"></span></li>
        <li>手机尚品汇<span class="span"></span></li>
        <li>销售联盟<span class="span"></span></li>
        <li>尚品汇社交</li>
      </ul>
    </div>

    <div class="footer-bottom">
      <span>地址：北京市昌平区宏福科技园综合楼6层</span><br>
      <span>京ICP备19006430号</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
     
    };
  },
};
</script>

<style lang="less">
.footer-top-ul{
    display: flex;
    justify-content: center;
    li{
        font-size: 12px ;
    }
}

.span{
     width: 1px;
     height: 13px;
     background-color: #666;
     margin: 15px;
     border-left:1px solid #666;
}

.footer-bottom{
    margin-top: 15px;
    span{
        font-size: 12px;
    }
}
</style>
