import React, { useEffect, useState } from 'react';
import * as echarts from 'echarts';
import './index.less'

const option = {
  title: {
    text: '占比',
    subtext: '%',
    left: 'center'
  },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    orient: 'vertical',
    left: 'left'
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: '50%',
      data: [
        { value: 1048, name: '通过' },
        { value: 735, name: '过期' },
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
};

function Home() {
  const initChart = () => {
    const chartDom = document.getElementById('pie-chart');
    const myChart = echarts.init(chartDom);
    myChart.setOption(option)
  } 

  useEffect(() => {
    initChart()
  },[])

  return (
    <div id="pie-chart">

    </div>
  );
}

export default Home;