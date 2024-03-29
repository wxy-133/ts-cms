<template>
  <div class="page-content">
    <xy-table
      :listData="dataList"
      v-bind="contentTableConfig"
      :listCount="dataCount"
      v-model:page="pageInfo"
    >
      <!-- 1.header中的插槽 -->
      <template #headerHandler>
        <el-button v-if="isCreate" type="primary" size="small" @click="handleNewClick"
          >新建用户</el-button
        >
      </template>

      <!-- 2.列中的插槽 -->
      <template #status="scope">
        <el-button plain size="small" :type="scope.row.enable ? 'success' : 'danger'">
          {{ scope.row.enable ? "启用" : "禁用" }}
        </el-button>
      </template>
      <template #createAt="scope">
        <span>{{ $filters.formatTime(scope.row.createAt) }}</span>
      </template>
      <template #updateAt="scope">
        <span>{{ $filters.formatTime(scope.row.updateAt) }}</span>
      </template>
      <template #handler="scope">
        <div class="handle-btns">
          <el-button
            v-if="isUpdate"
            size="small"
            type="text"
            @click="handleEditClick(scope.row)"
            ><el-icon><edit /></el-icon>编辑</el-button
          >
          <el-button
            v-if="isDelete"
            size="small"
            type="text"
            @click="handleDeleteClick(scope.row)"
            ><el-icon><delete /></el-icon>删除</el-button
          >
        </div>
      </template>

      <!-- 在page-content动态插入s剩余插槽 -->
      <template v-for="item in otherPropSlots" :key="item.prop" #[item.slotName]="scope">
        <template v-if="item.slotName">
          <slot :name="item.slotName" :row="scope.row"></slot
        ></template>
      </template>
    </xy-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, watch } from "vue";
import { useStore } from "@/store";
import { usePermission } from "@/hooks/use-permissions.ts";

import xyTable from "@/base-ui/table";

export default defineComponent({
  components: {
    xyTable,
  },
  props: {
    contentTableConfig: {
      type: Object,
      require: true,
    },
    pageName: {
      type: String,
      required: true,
    },
  },
  emit: ["newBtnClick", "editBtnCliclk"],
  setup(props, { emit }) {
    const store = useStore();
    // 0.获取操作的权限
    const isCreate = usePermission(props.pageName, "create");
    const isUpdate = usePermission(props.pageName, "update");
    const isDelete = usePermission(props.pageName, "delete");
    const isQuery = usePermission(props.pageName, "query");

    const pageInfo = ref({ currentPage: 1, pageSize: 10 });
    watch(pageInfo, () => getPageData());
    const getPageData = (queryInfo: any = {}) => {
      if (!isQuery) return;
      store.dispatch("system/getPageListAction", {
        pageName: props.pageName,
        queryInfo: {
          offset: (pageInfo.value.currentPage - 1) * pageInfo.value.pageSize,
          size: pageInfo.value.pageSize,
          ...queryInfo,
        },
      });
    };
    getPageData();
    // 获取数据
    const dataList = computed(() => store.getters[`system/pageListData`](props.pageName));
    const dataCount = computed(() =>
      store.getters[`system/pageListCount`](props.pageName)
    );
    // 4.获取其他的动态插槽名称
    const otherPropSlots = props.contentTableConfig?.propList.filter((item: any) => {
      if (item.slotName === "statue") return false;
      if (item.slotName === "createAt") return false;
      if (item.slotName === "updateAt") return false;
      if (item.slotName === "handler") return false;
      return true;
    });
    // 5.删除/编辑按钮
    const handleDeleteClick = (item: any) => {
      store.dispatch("system/deletePageDataAction", {
        pageName: props.pageName,
        id: item.id,
      });
    };
    const handleNewClick = () => {
      emit("newBtnClick");
    };
    const handleEditClick = (item: any) => {
      emit("editBtnCliclk", item);
    };
    return {
      dataList,
      getPageData,
      dataCount,
      pageInfo,
      otherPropSlots,
      isCreate,
      isUpdate,
      isDelete,
      handleDeleteClick,
      handleNewClick,
      handleEditClick,
    };
  },
});
</script>

<style scoped>
.page-content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
