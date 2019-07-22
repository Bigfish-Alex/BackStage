<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  background: #f2f2f2;
}
body,html{
  width: 100%;
  height: 100%;
}
*{
  margin: 0;
  padding: 0;
}

.el-menu{
  border: none;
}
/* .el-submenu__title:focus, .el-submenu__title:hover{
  background: #009688!important;
}

.el-menu-item:hover{
    color: #fff !important;
    background: #009688 !important;
}
.el-menu-item.is-active {
    border-left: 4px solid #fff;
    color: #fff !important;
    background: #009688 !important;
} */
</style>
