<template>
  <div class="login">
    <router-link to="/index">首页</router-link>  <br>
    <router-link to="/login">登陆</router-link>  <br>
    {{name}}
  </div>
</template>

<script>
export default {
  data(){
    return{
      name:'this is Login!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
