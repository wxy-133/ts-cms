import * as echarts from 'echarts'
import ChinaMapData from '../data/china.json'

echarts.registerMap('china',ChinaMapData)
export default function (el: HTMLElement) {
  const echartsInstance = echarts.init(el)
  const setOtions = (options: echarts.EChartsOption) => {
    echartsInstance.setOption(options)
  }
  const setSize = () => {
    echartsInstance.resize()
  }
  window.addEventListener('resize', () => {
    echartsInstance.resize()
  })
  return {
    echartsInstance,
    setOtions,
    setSize
  }
}
