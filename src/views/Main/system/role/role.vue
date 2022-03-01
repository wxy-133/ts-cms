<template>
  <div class="user">
    <page-search :searchFormConfig="searchFormConfig" />
    <page-content :contentTableConfig="rolesTableConfig" pageName="role"></page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import PageSearch from "@/components/page-search";
import PageContent from "@/components/page-content";

import { searchFormConfig } from "./config/search.config";
import { rolesTableConfig } from "./config/roles.config";

export default defineComponent({
  name: "users",
  components: {
    PageSearch,
    PageContent,
  },
  setup() {
    return {
      searchFormConfig,
      rolesTableConfig,
    };
  },
});
</script>

<style scoped></style>
