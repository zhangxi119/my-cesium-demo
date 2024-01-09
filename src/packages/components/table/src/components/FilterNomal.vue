<template>
  <div class="dm-filter-header-radio" @click.stop>
    <el-popover
      ref="popoverDom"
      width="auto"
      popper-class="dm-popover"
      placement="bottom-end"
      trigger="click"
      @show="handleFocus"
      @hide="handleHide"
    >
      <template #reference>
        <div class="popover-pos">
          <el-tooltip v-if="tooltipVisible" content="搜索/筛选" placement="bottom">
            <span class="fiter-icon">
              <SearchSvg />
            </span>
          </el-tooltip>

          <span v-else class="fiter-icon">
            <SearchSvg />
          </span>
        </div>
      </template>

      <el-checkbox
        v-if="field.header.component === 'el-checkbox-group'"
        v-model="checkAll"
        :indeterminate="isIndeterminate"
        label="true"
        @change="handleCheckAllChange"
      >
        全选
      </el-checkbox>

      <component
        :is="field.header.component"
        v-if="componentType === 1"
        ref="inputDom"
        v-model="localSearchData"
        v-bind="getFormFieldProps"
        @change="handleChange"
      />
      <component
        :is="field.header.component"
        v-else-if="componentType === 2"
        ref="inputDom"
        v-model="localSearchData"
        v-bind="getFormFieldProps"
        :automatic-dropdown="true"
        :placeholder="`${getFormFieldProps.placeholder || '搜索'} 按Enter确认`"
        @keyup.enter="() => handleChange(localSearchData)"
        @clear="() => handleChange(localSearchData)"
      >
        <FieldSub
          :parent-name="field.header.component"
          :has-all="field.header.hasAll"
          :options="field.header.options"
        />
      </component>
      <component
        :is="field.header.component"
        v-else-if="componentType === 3"
        ref="inputDom"
        v-model="localSearchData"
        v-bind="getFormFieldProps"
        :automatic-dropdown="true"
        @change="handleChange"
      >
        <FieldSub
          :parent-name="field.header.component"
          :has-all="field.header.hasAll"
          :options="field.header.options"
        />
      </component>
    </el-popover>
  </div>
</template>

<script setup>
import { ref, nextTick, computed, inject, watch } from 'vue';
import FieldSub from './field-sub.vue';
import SearchSvg from './searchSvg.vue';

const NoSlotComponents = ['el-date-picker', 'el-cascader'];
const InputComponent = ['el-input'];
const props = defineProps({
  field: {
    type: Object,
    default: () => {},
  },
  searchForm: {
    type: Object,
    default: () => {},
  },
  getFormFieldProps: {
    type: Object,
    default: () => {},
  },
});

const emit = defineEmits(['handle-search', 'update:searchForm']);

const componentType = computed(() => {
  if (NoSlotComponents.includes(props.field.header.component)) {
    return 1;
  } else if (InputComponent.includes(props.field.header.component)) {
    return 2;
  } else {
    return 3;
  }
});

// 自动聚焦
const inputDom = ref(null);
const tooltipVisible = ref(true);
const handleHide = () => {
  tooltipVisible.value = true;
};
const handleFocus = () => {
  tooltipVisible.value = false;
  nextTick(() => {
    inputDom.value.focus && inputDom.value.focus();
  });
};
const localSearchData = ref(null);

watch(
  () => props.searchForm[props.field.prop],
  (data) => {
    localSearchData.value = data;
  },
  {
    immediate: true,
    deep: true,
  },
);
// checkbox的全选操作
const checkAll = ref(false);
const isIndeterminate = ref(false);
const handleCheckBoxSearch = inject('handleCheckBoxSearch');
const handleCheckAllChange = (val) => {
  handleCheckBoxSearch(props.field.prop, val, props.field.header.options);
  isIndeterminate.value = false;
};

// 筛选触发
const handleChange = (val) => {
  // checkbox-group特殊处理
  if (props.field.header.component === 'el-checkbox-group') {
    if (props.field.header.options.length === val.length) {
      checkAll.value = true;
      isIndeterminate.value = false;
    }
    if (props.field.header.options.length > val.length && val.length > 0) {
      checkAll.value = true;
      isIndeterminate.value = true;
    }
    if (val.length === 0) {
      checkAll.value = false;
      isIndeterminate.value = false;
    }
  }

  if (props.field.header.component !== 'el-checkbox-group') {
    handleCheckCancel();
  }
  if (props.field.header.component === 'el-input') {
    localSearchData.value = localSearchData.value.trim?.();
  }
  emit('update:searchForm', { ...props.searchForm, [props.field.prop]: localSearchData.value });
  emit('handle-search');
};

// 隐藏popover
const popoverDom = ref(null);
const handleCheckCancel = () => {
  nextTick(() => {
    popoverDom.value.hide();
  });
};
</script>

<style scoped lang="scss">
.filter-box {
  height: 23px;
}
.dm-filter-header-radio {
  display: table;
  width: 28px;
  height: 28px;
  border-radius: 4px;
  overflow: hidden;
  margin-right: -6px;
  .icon-filter {
    color: #808792;
  }
}
.dm-filter-header-radio:hover {
  // background: var(--el-border-color-light);
  border-radius: 4px;
}
.dm-popover {
  :deep(.el-input__inner) {
    color: #000f25;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
  }

  .el-radio-group {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    .el-radio {
      height: 22px;
      line-height: 22px;
    }
  }
  .el-checkbox-group {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    .el-checkbox {
      height: 22px;
      line-height: 22px;
    }
  }
  .el-select {
    width: 180px;
  }
  .el-input {
    width: 180px;
  }
}

.el-tooltip__trigger[aria-describedby] {
  .fiter-icon {
    background-color: var(--el-border-color-light);
  }
}
.fiter-icon {
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  border-radius: 4px;
  cursor: pointer;
  &:hover,
  &[aria-describedby] {
    background-color: var(--el-border-color-lighter);
  }

  // &:active {
  //   background-color: var(--el-border-color-light);
  // }
}
.dm-popover-header {
  display: flex;
  justify-content: space-between;
  .btn {
    width: 48px;
    height: 24px;
    font-size: 12px;
    line-height: 20px;
    margin-top: 7px;
  }
}
.divider {
  margin: 13px 0;
  border-color: var(--el-border-color-light);
}
.cell {
  overflow: inherit;
}
</style>

<style>
.dm-popover.el-popper {
  padding: 12px 20px;
  display: flex;
  flex-direction: column;
  inset: -7px 0px auto auto !important;
  /* .el-popper__arrow {
    display: none;
  } */
}
</style>
