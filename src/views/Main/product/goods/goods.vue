<template>
  <div class="user">
    <page-content
      ref="pageContentRef"
      :contentTableConfig="contentTableConfig"
      pageName="goods"
    >
      <template #image="scope">
        <el-image style="width: 100px; height: 100px" :src="scope.row.imgUrl"></el-image>
      </template>
      <template #oldPrice="scope"> {{ "$" + scope.row.oldPrice }}</template>
    </page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import PageContent from "@/components/page-content";

import { contentTableConfig } from "./config/content.config";

export default defineComponent({
  name: "goods",
  components: {
    PageContent,
  },
  setup() {
    return {
      contentTableConfig,
    };
  },
});
</script>

<style scoped></style>
