// pages/bar/index.js
function initChart(canvas, width, height) {
    const chart = echarts.init(canvas, null, {
      width: width,
      height: height
    });
    canvas.setChart(chart);
  //ec在我们对象，在页面加载后被初始化并设置
    var option = {
      //...
    };
    chart.setOption(option);
    return chart;
  }
  
  Page({
    data: {
      ec: {
        onInit: initChart
      }
    }
  });