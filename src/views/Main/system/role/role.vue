<template>
  <div class="user">
    <page-search :searchFormConfig="searchFormConfig" />
    <page-content
      ref="pageModalRef"
      :contentTableConfig="contentTableConfig"
      @newBtnClick="handleNewData"
      @editBtnCliclk="handleEditBtn"
      pageName="role"
    ></page-content>
    <page-model
      :defaultInfo="defaultInfo"
      ref="pageModalRef"
      :modalConfig="modalConfig"
      :otherInfo="otherInfo"
      pageName="role"
    >
      <div class="menu-tree">
        <el-tree
          ref="elTreeRef"
          :data="menus"
          show-checkbox
          node-key="id"
          :props="{ children: 'children', label: 'name' }"
          @check="handleCheckChange"
        ></el-tree>
      </div>
    </page-model>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, nextTick } from "vue";
import { useStore } from "@/store";
import { getMenuLeafKeys } from "@/utils/map-menus";

import { ElTree } from "element-plus";
import PageSearch from "@/components/page-search";
import PageContent from "@/components/page-content";
import PageModel from "@/components/page-model";

import { searchFormConfig } from "./config/search.config";
import { contentTableConfig } from "./config/content.config";
import { modalConfig } from "./config/model.config";

import { usePageModel } from "@/hooks/use-page-model";

export default defineComponent({
  name: "users",
  components: {
    PageSearch,
    PageContent,
    PageModel,
  },
  setup() {
    // 1.处理pageModel的hook
    const elTreeRef = ref<InstanceType<typeof ElTree>>();
    const editCallback = (item: any) => {
      const leafKeys = getMenuLeafKeys(item.menuList);
      nextTick(() => {
        console.log(elTreeRef.value);
        elTreeRef.value?.setCheckedKeys(leafKeys, false);
      });
    };
    const [pageModalRef, defaultInfo, handleNewData, handleEditBtn] = usePageModel(
      undefined,
      editCallback
    );
    const store = useStore();
    const menus = computed(() => store.state.entireMenu);
    const otherInfo = ref({});
    const handleCheckChange = (data1: any, data2: any) => {
      const checkedKeys = data2.checkedKeys;
      const halfCheckedKeys = data2.halfCheckedKeys;
      const menuList = [...checkedKeys, ...halfCheckedKeys];
      otherInfo.value = { menuList };
    };
    return {
      searchFormConfig,
      contentTableConfig,
      pageModalRef,
      defaultInfo,
      handleNewData,
      handleEditBtn,
      modalConfig,
      menus,
      otherInfo,
      handleCheckChange,
      elTreeRef,
    };
  },
});
</script>

<style lang="less" scoped>
.menu-tree {
  margin-left: 20px;
}
</style>
