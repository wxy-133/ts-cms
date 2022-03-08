<template>
  <div class="user">
    <page-search
      :searchFormConfig="searchFormConfig"
      @resetBtnClick="resetBtnClick"
      @searchBtnClick="searchBtnClick"
    />
    <page-content
      ref="pageContentRef"
      :contentTableConfig="contentTableConfig"
      @newBtnClick="handleNewData"
      @editBtnCliclk="handleEditBtn"
      pageName="users"
    ></page-content>
    <page-model
      :defaultInfo="defaultInfo"
      ref="pageModalRef"
      pageName="users"
      :modalConfig="modalConfigRef"
    ></page-model>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "@/store";
import PageSearch from "@/components/page-search";
import PageContent from "@/components/page-content";
import PageModel from "@/components/page-model";

import { usePageSearch } from "@/hooks/usePageSearch";
import { usePageModel } from "@/hooks/use-page-model";

import { searchFormConfig } from "./config/search.config";
import { contentTableConfig } from "./config/content.config";
import { modalConfig } from "./config/model.config";

export default defineComponent({
  name: "users",
  components: {
    PageSearch,
    PageContent,
    PageModel,
  },
  setup() {
    const [searchBtnClick, resetBtnClick, pageContentRef] = usePageSearch();

    //pageModel相关的hook逻辑
    const newCallback = () => {
      const passwordItem = modalConfig.formItems.find(
        (item) => item.field === "password"
      );
      passwordItem!.isHidden = false;
    };
    const editCallback = () => {
      const passwordItem = modalConfig.formItems.find(
        (item) => item.field === "password"
      );
      passwordItem!.isHidden = true;
    };
    const store = useStore();
    const modalConfigRef = computed(() => {
      const departmentItem = modalConfig.formItems.find(
        (item) => item.field === "departmentId"
      );

      departmentItem!.options = store.state.entireDepartment.map((item) => {
        return { title: item.name, value: item.id };
      });
      const roleItem = modalConfig.formItems.find((item) => item.field === "roleId");

      roleItem!.options = store.state.entireRole.map((item) => {
        return { title: item.name, value: item.id };
      });
      return modalConfig;
    });

    const [pageModalRef, defaultInfo, handleNewData, handleEditBtn] = usePageModel(
      newCallback,
      editCallback
    );
    return {
      searchFormConfig,
      contentTableConfig,
      searchBtnClick,
      resetBtnClick,
      pageContentRef,
      modalConfigRef,
      pageModalRef,
      handleNewData,
      handleEditBtn,
      defaultInfo,
    };
  },
});
</script>

<style scoped></style>
