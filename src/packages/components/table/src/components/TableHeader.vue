<template>
  <div v-if="$slots.tableHeaderLeft || $slots.tableHeaderRight" class="dm-table-header">
    <div v-if="$slots.tableHeaderLeft" class="dm-table-header-left">
      <slot name="tableHeaderLeft" />
    </div>
    <div v-if="$slots.tableHeaderRight" class="dm-table-header-right">
      <slot name="tableHeaderRight" />
      <el-popover
        v-if="showTableSetting"
        width="auto"
        popper-class="dm-popover"
        placement="bottom-end"
      >
        <template #reference>
          <i class="yun-iconfont icon-settings" />
        </template>

        <div class="dm-popover-header">
          <el-button type="text" @click="resetColumns">
            重置
          </el-button>
          <el-button type="text" @click="submitColumns">
            确认
          </el-button>
        </div>
        <el-checkbox-group v-model="checkedList" class="checkbox-list">
          <template v-for="item in columns" :key="item.prop">
            <el-checkbox
              v-if="!columnTypes.includes(item.type)"
              class="checkbox-item"
              :label="item.prop"
            >
              {{ item.label }}
            </el-checkbox>
          </template>
        </el-checkbox-group>
      </el-popover>
    </div>
  </div>
  <div v-if="$slots.tableShoulder" class="dm-table-shoulder">
    <slot name="tableShoulder" />
  </div>
</template>

<script setup>
import { watchEffect, ref, toRefs } from 'vue';

const props = defineProps({
  showTableSetting: {
    type: Boolean,
    default: false,
  },
  columns: {
    type: Array,
    default: () => [],
  },
  checkedColumns: {
    type: Array,
    default: () => null,
  },
});

const emit = defineEmits(['submit']);

const { columns, checkedColumns } = toRefs(props);
const columnTypes = ['index', 'selection'];

const checkedList = ref([]);
watchEffect(() => {
  checkedList.value = checkedColumns.value
    ? [...checkedColumns.value]
    : getColumnsProp(columns.value);
});
const resetColumns = () => {
  checkedList.value = getColumnsProp(columns.value);
};
const submitColumns = () => {
  emit('submit', checkedList.value);
};

function getColumnsProp(columns) {
  return columns.map((item) => item.prop);
}
</script>

<style scoped>
.dm-table-header {
  display: flex;
  padding:8px 0;
}
.dm-table-header-left{
  flex: 1;
}
.dm-table-header-left,
.dm-table-header-right {
  display: flex;
  align-items: center;
  overflow: hidden;
}
.dm-table-header-right {
  justify-content: flex-end;
}
.dm-popover-header {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #dcdfe6;
}
.checkbox-list {
  display: flex;
  flex-direction: column;
  max-height: 200px;
  overflow-y: auto;
}
.checkbox-item {
  flex-shrink: 0;
  height: 30px;
}
</style>

<style>
.dm-popover.el-popper {
  min-width: auto;
  padding: 12px 20px !important;
}
</style>
