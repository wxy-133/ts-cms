<template>
  <div class="base-echart">
    <div ref="echartDivRef" :style="{ width: width, height: height }"></div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, defineProps, withDefaults } from "vue";
import { EChartsOption } from "echarts";
import useEchart from "../hooks/useEchart";
// 定义props
// defineProps({
//   width: String,
//   height: String,
// });
const props = withDefaults(
  defineProps<{ width?: string; height?: string; options: EChartsOption }>(),
  {
    width: "100%",
    height: "360px",
  }
);
const echartDivRef = ref<HTMLElement>();
onMounted(() => {
  const { setOtions } = useEchart(echartDivRef.value);
  setOtions(props.options);
});
</script>
<style scoped></style>
