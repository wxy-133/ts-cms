<template>
  <div class="">
    <xyForm v-bind="searchFormConfig" v-model="formData">
      <template #header>
        <h1>高级检索</h1>
      </template>
      <template #footer>
        <div class="handle-btns">
          <el-button type="primary" @click="handleSearch">搜索</el-button>
          <el-button type="primary" @click="handleResetClick">重置</el-button>
        </div>
      </template>
    </xyForm>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import xyForm from "@/base-ui/form";
export default defineComponent({
  components: {
    xyForm,
  },
  props: {
    searchFormConfig: {
      type: Object,
      required: true,
    },
  },
  emits: ["resetBtnClick", "searchBtnClick"],
  setup(props, { emit }) {
    // const formData = ref({
    //   id: "",
    //   name: "",
    //   password: "",
    //   sport: "",
    //   createTime: "",
    // });
    // 双向绑定的属性应该是由配置文件的field来决定
    // 1.优化一: formData中的属性应该动态来决定
    const formItems = props.searchFormConfig?.formItems ?? [];
    const formOriginData: any = {};
    for (const item of formItems) {
      formOriginData[item.field] = "";
    }
    const formData = ref(formOriginData);
    // 2.优化二：当用户点击重置
    const handleResetClick = () => {
      // formData.value = formOriginData;
      for (const key in formOriginData) {
        formData.value[`${key}`] = formOriginData[key];
      }
      emit("resetBtnClick");
    };
    // 3.当用户点击搜索
    const handleSearch = () => {
      // console.log("handleSearch");
      emit("searchBtnClick", formData.value);
    };
    return {
      formData,
      handleResetClick,
      formOriginData,
      handleSearch,
    };
  },
});
</script>
<style scoped>
.handle-btns {
  text-align: right;
  padding: 0 50px 20px 0;
}
</style>
