<template>
  <div id="crumbs">
    <!-- 样式closs是el-breadcrumb -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>活动管理</el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      <el-breadcrumb-item>活动详情</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: "crumbs",
  data() {
    return {
       data:{
        category1Id:'',
        category2Id:'',
        category3Id:'',
        categoryName:'',
        keyword:'',
        props:'',
        trademark:'',
        order:'',
        pageNo:'',
        pageSize:''
       }
    };
  },
  methods: {
    
  },
  mounted(){
    let data = this.$route.query
    console.log(data);
    Object.assign(this.data,)
    this.$store.dispatch('list')
  }
};

</script>

<style lang="less">
#crumbs {
  height: 60px;
  width: 100%;
  position: relative;
  bottom: 520px;
  display: flex;
  justify-content: center;
  .el-breadcrumb{
    line-height: 60px;
    margin-right: 950px;
  }
}


</style>
