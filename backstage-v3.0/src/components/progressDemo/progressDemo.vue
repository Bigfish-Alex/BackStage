<template>
  <div id="progressDemo">
    <h4>条状进度条</h4>
    <el-progress :text-inside="true" :stroke-width="26" :percentage="process100"></el-progress>
    <div class="clear"></div>
    <el-progress :text-inside="true" :stroke-width="26" :percentage="process80" status="success"></el-progress>
    <div class="clear"></div>
    <el-progress :text-inside="true" :stroke-width="26" :percentage="process60" status="warning"></el-progress>
    <div class="clear"></div>
    <el-progress :text-inside="true" :stroke-width="26" :percentage="process40" status="exception"></el-progress>

    <div class="clear"></div>
    <div class="clear"></div>

    <h4>环形进度条</h4>
    <el-progress type="circle" :percentage="0"></el-progress>
    <div class="v_clear"></div>
    <el-progress type="circle" :percentage="process40"></el-progress>
    <div class="v_clear"></div>
    <el-progress type="circle" :percentage="process60" status="success"></el-progress>
    <div class="v_clear"></div>
    <el-progress type="circle" :percentage="process80" status="warning"></el-progress>
    <div class="v_clear"></div>
    <el-progress type="circle" :percentage="process100" status="exception"></el-progress>

    <div class="clear"></div>
    <div class="clear"></div>
    <h4>变色进度条</h4>
    <el-progress
      :text-inside="true"
      :stroke-width="24"
      :percentage="process100"
      :color="customColor"
    ></el-progress>
    <div class="clear"></div>
    <el-progress
      :text-inside="true"
      :stroke-width="24"
      :percentage="process80"
      :color="customColors"
    ></el-progress>
    <div class="clear"></div>
    <el-progress
      :text-inside="true"
      :stroke-width="24"
      :percentage="process60"
      :color="customColorMethod"
    ></el-progress>


    <div class="clear"></div>
    <div class="clear"></div>
    <h4>提示Badge</h4>
    <el-badge :value="process60" class="item">
      <el-button size="small">评论</el-button>
    </el-badge>
    <div class="v_clear"></div>
    <div class="v_clear"></div>
    <el-badge :value="process80" class="item">
      <el-button size="small">回复</el-button>
    </el-badge>
    <div class="v_clear"></div>
    <div class="v_clear"></div>
    <el-badge :value="process40" class="item" type="primary">
      <el-button size="small">评论</el-button>
    </el-badge>
    <div class="v_clear"></div>
    <div class="v_clear"></div>
    <el-badge :value="process100" class="item" type="warning">
      <el-button size="small">回复</el-button>
    </el-badge>

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
      process40: 0,
      customColor: "#409eff",
      customColors: [
        { color: "#f56c6c", percentage: 20 },
        { color: "#e6a23c", percentage: 40 },
        { color: "#5cb87a", percentage: 60 },
        { color: "#1989fa", percentage: 80 },
        { color: "#6f7ad3", percentage: 100 }
      ]
    };
  },
  methods: {
    customColorMethod(percentage) {
      if (percentage < 30) {
        return "#909399";
      } else if (percentage < 70) {
        return "#e6a23c";
      } else {
        return "#67c23a";
      }
    }
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
  h4 {
    margin-bottom: 20px;
  }
  .clear {
    width: 100%;
    height: 20px;
    clear: both;
  }
  .v_clear {
    width: 20px;
    height: 30px;
    display: inline-block;
  }
}
</style>
