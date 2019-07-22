
<template>
  <div id="echartsDemo_container">
    <div id="myChart001" :style="{width: '40%', height: '500px',float:'left'}"></div>
    <div id="myChart002" :style="{width: '60%', height: '500px',float:'left'}"></div>
    <div id="myChart003" :style="{width: '100%', height: '500px',float:'left'}"></div>
  </div>
</template>

<script>
import { setInterval } from 'timers';
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted(){
    this.draw001();
    this.draw002();
    this.draw003();
  },
  methods: {
    draw001(){
        // 基于准备好的dom，初始化echarts实例
        let myChart001 = this.$echarts.init(document.getElementById('myChart001'))
        let option001={
          legend: {},
          tooltip: {
              trigger: 'axis',
              showContent: false
          },
          dataset: {
              source: [
                  ['product', '2012', '2013', '2014', '2015', '2016', '2017'],
                  ['Matcha Latte', 41.1, 30.4, 65.1, 53.3, 83.8, 98.7],
                  ['Milk Tea', 86.5, 92.1, 85.7, 83.1, 73.4, 55.1],
                  ['Cheese Cocoa', 24.1, 67.2, 79.5, 86.4, 65.2, 82.5],
                  ['Walnut Brownie', 55.2, 67.1, 69.2, 72.4, 53.9, 39.1]
              ]
          },
          xAxis: {type: 'category'},
          yAxis: {gridIndex: 0},
          grid: {top: '55%'},
          series: [
              {type: 'line', smooth: true, seriesLayoutBy: 'row'},
              {type: 'line', smooth: true, seriesLayoutBy: 'row'},
              {type: 'line', smooth: true, seriesLayoutBy: 'row'},
              {type: 'line', smooth: true, seriesLayoutBy: 'row'},
              {
                  type: 'pie', 
                  id: 'pie',
                  radius: '30%',
                  center: ['50%', '25%'],
                  label: {
                      formatter: '{b}: {@2012} ({d}%)'
                  },
                  encode: {
                      itemName: 'product',
                      value: '2012',
                      tooltip: '2012'
                  }
              }
          ]
        };     
        // 绘制图表
        myChart001.setOption(option001);
    },
    draw002(){
        // 基于准备好的dom，初始化echarts实例
        let myChart002 = this.$echarts.init(document.getElementById('myChart002'))
        let option002={
          title: {
              text: '动态数据',
              subtext: '纯属虚构'
          },
          tooltip: {
              trigger: 'axis',
              axisPointer: {
                  type: 'cross',
                  label: {
                      backgroundColor: '#283b56'
                  }
              }
          },
          legend: {
              data:['最新成交价', '预购队列']
          },
          toolbox: {
              show: true,
              feature: {
                  dataView: {readOnly: false},
                  restore: {},
                  saveAsImage: {}
              }
          },
          dataZoom: {
              show: false,
              start: 0,
              end: 100
          },
          xAxis: [
              {
                  type: 'category',
                  boundaryGap: true,
                  data: (function (){
                      var now = new Date();
                      var res = [];
                      var len = 10;
                      while (len--) {
                          res.unshift(now.toLocaleTimeString().replace(/^\D*/,''));
                          now = new Date(now - 2000);
                      }
                      return res;
                  })()
              },
              {
                  type: 'category',
                  boundaryGap: true,
                  data: (function (){
                      var res = [];
                      var len = 10;
                      while (len--) {
                          res.push(10 - len - 1);
                      }
                      return res;
                  })()
              }
          ],
          yAxis: [
              {
                  type: 'value',
                  scale: true,
                  name: '价格',
                  max: 30,
                  min: 0,
                  boundaryGap: [0.2, 0.2]
              },
              {
                  type: 'value',
                  scale: true,
                  name: '预购量',
                  max: 1200,
                  min: 0,
                  boundaryGap: [0.2, 0.2]
              }
          ],
          series: [
              {
                  name:'预购队列',
                  type:'bar',
                  xAxisIndex: 1,
                  yAxisIndex: 1,
                  data:(function (){
                      var res = [];
                      var len = 10;
                      while (len--) {
                          res.push(Math.round(Math.random() * 1000));
                      }
                      return res;
                  })()
              },
              {
                  name:'最新成交价',
                  type:'line',
                  data:(function (){
                      var res = [];
                      var len = 0;
                      while (len < 10) {
                          res.push((Math.random()*10 + 5).toFixed(1) - 0);
                          len++;
                      }
                      return res;
                  })()
              }
          ]
        };     
        // 绘制图表
        myChart002.setOption(option002);

        app.count = 11;
        setInterval(function (){
            let axisData = (new Date()).toLocaleTimeString().replace(/^\D*/,'');

            var data0 = option002.series[0].data;
            var data1 = option002.series[1].data;
            data0.shift();
            data0.push(Math.round(Math.random() * 1000));
            data1.shift();
            data1.push((Math.random() * 10 + 5).toFixed(1) - 0);

            option002.xAxis[0].data.shift();
            option002.xAxis[0].data.push(axisData);
            option002.xAxis[1].data.shift();
            option002.xAxis[1].data.push(app.count++);

            myChart002.setOption(option002);
        }, 2100);
    },
    draw003(){
        // 基于准备好的dom，初始化echarts实例
        let myChart003 = this.$echarts.init(document.getElementById('myChart003'))
        let option003={
          title : {
              text: '分区域动态统计数据',
              subtext: '纯属虚构'
          },
          tooltip : {
              trigger: 'axis'
          },
          legend: {
              data:['次数','金额']
          },
          toolbox: {
              show : true,
              feature : {
                  dataView : {show: true, readOnly: false},
                  magicType : {show: true, type: ['line', 'bar']},
                  restore : {show: true},
                  saveAsImage : {show: true}
              }
          },
          calculable : true,
          xAxis : [
              {
                  type : 'category',
                  data : ['1','2','3','4','5','6','7','8','9','10','11','12']
              }
          ],
          yAxis : [
              {
                  type : 'value'
              }
          ],
          series : [
              {
                  name:'销量',
                  type:'bar',
                  data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
                  markPoint : {
                      data : [
                          {type : 'max', name: '最大值'},
                          {type : 'min', name: '最小值'}
                      ]
                  },
                  markLine : {
                      data : [
                          {type : 'average', name: '平均值'}
                      ]
                  }
              },
              {
                  name:'次数',
                  type:'bar',
                  data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
                  markPoint : {
                      data : [
                          {name : '年最高', value : 182.2, xAxis: 7, yAxis: 183},
                          {name : '年最低', value : 2.3, xAxis: 11, yAxis: 3}
                      ]
                  },
                  markLine : {
                      data : [
                          {type : 'average', name : '平均值'}
                      ]
                  }
              }
          ]

        };     
        // 绘制图表
        myChart003.setOption(option003);

        let chart003Timer=setInterval(function(){
          let xAxisTempA=[];
          let xAxisTempB=[];
          for(let i=0;i<12;i++){
            xAxisTempA.push(i*Math.random(0,1)*40);
            xAxisTempB.push(i*Math.random(0,1)*40);
          }
          option003.series[0].data=xAxisTempA;
          option003.series[1].data=xAxisTempB;
          myChart003.setOption(option003);
        },5000)
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#echartsDemo_container {
  width: 100%;
  height: 100%;
  background: #fff;
  overflow: auto;
  box-sizing: border-box;
  padding: 10px;
}
</style>
