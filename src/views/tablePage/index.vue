<template>
  <div class="table-base">
    <yunTable :pagination="pagination" :columns="columns" :data="data" />
  </div>
</template>

<script setup>
import yunTable from 'packages/components/table/src/index.vue';
import { ref } from 'vue';

const data = [{ commandName: 1, data2: 2, enableCallback: 3 }];

const columns = [
  {
    label: '消息名称',
    prop: 'commandName',
  },
  {
    label: '回调地址',
    prop: 'data2',
  },
  {
    label: '开启/禁止回调',
    prop: 'enableCallback',
  },
  {
    label: '操作',
    prop: 'action',
    fixed: 'right',
  },
];

const pagination = ref({
  total: 2, // 总页数
  page: 1, // 当前页
  size: 10, // 限制数量
});
</script>

<style lang="scss" scoped>
.table-base {
  padding: 60px;
}
</style>
