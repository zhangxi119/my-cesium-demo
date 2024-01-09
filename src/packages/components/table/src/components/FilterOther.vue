<template>
  <div class="dm-filter-header-radio" @click.stop>
    <el-popover
      ref="popoverDom"
      v-model:visible="visible"
      width="auto"
      popper-class="dm-popover dm-others-popover"
      placement="bottom-end"
      trigger="click"
      @show="handleFocus"
      @hide="handleHide"
    >
      <template #reference>
        <div class="popover-pos" @click="triggerVisible">
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
      <div ref="popoverDomContent">
        <component
          :is="field.header.component"
          v-if="componentType === 1"
          ref="inputDom"
          v-model="localSearchData"
          v-bind="getFormFieldProps"
          @change="handleChange"
          @visible-change="hide"
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
          @visible-change="hide"
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
          @visible-change="hide"
        >
          <FieldSub
            :parent-name="field.header.component"
            :has-all="field.header.hasAll"
            :options="field.header.options"
          />
        </component>
      </div>
    </el-popover>
  </div>
</template>

<script setup>
import { ref, nextTick, watch, computed } from 'vue';
import FieldSub from './field-sub.vue';
import SearchSvg from './searchSvg.vue';
import { onClickOutside } from '@vueuse/core';

const NoSlotComponents = ['el-date-picker', 'el-cascader'];
const InputComponent = ['el-input'];

const visible = ref(false);
const popoverVisible = ref(false);

const triggerVisible = () => {
  visible.value = !visible.value;
};
const hide = (val) => {
  popoverVisible.value = val;
  if (!val) {
    visible.value = false;
  }
};

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

const componentType = computed(() => {
  if (NoSlotComponents.includes(props.field.header.component)) {
    return 1;
  } else if (InputComponent.includes(props.field.header.component)) {
    return 2;
  } else {
    return 3;
  }
});
const emit = defineEmits(['handle-search', 'update:searchForm']);

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

// 筛选触发
const handleChange = () => {
  emit('update:searchForm', { ...props.searchForm, [props.field.prop]: localSearchData.value });
  emit('handle-search');
};

// popover ref
const popoverDom = ref(null);
const popoverDomContent = ref(null);

onClickOutside(popoverDomContent, (event) => {
  if (visible.value && !popoverVisible.value) {
    if (!event.target.className.includes('dm-others-popover')) {
      visible.value = false;
    }
  }
});
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
