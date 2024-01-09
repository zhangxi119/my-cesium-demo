<template>
  <template v-if="isOtherComponent">
    <FilterOther v-bind="$attrs" />
  </template>
  <template v-else>
    <FilterDefault v-bind="$attrs" />
  </template>
</template>

<script setup>
import FilterDefault from './FilterNomal.vue';
import FilterOther from './FilterOther.vue';
import { computed, useAttrs } from 'vue';

const attrs = useAttrs();
const othersComponent = ['el-cascader', 'el-select'];
const isOtherComponent = computed(() => {
  return othersComponent.includes(attrs.field.header.component);
});
</script>
<script>
export default {
  name: 'HeaderFilter',
  inheritAttrs: false,
};
</script>
