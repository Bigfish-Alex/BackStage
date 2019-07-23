<template>
  <div id="progressDemo">
    <el-progress :text-inside="true" :stroke-width="26" :percentage="process100"></el-progress>
    <div class="clear"></div>
    <el-progress :text-inside="true" :stroke-width="26" :percentage="process80" status="success"></el-progress>
    <div class="clear"></div>
    <el-progress :text-inside="true" :stroke-width="26" :percentage="process60" status="warning"></el-progress>
    <div class="clear"></div>
    <el-progress :text-inside="true" :stroke-width="26" :percentage="process40" status="exception"></el-progress>

    <div class="clear"></div>
 
    <el-progress type="circle" :percentage="0"></el-progress>
    <el-progress type="circle" :percentage="process40"></el-progress>
    <el-progress type="circle" :percentage="process60" status="success"></el-progress>
    <el-progress type="circle" :percentage="process80" status="warning"></el-progress>
    <el-progress type="circle" :percentage="process100" status="exception"></el-progress>
  </div>
</template>

<script>
import { clearInterval } from "timers";
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      name: "this is helloword!",
      process100: 0,
      process80: 0,
      process60: 0,
      process40: 0
    };
  },
  mounted() {
    let that = this;
    let timer001 = setInterval(() => {
      that.process100 += 5;
      if (that.process100 >= 100) {
        window.clearInterval(timer001);
      }
    }, 50);

    let timer002 = setInterval(() => {
      that.process80 += 6;
      if (that.process80 >= 80) {
        window.clearInterval(timer002);
      }
    }, 50);

    let timer003 = setInterval(() => {
      that.process60 += 4;
      if (that.process60 >= 60) {
        window.clearInterval(timer003);
      }
    }, 50);

    let timer004 = setInterval(() => {
      that.process40 += 2;
      if (that.process40 >= 40) {
        window.clearInterval(timer004);
      }
    }, 50);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#progressDemo {
  width: 100%;
  height: 100%;
  overflow: auto;
  background: #fff;
  box-sizing: border-box;
  padding: 30px 40px;
  .clear {
    width: 100%;
    height: 20px;
    clear: both;
  }
}
</style>
