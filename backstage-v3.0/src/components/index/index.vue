<template>
  <div id="index_container">
    <div class="menu_container" v-bind:class="[isCollapse ? 'collapsed' : 'nocollapse']">
      <div class="backstage_name">
        <i class="el-icon-s-promotion"></i>
        后台管理演示系统
      </div>

      <!-- 菜单区域 -->
      <el-menu
        default-active="1-1"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        :collapse="isCollapse"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        router        
      >
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-s-data"></i>
            <span>Echarts图表</span>
          </template>
          <el-menu-item index="/echartsDemo">普通数据图</el-menu-item>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-eleme"></i>
            <span>常用组件</span>
          </template>
          <el-menu-item index="/tableDemo">表格</el-menu-item>
        </el-submenu>
      </el-menu>
    </div>

    <!-- 内容区域 -->
    <div class="content_container">

      <!-- 头部 -->
      <header>
        <div class="fold_menu_container" @click="handleMenuColasp">
          <i class="el-icon-s-fold"></i>
        </div>

        <!-- <div class="userinfo_container">
          ALEX
          <i class="el-icon-caret-bottom"></i>
        </div> -->

        <el-menu 
        default-active="1" 
        style="float:right;" 
        class="el-menu-demo" 
        mode="horizontal">
          <el-menu-item index="1">处理中心</el-menu-item>
          <el-submenu index="2">
            <template slot="title">我的工作台</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
            <el-submenu index="2-4">
              <template slot="title">选项4</template>
              <el-menu-item index="2-4-1">选项1</el-menu-item>
              <el-menu-item index="2-4-2">选项2</el-menu-item>
              <el-menu-item index="2-4-3">选项3</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="3" disabled>消息中心</el-menu-item>
          <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
        </el-menu>

      </header>

      <!-- 路由区域 -->
      <div class="main_view_container">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "this is index!",
      isCollapse:true
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    handleMenuColasp(){
      this.isCollapse=!this.isCollapse;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "./index.scss";
</style>
