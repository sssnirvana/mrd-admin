<template>
  <div id="navigation">
    <div id="navigation-top">
      <ul class="navigation-top-ul">
        <li class="navigation-top-ul-one" @mousemove="showshowc1" @mouseleave="lenveshwoc1">全部商品分类</li>
        <li>服装城</li>
        <li>美妆城</li>
        <li>尚品汇超市</li>
        <li>全球购</li>
        <li>闪购</li>
        <li>团购</li>
        <li>有趣</li>
        <li>秒杀</li>
      </ul>
    </div>

    <div id="navigation-bottom">
      <div class="navigation-bottom-left">
        <ul class="navigation-bottom-left-ul" @click="jumpsearch">
          <li
            v-for="(c1, index) in getBaseCategoryList"
            :key="c1.categoryId"
            @mousemove="mousemoveshowlist(index)"
            @mouseleave="mouseleaveshowlist"
            :class="{mousemovecss: mousemoveindex == index}"
            v-show="showc1"
          >
          <router-link to=""><p :data-c="c1" :data-c1name="c1.categoryName" :data-c1id="c1.categoryId">{{ c1.categoryName }}</p></router-link>
            <div class="navigation-bottom-left-ul-c2" v-if="mousemoveindex == index">
                <dl>
                  <dt v-for="(c2,index) in c1.categoryChild" :key="c2.categoryId">
                    <router-link to=""><p :data-c="c2" :data-c2name="c2.categoryName" :data-c2id="c2.categoryId"> {{ c2.categoryName }}</p></router-link>
                    <dd v-for="(c3,index) in c2.categoryChild" :key="c3.categoryId">
                       <p :data-c="c3" :data-c3name="c3.categoryName" :data-c3id="c3.categoryId">|{{ c3.categoryName }}|</p>
                    </dd>
                  </dt>
                </dl>
            </div>
          </li>
        </ul>
      </div>

      <div class="navigation-bottom-center" :class="{searchshow : $route.name == `search`}">
        <template>
          <!-- el样式 -->
          <!-- el-carousel__container -->
          <el-carousel indicator-position="outside">
            <el-carousel-item v-for="item in 4" :key="item">
              <h3>{{ item }}</h3>
            </el-carousel-item>
          </el-carousel>
        </template>
      </div>

      <div class="navigation-bottom-rigth" :class="{searchshow : $route.name == `search`}">
        
        <div class="navigation-bottom-rigth-top">
          <span class="left">尚品汇快报</span>
          <span class="rigth">更多></span>
        </div>

        <div class="navigation-bottom-rigth-center-top">
          <ul>
            <li>1</li>
            <li>2</li>
            <li>1</li>
            <li>2</li>
            <li>1</li>
          </ul>
        </div>

        <div class="navigation-bottom-rigth-center-bottom">
          <div v-for="item in 12">
            <div><img src="" alt="" /></div>
            <p>{{ item }}</p>
          </div>
        </div>

        <div class="navigation-bottom-rigth-bottom">
          <img src="" alt="" srcset="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "navigation",
  data() {
    return {
      mousemoveindex : '-1',
      showc1:true
    };
  },
  computed: {
    ...mapState({
      getBaseCategoryList: (state) => state.home.getBaseCategoryList,
    }),
  },
  methods: {
    jumpsearch(e) {
      console.log(e.target.dataset.c1name);
      let query = {}
      if (e.target.dataset.c1name) {
        query= {
          c1name : e.target.dataset.c1name,
          c1id : e.target.dataset.c1id,
          c:e.target.dataset.c
        }
      }
      else if(e.target.dataset.c2name){
        query= {
          c2name : e.target.dataset.c2name,
          c2id : e.target.dataset.c2id,
          c:e.target.dataset.c
        }
      }
      else if(e.target.dataset.c3name){
        query= {
          c3name : e.target.dataset.c3name,
          c3id : e.target.dataset.c3id,
          c:e.target.dataset.c
        }
      }
      this.$router.push({
        name:'search',
        query
      })
    },

    mousemoveshowlist(index) {
      this.mousemoveindex = index
    },

    mouseleaveshowlist() {
      this.mousemoveindex = -1;
    },

    showshowc1(){
      this.showc1 = true
    },

    lenveshwoc1(){
      if (this.$route.name == `search` ) {
        this.showc1 = false
      }
    }
  },
  mounted() {
    if (this.$route.name == `search`) {
      this.showc1 = false
    }
    
    if (this.$route.name != `search`) {
      this.showc1 = true
    }
  },
};
</script>

<style lang="less">
.navigation-top-ul {
  height: 45px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 2px solid red;
  li {
    height: 100%;
    width: 90px;
    line-height: 45px;
    position: relative;
    right: 150px;
  }
}

.navigation-top-ul-one {
  background-color: red;
  width: 200px !important;
  color: #fff;
}

#navigation-bottom {
  width: 100%;
  height: 520px;
  display: flex;
  justify-content: center;
  position: relative;
  right: 185px;
}

.navigation-bottom-left-ul {
  width: 200px;
  background-color: #fafafa;
  margin-left: 342px;
  .mousemovecss{
    background-color:#9acd32;
  }
  li {
    width: 200px;
    height: 30px;
    line-height: 30px;
    text-align: left;
    p {
      margin-left: 10px;
    }
  }
  dt{
    display: flex;
    flex-flow: row wrap;
    font-size: 12px;
    margin: 5px;
    dd{
      margin: 0 5px;
    }
  }
}

.navigation-bottom-center {
  width: 735px;
  height: 455px;
  .el-carousel__container {
    height: 455px;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    height: 100%;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }
}

.navigation-bottom-rigth {
  width: 250px;
  height: 455px;
  margin-left: 5px;
  .navigation-bottom-rigth-top {
    height: 40px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #99a9bf;
    .left {
      margin-left: 10px;
      color: #333;
    }
    .rigth {
      margin-right: 10px;
    }
  }

  .navigation-bottom-rigth-center-top {
    width: 100%;
    height: 140px;
    background-color: palevioletred;
    ul {
      width: 100%;
      height: 100%;
      display: flex;
      flex-flow: column;
      justify-content: space-around;
      li {
        width: 100%;
      }
    }
  }

  .navigation-bottom-rigth-center-bottom {
    width: 100%;
    height: 200px;
    background-color: #475669;
    display: flex;
    flex-flow: row wrap;
    div {
      height: 33%;
      width: 25%;
      background-color: #99a9bf;
      div {
        width: 50%;
        height: 50%;
        background-color: #fff;
        margin: auto;
        position: relative;
        top: 5px;
      }
      p {
        font-size: 12px;
        position: relative;
        top: 10px;
      }
    }
  }

  .navigation-bottom-rigth-bottom {
    width: 100%;
    height: 72px;
    background-color: #99a9bf;
  }
}

.navigation-bottom-center-list {
  width: 735px;
  height: 455px;
}

.navigation-bottom-left-ul-c2 {
  width: 735px;
  height: 455px;
  background-color: #fff;
  position: fixed;
  left: 543px;
  bottom: 317px;
  z-index: 10;
}

.searchshow{
  visibility:hidden
}
</style>
