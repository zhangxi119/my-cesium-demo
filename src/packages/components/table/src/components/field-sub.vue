<!-- eslint-disable vue/no-multiple-template-root -->
<template>
  <template v-if="subComponent">
    <template v-for="option in options" :key="option.value">
      <component
        :is="subComponent"
        v-if="subComponent === 'el-option'"
        v-bind="option"
        :label="option.label"
        :value="option.value"
      />
      <component :is="subComponent" v-else v-bind="option" :label="option.value">
        {{ option.label }}
      </component>
    </template>
  </template>
  <template v-else>
    <template v-if="parentName === 'el-select'">
      <el-option
        v-for="option in options"
        :key="option.value"
        v-bind="option"
        :label="option.label"
        :value="option.value"
      />
    </template>
    <template v-if="parentName === 'el-checkbox-group' || parentName === 'yun-checkbox-group'">
      <el-checkbox v-for="option in options" :key="option.value" v-bind="option" :label="option.value">
        {{ option.label }}
      </el-checkbox>
    </template>

    <template v-if="parentName === 'el-radio-group' || parentName === 'yun-radio-group'">
      <el-radio v-if="hasAll" label=""> 全部 </el-radio>
      <el-radio v-for="option in options" :key="option.value" v-bind="option" :label="option.value">
        {{ option.label }}
      </el-radio>
    </template>
  </template>
</template>

<script setup>
import { ref, computed, inject, onMounted } from 'vue';

const props = defineProps({
  options: {
    type: Array,
    default: () => [],
  },
  hasAll: {
    type: Boolean,
    default: true,
  },
  parentName: {
    type: String,
    default: '',
  },
  subComponent: {
    type: [String, Object],
    default: '',
  },
});
</script>

<style lang="scss" scoped>
.el-select,
.el-cascader,
.el-date-editor.el-input,
.el-date-editor--daterange.el-input,
.el-date-editor--daterange.el-input__inner,
.el-date-editor--timerange.el-input,
.el-date-editor--timerange.el-input__inner,
.el-date-editor--datetimerange.el-input,
.el-date-editor--datetimerange.el-input__inner {
  width: 100%;
}

.el-date-editor .el-range-separator {
  width: auto;
}
.el-radio {
  margin-right: 24px;
  &:last-child {
    margin-right: 0;
  }
}
.el-checkbox {
  margin-right: 24px;
  &:last-child {
    margin-right: 0;
  }
}
</style>
