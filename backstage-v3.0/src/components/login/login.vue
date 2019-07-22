<template>
  <div class="login" id="login_container">

    <div id="particles">
    </div>

    <div class="login_form_container">
        <h1>BIGFISH后台管理系统</h1>

        <div class="input_container">
            <input type="text" v-model="username" @input="listenUsernameInput" placeholder="用户名">
            <p class="warning" v-if="isShowUsernameWarn">*请输入用户名</p>
        </div>

        <div class="input_container">
            <input type="password" v-model="password" @input="listenPasswordInput" placeholder="密码">
            <p class="warning" v-if="isShowPasswordWarn">*请输入密码</p>
        </div>

        <button @click="login">
            登陆
        </button>
    </div>

    <p class="copyright">@copyright BIGFISH后台管理系统 FROM 2019-2022 </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShowUsernameWarn:false,
      isShowPasswordWarn:false,
      username:'',
      password:'',
    };
  },
  methods:{
      login(){
          if( this.username.length<=0 ){
              this.isShowUsernameWarn=true;
              return false;
          }
          if( this.password.length<=0 ){
              this.isShowPasswordWarn=true;
              return false;
          }
          this.$router.push({path:'echartsDemo'});
      },
      listenUsernameInput(){
          if( this.username.length<=0 ){
              this.isShowUsernameWarn=true;
          }else{
              this.isShowUsernameWarn=false;
          }
      },
      listenPasswordInput(){
          if( this.password.length<=0 ){
              this.isShowPasswordWarn=true;
          }else{
              this.isShowPasswordWarn=false;
          }
      }
  },
  mounted: function() {
      $("#particles").particleground({
        dotColor: "#5cbdaa",
        lineColor: "#5cbdaa"
      });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    @import "./login.scss"
</style>
