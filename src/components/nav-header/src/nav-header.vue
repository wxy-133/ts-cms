<template>
  <div class="nav-header">
    <el-icon class="fold-menu fl" @click="handleFoldClick"
      ><expand v-if="isFold" /><fold v-else
    /></el-icon>
    <div class="content">
      <xy-breadcrumb :breadcrumbs="breadcrumbs" />
      <user-info></user-info>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import { useStore } from "@/store";
import { useRoute } from "vue-router";
import UserInfo from "./user-info.vue";
import xyBreadcrumb from "@/base-ui/breadcrumb";
import { pathMapBreadcrumbs } from "@/utils/map-menus";
export default defineComponent({
  emits: ["foldChange"],
  components: {
    UserInfo,
    xyBreadcrumb,
  },
  setup(props, { emit }) {
    const isFold = ref(true);
    const handleFoldClick = () => {
      isFold.value = !isFold.value;
      emit("foldChange", isFold.value);
    };
    // 面包屑的数据: [{name: , path: }]
    const store = useStore();
    const breadcrumbs = computed(() => {
      const userMenus = store.state.login.userMenus;
      const route = useRoute();
      const currentPath = route.path;
      return pathMapBreadcrumbs(userMenus, currentPath);
    });

    return {
      isFold,
      breadcrumbs,
      handleFoldClick,
    };
  },
});
</script>

<style scoped lang="less">
.nav-header {
  width: 100%;
  display: flex;
  align-self: center;
  .fold-menu {
    font-size: 30px;
    cursor: pointer;
    float: left;
  }
  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex: 1;
    padding: 0 20px;
  }
}
</style>
