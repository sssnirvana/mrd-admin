<template>
  <div id="Header">
    <!-- 最上方的部分 -->
    <div id="header-top">
      <div class="header-left">
        <p>商品汇欢迎您!</p>
        &nbsp&nbsp&nbsp&nbsp
        <p>
          请<router-link to="">登录</router-link>&nbsp|&nbsp<router-link to=""
            >注册</router-link
          >
        </p>
      </div>

      <div class="header-right">
        <router-link to="">我的订单</router-link>&nbsp|&nbsp
        <router-link to="">我的购物车</router-link>&nbsp|&nbsp
        <router-link to="">我的尚品汇</router-link>&nbsp|&nbsp
        <router-link to="">尚品汇会员</router-link>&nbsp|&nbsp
        <router-link to="">企业采购</router-link>&nbsp|&nbsp
        <router-link to="">合作招聘</router-link>&nbsp|&nbsp
        <router-link to="">商家后台</router-link>
      </div>
    </div>
    <!-- 图表和搜索的部分 -->
    <div id="header-bottom">
      <div class="header-ico">
       <router-link to="/"> <img src="./images/logo.png" alt="" srcset="" /></router-link>
      </div>

      <div class="header-search">
        <!-- class=el-input__inner -->
       <input type="text" class="header-search-input">
        <el-button type="warning" class="el-button el-button--warning">警告按钮</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
        input:''
    };
  },
  methods:{
  
  }
};
</script>

<style>
#header-top {
  height: 30px;
  width: 100%;
  background-color: #eaeaea;
  display: flex;
  align-items: center;
  justify-content:center
}

.header-left {
  display: flex;
  font-size: 14px;
  margin-right: 500px;
}

.header-right {
  font-size: 14px;
}

#header-bottom{
    width: 100%;
    height: 110px;
    display: flex;
    align-items: center;
    justify-content:center;
}

.header-ico{
  margin-right: 300px;
}

.header-search{
    display: flex;
    position: relative;
    left: 100px;
}

.header-search-input{
    height: 29px;
    width: 500px;
    border: 3px solid goldenrod;
}

.el-button{
    height: 35px;
    line-height: 10px;
    position: relative;
    right: 20px;
}
</style>
