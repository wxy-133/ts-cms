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
      pageName="users"
    ></page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

import PageSearch from "@/components/page-search";
import PageContent from "@/components/page-content";

import { usePageSearch } from "@/hooks/usePageSearch.ts";

import { searchFormConfig } from "./config/search.config";
import { contentTableConfig } from "./config/content.config";

export default defineComponent({
  name: "users",
  components: {
    PageSearch,
    PageContent,
  },
  setup() {
    const [searchBtnClick, resetBtnClick, pageContentRef] = usePageSearch();
    return {
      searchFormConfig,
      contentTableConfig,
      searchBtnClick,
      resetBtnClick,
      pageContentRef,
    };
  },
});
</script>

<style scoped></style>
