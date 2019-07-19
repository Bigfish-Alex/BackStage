<template>
  <div id="index_container">
    <div class="menu_container">
      <div class="backstage_name">
        <i class="el-icon-s-promotion"></i>
        后台管理演示系统1.0版本
      </div>

      <!-- 菜单区域 -->
      <el-menu
        default-active="1-1"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#20222A"
        text-color="#fff"
        active-text-color="#fff"
      >
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>导航一</span>
          </template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
          <el-menu-item index="1-3">选项3</el-menu-item>
          <el-menu-item index="1-4">选项4</el-menu-item>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>导航二</span>
          </template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
          <el-menu-item index="2-4">选项4</el-menu-item>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>导航三</span>
          </template>
          <el-menu-item index="3-1">选项1</el-menu-item>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>导航四</span>
          </template>
          <el-menu-item index="4-1">选项1</el-menu-item>
        </el-submenu>
      </el-menu>
    </div>

    <!-- 内容区域 -->
    <div class="content_container">

      <!-- 头部 -->
      <header>
        <div class="fold_menu_container">
          <i class="el-icon-s-fold"></i>
        </div>

        <div class="userinfo_container">
          ALEX
          <i class="el-icon-caret-bottom"></i>
        </div>
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
      name: "this is index!"
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "./index.scss";
</style>
