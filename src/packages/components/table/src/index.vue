<template>
  <div ref="containerRef" :class="['dm-table', { autoHeight: autoHeight }]">
    <div ref="headerRef" class="table-header-warpper">
      <TableHeader :columns="columns" :checked-columns="checkedColumns" @submit="handleSubmit">
        <template v-if="$slots.tableHeaderLeft" #tableHeaderLeft>
          <slot name="tableHeaderLeft" />
        </template>
        <template v-if="$slots.tableHeaderRight" #tableHeaderRight>
          <slot name="tableHeaderRight" />
        </template>
        <template v-if="$slots.tableShoulder" #tableShoulder>
          <slot name="tableShoulder" />
        </template>
      </TableHeader>
    </div>
    <div ref="filterRef" class="filter-manage-box-warpper">
      <div v-show="searchData.length > 0" class="filter-manage-box">
        <div class="clear-box">
          <el-button type="secondary" @click="clearSearch(false)"> 清除筛选 </el-button>
        </div>
        <div v-if="searchData.length > 0" class="list">
          <el-tag
            v-for="item in searchData"
            :key="item.key"
            closable
            class="item"
            effect="plain"
            type="info"
            :disable-transitions="false"
            @close="clearSearch(item.key)"
          >
            {{ item.label }}: <span class="item_value">{{ item.value }}</span>
          </el-tag>
        </div>
      </div>
    </div>
    <div class="dm-table-wrapper">
      <div class="lf-border" />
      <div class="tp-border" />
      <div class="rt-border" />
      <div class="bt-border" />

      <el-tooltip
        ref="tableSettingPopover"
        effect="dark"
        placement="top"
        trigger="hover"
        :disabled="tableSettingData.disabled"
      >
        <template #content>
          {{ tableSettingData.tips }}
        </template>
        <TableOperate
          v-model:tableSize="tableSize"
          :show-table-setting="showTableSetting"
          :columns="setListColumns"
          :default-columns="columns"
          :default-checked-columns="checkedColumns"
          :default-size="size"
          :checked-columns="selectedFieldKeys"
          @submit="handleSubmit"
        />
      </el-tooltip>
      <el-table
        ref="elTable"
        :key="slotKeys.join('')"
        v-scollRight="{ elm: tableSettingPopover, num: Math.random() }"
        v-loading="loading"
        :header-cell-style="defaultHeaderCellStyle"
        :cell-style="defaultCellStyle"
        :size="tableSize"
        :height="autoHeight ? tableHeight : $attrs.height"
        :stripe="true"
        v-bind="$attrs"
        :border="true"
        :empty-middle="true"
        :class="{
          'dm-table__main': true,
          'show-table-setting-table': showTableSetting,
          'no-stripe-bg': typeof $attrs.stripe === 'undefined' ? false : !$attrs.stripe,
          'dm-table_border': showBorder,
        }"
        v-on="events"
        @header-dragend="headerDragend"
      >
        <template #empty>
          <slot v-if="$slots.empty" name="empty" />
          <el-empty v-else :image="imgUrl" description="暂无数据" />
        </template>
        <YunTableColumn
          v-model:searchForm="searchForm"
          :actual-columns="actualColumns"
          :transformation="transformation"
          :slot-keys="slotKeys"
          :get-form-field-props="getFormFieldProps"
          @handle-search="handleSearch($event, $props, currentInstance)"
        >
          <template
            v-for="key in Object.keys($slots).filter((key) => slotKeys.includes(key))"
            :key="key"
            #[key]="scope"
          >
            <slot v-if="key.endsWith('-header')" :name="key" :column="scope.column" :$index="scope.$index" />
            <slot v-else :name="key" :row="scope.row" :column="scope.column" :$index="scope.$index" />
          </template>
        </YunTableColumn>
      </el-table>
    </div>
    <div ref="footerRef" class="dm-table__footer-warpper">
      <div v-if="pagination || $slots.bulkOperations || $slots.batch" class="dm-table__footer">
        <div class="dm-bulk-operations">
          <slot v-if="$slots.bulkOperations" name="bulkOperations" />
          <slot v-else-if="$slots.batch" name="batch" />
        </div>
        <div>
          <template v-if="yunPagination">
            <yun-pagination
              v-if="pagination && pagination?.total > 0"
              v-bind="paginationProps"
              @current-change="handleCurrentChange"
              @size-change="handleSizeChange"
            />
          </template>
          <template v-else>
            <el-pagination
              v-if="pagination && pagination?.total > 0"
              v-bind="paginationProps"
              @current-change="handleCurrentChange"
              @size-change="handleSizeChange"
            />
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, toRefs, provide, watch, nextTick, Comment, onMounted, getCurrentInstance, watchEffect } from 'vue';
import TableHeader from './components/TableHeader.vue';
// import myPagination from '../../pagination/src/index.vue';
import TableOperate from './components/TableOperate.vue';
import useExport from './uses/useExport';
import useTableHeightResize from './uses/useTableHeightResize';
// import useColum from './uses/useColum';
// import useTableColumCache from './uses/useTableColumCache';
import useTableSearch from './uses/useTableSearch';
import useTableSearchHeader from './uses/useTableSearchHeader';
import useTable from './uses/useTable';
import usePagination from './uses/usePagination';
import { useBackfillFilter } from './uses/useCacheFilter';
import { getConfig, setConfig } from 'packages/utils/config';
import { useScroll } from '@vueuse/core';
import jsMd5 from 'js-md5';
import YunTableColumn from './components/YunTableColumn.vue';
const NoSlotComponents = ['el-date-picker', 'el-cascader'];

let scrollBehavior = null;

export default {
  name: 'YunTable',
  components: {
    // FieldSub,
    TableHeader,
    // myPagination,
    TableOperate,
    YunTableColumn,
  },
  directives: {
    scollRight: {
      updated: (el, binding) => {
        const selectWrap = el.querySelector('.el-scrollbar__wrap');
        selectWrap.removeEventListener('scroll', scrollBehavior);
        const { arrivedState } = useScroll(selectWrap);
        let timer = null;
        const openTips = () => {
          if (timer) {
            clearTimeout(timer);
          }
          if (binding.value && binding.value?.elm) {
            binding.value.elm.open = true;
            timer = setTimeout(() => {
              binding.value.elm.open = false;
            }, 3000);
          }
        };

        scrollBehavior = () => {
          if (arrivedState.right === true) {
            openTips();
          }
        };
        selectWrap.addEventListener('scroll', scrollBehavior);
      },
      unmounted: (el) => {
        const selectWrap = el.querySelector('.el-scrollbar__wrap');
        selectWrap.removeEventListener('scroll', scrollBehavior);
      },
    },
  },
  inheritAttrs: false,
  props: {
    events: {
      type: Object,
      default: () => ({}),
    },
    autoHeight: {
      type: Boolean,
      default: false,
    },
    showTableSetting: {
      type: Boolean,
      default: false,
    },
    tableSetting: {
      type: Object,
      default: () => {},
    },
    tableHeaderKey: {
      type: String,
      default: '',
    },
    cacheSize: {
      type: Number,
      default: 20,
    },
    checkedColumns: {
      type: Array,
      default: () => [],
    },
    modelValue: {
      type: Object,
      default: () => ({}),
    },
    loading: {
      type: Boolean,
      default: false,
    },
    // 表格列
    columns: {
      type: Array,
      default: () => [],
    },
    pagination: {
      type: Object,
      default: () => null,
    },
    transformation: {
      type: [Object, Function],
      default: () => (val) => {
        return val === undefined || val === '' || val === null ? '-' : val;
      },
    },
    size: {
      type: String,
      default: 'small',
    },
    yunPagination: {
      type: Boolean,
      default: () => getConfig('table').yunPagination,
    },
    showBorder: {
      type: Boolean,
      default: false,
    },
    // 是否缓存搜索条件
    filterCache: {
      type: Boolean,
      default: () => getConfig('table').filterCache,
    },
    filterCacheName: {
      type: String,
      default: '',
    },
  },
  emits: ['columnsChange', 'update:modelValue', 'update:pagination', 'search', 'reset'],
  setup(props, { emit }) {
    const { pagination } = toRefs(props);
    const elTable = ref(null);

    const { paginationProps, handleSizeChange, handleCurrentChange } = usePagination(emit, pagination);
    const {
      defaultHeaderCellStyle,
      defaultCellStyle,
      handleSubmit,
      actualColumns,
      slotKeys,
      setListColumns,
      tableSize,
      selectedFieldKeys,
    } = useTable(props, emit);
    // 行高变化时，触发重置表格layout
    watch(
      () => tableSize.value,
      () => {
        nextTick(() => {
          elTable.value.doLayout();
        });
      },
    );
    // 表格自带筛选处理
    const { searchForm, clearSearch, handleSearch, getFormFieldProps, handleCheckBoxSearch } = useTableSearch(
      props,
      emit,
    );

    provide('searchFrom', searchForm);
    provide('handleCheckBoxSearch', handleCheckBoxSearch);
    const exportFunc = useExport(elTable);
    const currentInstance = getCurrentInstance();
    onMounted(() => {
      if (props.filterCache) {
        useBackfillFilter(props, emit, currentInstance);
      }
    });
    // 表格顶部筛选数据处理
    const { searchData } = useTableSearchHeader(props, searchForm);

    // 列不可小于110
    const headerDragend = (...args) => {
      if (args[0] < 110) {
        args[2].width = 110;
      }
    };

    const indexMethod = (index) => {
      if (props.pagination) {
        return index + 1 + ((props.pagination.page || 1) - 1) * (props.pagination.size || 0);
      } else {
        return index + 1;
      }
    };
    // 判断属性中是否带了min-width，有取前端传入，没有则默认110
    const fieldChange = (field) => {
      let bindField = { ...field };
      if (bindField && !bindField.minWidth) {
        bindField.minWidth = 110;
      }
      if (field.type === 'index') {
        field.index = field.index || indexMethod;
      }
      return bindField;
    };
    const isComment = (slot, scope) => {
      const vnodes = slot(scope);
      return vnodes.every((v) => v.type === Comment);
    };
    const getMd5Key = (obj) => {
      return jsMd5(obj ? JSON.stringify(obj) : 'null');
    };
    const imgUrl = 'https://prod-ylzapp-public.oss-cn-zhangjiakou.aliyuncs.com/frontend/yun-design/empty__image.png';

    const tableSettingPopover = ref(null);
    const tableSettingVisible = ref(true);
    const tableSettingData = ref({
      disabled: true,
      visble: false,
      tips: '支持点击添加更多字段显示',
    });

    watchEffect(() => {
      if (props.tableSetting?.visble) {
        if (tableSettingPopover.value) {
          tableSettingPopover.value.open = true;
        }
      }
      tableSettingData.value.tips = props.tableSetting?.tips || '支持点击添加更多字段显示';
      tableSettingData.value.disabled = props.tableSetting?.tipsDisabled ? false : true;
    });

    const { tableHeight, containerRef, headerRef, filterRef, footerRef } = useTableHeightResize(props);

    return {
      tableSettingData,
      tableSettingPopover,
      tableSettingVisible,
      imgUrl,
      fieldChange,
      elTable,
      tableSize,
      NoSlotComponents,
      actualColumns,
      slotKeys,
      setListColumns,
      handleSubmit,
      selectedFieldKeys,
      clearSearch,
      defaultHeaderCellStyle,
      defaultCellStyle,
      paginationProps,
      handleSizeChange,
      handleCurrentChange,
      searchForm,
      searchData,
      handleSearch,
      currentInstance,
      getFormFieldProps,
      ...exportFunc,
      headerDragend,
      isComment,
      getMd5Key,
      setConfig,
      containerRef,
      headerRef,
      filterRef,
      footerRef,
      tableHeight,
    };
  },
};
</script>

<style lang="scss" scoped>
.dm-table {
  position: relative;
  &.autoHeight {
    height: 100%;
  }
  :deep(.el-table__empty-block) {
    width: 100% !important;
  }
}
.dm-table__footer {
  display: flex;
  justify-content: space-between;
  padding-top: 16px;
  flex-wrap: nowrap;
  .el-pagination {
    overflow: hidden;
  }
  :deep(.dm-bulk-operations) {
    display: flex;
    align-items: center;
    margin-right: 24px;
    flex: 1;
    overflow: hidden;
  }
  :deep(button.btn-next) {
    margin-right: 8px !important;
  }
  :deep(.el-pagination) {
    padding: 0;
  }
}

.dm-table {
  :deep(.el-table-column--selection .cell) {
    display: flex;
  }
  :deep(.el-button span) {
    line-height: 0;
  }
  :deep(.pl-rest) {
    height: 22px;
  }
  :deep(.filter-manage-box) {
    padding: 4px 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-bottom: 1px solid var(--el-border-color-light);
    flex-wrap: nowrap;
  }
  :deep(.filter-manage-box > .clear-box) {
    margin-right: 8px;
  }
  :deep(.filter-manage-box > .clear-box .el-button) {
    width: 72px;
    height: 24px;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 20px;
    text-align: center;
    font-weight: normal;
  }
  :deep(.filter-manage-box > .list) {
    flex-shrink: 1;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    overflow: hidden;
  }
  :deep(.filter-manage-box > .list .item) {
    margin: 4px 8px 4px 0;
    overflow: hidden;
    border-radius: 4px;
  }
  :deep(.filter-manage-box > .list .item .el-tag__content) {
    width: calc(100% - 10px);
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 12px;
    color: var(--el-text-color-secondary);
  }
  :deep(.filter-manage-box > .list .item .el-tag__content .item_value) {
    color: var(--el-text-color-primary);
  }
  :deep(.filter-manage-box > .list .item .el-tag__close) {
    color: var(--el-text-color-regular);
  }
  :deep(.filter-manage-box > .list .item .el-tag__close:hover) {
    color: var(--el-color-white);
    background-color: var(--el-text-color-regular);
  }
  :deep(.dm-table-wrapper) {
    position: relative;
  }
  :deep(.dm-table-wrapper .lf-border) {
    position: absolute;
    width: 1px;
    height: 100%;
    background: #fff;
    left: 0px;
    top: 0px;
    z-index: 5;
  }
  :deep(.dm-table-wrapper .tp-border) {
    position: absolute;
    width: 100%;
    height: 1px;
    background: #fff;
    top: 0px;
    left: 0px;
    z-index: 5;
  }
  :deep(.dm-table-wrapper .rt-border) {
    position: absolute;
    width: 1px;
    height: 100%;
    background: #fff;
    right: 0px;
    top: 0px;
    z-index: 5;
  }
  :deep(.dm-table-wrapper .bt-border) {
    position: absolute;
    height: 1px;
    width: 100%;
    background: #fff;
    left: 0px;
    bottom: 0px;
    z-index: 5;
  }
  :deep(.el-table th.el-table__cell) {
    vertical-align: top;
    position: relative;
  }
  :deep(.el-table__cell) {
    border-right: 0px;
  }
  :deep(.el-table__cell.action-cell .cell) {
    overflow: inherit;
  }
  :deep(.header-search-label) {
    margin-bottom: 4px;
    display: inline-block;
    line-height: 20px !important;
  }
  :deep(.el-table th.el-table__cell > .cell) {
    font-weight: 700;
    font-size: 14px;
    line-height: 22px;
    color: #404b5c;
    white-space: nowrap;
    height: 23px;
    overflow: inherit;
  }
  :deep(.el-table td.el-table__cell) {
    vertical-align: top;
    .cell {
      button.el-button--action,
      button.el-button--text {
        height: 22px;
        padding-top: 0px;
        padding-bottom: 0px;
      }
    }
  }
  :deep(.el-table td.el-table__cell > .cell) {
    line-height: 20px;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: var(--el-text-color-primary);
  }
  :deep(.el-table--border .el-table__inner-wrapper td:first-child) {
    border-left: none !important;
  }
  :deep(.el-table td.el-table__cell.el-table-fixed-column--left) {
    border-right: none !important;
  }
  :deep(.el-table th.el-table__cell.el-table-fixed-column--left) {
    border-right: none !important;
  }
  :deep(.el-table th.el-table__cell:not(:last-child):after) {
    content: ' ';
    position: absolute;
    width: 16px;
    height: 0px;
    left: -9px;
    top: 50%;
    margin-top: -1px;
    border-top: 1px solid var(--el-border-color-light);
    transform: rotate(90deg);
  }
  :deep(.el-table th.el-table__cell:first-child:after) {
    display: none;
  }
  :deep(.operate-column) {
    position: relative;
  }
  :deep(.filter-box) {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 23px;
  }
  :deep(.filter-box-content) {
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    flex-grow: 1;
  }
  :deep(.filter-box .filter-box-content) {
    font-size: 14px;
    padding: 3px 0;
    font-weight: 600;
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    flex-grow: 1;
    width: calc(100% - 28px);
  }
  :deep(.filter-box .filter-box-content .text-warpper) {
    font-size: 14px;
    font-weight: 600;
    display: flex;
    align-items: center;
    padding: 3px 8px;
    min-width: 44px;
    margin-left: -8px;
  }
  :deep(.filter-box .filter-box-content .icon-box) {
    width: 28px;
    height: 28px;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 4px;
  }
  :deep(.filter-box .filter-box-content .icon-box:hover) {
    background: var(--el-border-color-light);
  }
  :deep(.filter-box .filter-box-content .icon-box b) {
    margin: 0;
    color: var(--el-text-color-placeholder);
  }
  :deep(.filter-box .filter-box-content .text-box) {
    font-size: 14px;
    font-weight: 600;
    display: flex;
    align-items: center;
    padding: 3px 8px;
    min-width: 44px;
    margin-left: -8px;
  }
  :deep(.filter-box .filter-box-content .text-box i) {
    display: block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-top: -1px;
    font-style: normal;
  }
  :deep(th.is-sortable .cell) {
    display: flex;
    align-items: center;
  }
  :deep(th.is-sortable div.sort-box) {
    font-size: 14px;
    padding: 3px 0;
    font-weight: 600;
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    flex-grow: 1;
    width: calc(100% - 28px);
  }
  :deep(th.is-sortable div.sort-box .text-box) {
    font-size: 14px;
    font-weight: 600;
    display: flex;
    align-items: center;
    padding: 3px 8px;
    min-width: 66px;
    margin-left: -8px;
  }
  :deep(th.is-sortable div.sort-box .text-box i) {
    display: block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-top: -1px;
    font-style: normal;
  }
  :deep(th.is-sortable div.sort-box .caret-own-wrapper) {
    width: 16px;
    height: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transform: translate(-3px, 0);
  }
  :deep(th.is-sortable div.sort-box .caret-own-wrapper svg) {
    width: 10px;
    height: 7px;
  }
  :deep(th.is-sortable .caret-wrapper) {
    display: none;
  }
  :deep(th.is-sortable.ascending .text-box) {
    border-radius: 4px;
    padding: 3px 8px;
    margin-left: -8px;
  }
  :deep(th.is-sortable.descending .text-box) {
    border-radius: 4px;
    padding: 3px 8px;
    margin-left: -8px;
  }
  :deep(th.is-sortable .text-box:hover) {
    border-radius: 4px;
    padding: 3px 8px;
    margin-left: -8px;
  }
  :deep(th.is-sortable.ascending .text-box) {
    margin-left: 0;
  }
  :deep(th.is-sortable.ascending .text-box .caret-own-wrapper) {
    display: flex;
  }
  :deep(th.is-sortable.ascending .text-box .caret-own-wrapper .top path) {
    fill: var(--el-color-primary);
  }
  :deep(th.is-sortable.ascending .text-box .caret-own-wrapper .bot path) {
    fill: var(--el-border-color-base);
  }
  :deep(th.is-sortable.descending .text-box) {
    margin-left: 0;
  }
  :deep(th.is-sortable.descending .text-box .caret-own-wrapper) {
    display: flex;
  }
  :deep(th .text-box .caret-own-wrapper .top path) {
    fill: var(--el-border-color-base);
  }
  :deep(th .text-box .caret-own-wrapper .bot path) {
    fill: var(--el-border-color-base);
  }
  :deep(th.is-sortable.descending .text-box .caret-own-wrapper .top path) {
    fill: var(--el-border-color-base);
  }
  :deep(th.is-sortable.descending .text-box .caret-own-wrapper .bot path) {
    fill: var(--el-color-primary);
  }
  :deep(th.is-sortable .text-box:hover) {
    background: var(--el-border-color-lighter);
  }
  :deep(th.is-sortable .text-box:hover .caret-own-wrapper) {
    display: flex;
  }
  :deep(th.is-sortable .text-box:hover .caret-own-wrapper .top path) {
    fill: var(--el-border-color-base);
  }
  :deep(th.is-sortable .text-box:hover .caret-own-wrapper .bot path) {
    fill: var(--el-border-color-base);
  }
  :deep(th.is-sortable.ascending .text-box:hover) {
    background: var(--el-border-color-lighter);
  }
  :deep(th.is-sortable.ascending .text-box:hover .caret-own-wrapper) {
    display: flex;
  }
  :deep(th.is-sortable.ascending .text-box:hover .caret-own-wrapper .top path) {
    fill: var(--el-color-primary);
  }
  :deep(th.is-sortable.ascending .text-box:hover .caret-own-wrapper .bot path) {
    fill: var(--el-border-color-base);
  }
  :deep(th.is-sortable.descending .text-box:hover) {
    background: var(--el-border-color-lighter);
  }
  :deep(th.is-sortable.descending .text-box:hover .caret-own-wrapper) {
    display: flex;
  }
  :deep(th.is-sortable.descending .text-box:hover .caret-own-wrapper .top path) {
    fill: var(--el-border-color-base);
  }
  :deep(th.is-sortable.descending .text-box:hover .caret-own-wrapper .bot path) {
    fill: var(--el-color-primary);
  }
  :deep(.el-table .cell) {
    padding: 0 12px;
  }
  :deep(.el-table th:nth-last-child(2):before) {
    content: ' ';
    position: absolute;
    width: 16px;
    height: 0px;
    right: -7px;
    top: 50%;
    margin-top: -1px;
    border-top: 1px solid var(--el-border-color-light);
    transform: rotate(90deg);
  }
  :deep(.el-table--small.el-table.show-table-setting-table .el-table__cell:last-child .filter-box) {
    display: flex;
  }
  :deep(
      .el-table--small.el-table.show-table-setting-table .el-table__cell:last-child .filter-box .dm-filter-header-radio
    ) {
    margin-right: 28px;
  }
  :deep(.el-table--default.el-table.show-table-setting-table .el-table__cell:last-child .filter-box) {
    display: flex;
  }
  :deep(
      .el-table--default.el-table.show-table-setting-table
        .el-table__cell:last-child
        .filter-box
        .dm-filter-header-radio
    ) {
    margin-right: 35px;
  }
  :deep(.el-table--large.el-table.show-table-setting-table .el-table__cell:last-child .filter-box) {
    display: flex;
  }
  :deep(
      .el-table--large.el-table.show-table-setting-table .el-table__cell:last-child .filter-box .dm-filter-header-radio
    ) {
    margin-right: 45px;
  }
  :deep(.el-table--small.el-table) {
    th {
      height: 32px;
      padding: 5px 0 5px;
    }
    td {
      padding: 0;
      > .cell {
        min-height: 32px;
        padding: 5px 12px 5px;
      }
    }
    .el-table__footer-wrapper {
      td {
        line-height: 23px;
      }
    }
  }
  :deep(.el-table--default.el-table) {
    th {
      height: 40px;
      padding: 9px 0 9px;
    }

    td {
      padding: 0;
      > .cell {
        min-height: 40px;
        padding: 9px 12px 9px;
      }
    }
    .el-table__footer-wrapper {
      td {
        line-height: 23px;
      }
    }
  }

  :deep(.el-table--large.el-table) {
    th {
      height: 48px;
      padding: 12px 0 13px;
    }
    td {
      padding: 0;
      > .cell {
        min-height: 48px;
        padding: 13px 12px 13px;
      }
    }
    .el-table__footer-wrapper {
      td {
        line-height: 23px;
      }
    }
  }
  :deep(tr.el-table__row) {
    background: #fafafb;
  }
  :deep(td.el-table-fixed-column--left) {
    background: #fafafb;
  }
  :deep(td.el-table-fixed-column--right) {
    background: #fafafb;
  }
  :deep(.el-table.no-stripe-bg tr.el-table__row) {
    background: #ffffff;
  }
  :deep(.el-table.no-stripe-bg td.el-table-fixed-column--left) {
    background: #ffffff;
  }
  :deep(.el-table.no-stripe-bg td.el-table-fixed-column--right) {
    background: #ffffff;
  }
  :deep(tr.el-table__row.el-table__row--striped) {
    background: #fff;
  }
  :deep(tr.el-table__row.el-table__row--striped td.el-table-fixed-column--left) {
    background: #fff;
  }
  :deep(tr.el-table__row.el-table__row--striped td.el-table-fixed-column--right) {
    background: #fff;
  }
  :deep(tr.el-table__row--striped td.el-table__cell) {
    background: #fff !important;
  }
  :deep(tr.el-table__row:hover td.el-table__cell) {
    background: #f5f5f6 !important;
  }
  :deep(tr.el-table__row--striped:hover td.el-table__cell) {
    background: #f5f5f6 !important;
  }
  :deep(tr.el-table__row td .cell .el-tag) {
    height: 22px !important;
  }
  :deep(.el-table__footer-wrapper) {
    td.el-table-fixed-column--left {
      background-color: var(--el-table-row-hover-bg-color);
    }
    td.el-table-fixed-column--right {
      background-color: var(--el-table-row-hover-bg-color);
    }
  }
  .tips-icon {
    font-size: 16px;
    margin-right: 4px;
    cursor: pointer;
    vertical-align: bottom;
    color: var(--el-text-color-secondary);
    &:hover {
      color: var(--el-text-color-primary);
    }
  }
  .dm-table_border {
    :deep(.el-table__inner-wrapper) {
      &::before {
        height: 2px;
      }
    }
    :deep(.el-table__body-wrapper) {
      &::before {
        content: '';
        position: absolute;
        background-color: var(--el-table-border-color);
        top: -1px;
        left: 0;
        width: 2px;
        height: 100%;
        z-index: 3;
      }
      &::after {
        content: '';
        position: absolute;
        background-color: var(--el-table-border-color);
        top: -1px;
        right: 0;
        width: 2px;
        height: 100%;
        z-index: 3;
      }
      .el-table__cell {
        border-right: var(--el-table-border);
      }
    }
  }

  :deep(.el-table[loading-number]) {
    .el-table__empty-text {
      .el-empty {
        visibility: hidden;
      }
    }
  }
}

.dark {
  .dm-table {
    :deep(.el-table th.el-table__cell) {
      background: var(--el-color-dark-bg) !important;
      > .cell {
        color: var(--el-text-color-regular);
      }
    }
    :deep(tr.el-table__row) {
      background: var(--el-color-dark-bg);
      td.el-table__cell {
        background: var(--el-color-dark-bg);
      }
      td.el-table__cell > .cell {
        color: var(--el-text-color-primary) !important;
      }
    }
    :deep(tr.el-table__row--striped) {
      td.el-table__cell {
        background: var(--el-border-color-extra-light) !important;
      }
    }
    :deep(tr.el-table__row:hover td.el-table__cell) {
      background: var(--el-border-color-lighter) !important;
    }
    :deep(tr.el-table__row--striped:hover td.el-table__cell) {
      background: var(--el-border-color-lighter) !important;
    }

    :deep(.dm-table-wrapper .lf-border) {
      background: var(--el-color-dark-bg);
    }
    :deep(.dm-table-wrapper .tp-border) {
      background: var(--el-color-dark-bg);
    }
    :deep(.dm-table-wrapper .rt-border) {
      background: var(--el-color-dark-bg);
    }
    :deep(.dm-table-wrapper .bt-border) {
      background: var(--el-color-dark-bg);
    }
    :deep(.el-table.no-stripe-bg tr.el-table__row) {
      background: var(--el-color-dark-bg);
    }
    :deep(.el-table.no-stripe-bg td.el-table-fixed-column--left) {
      background: var(--el-color-dark-bg);
    }
    :deep(.el-table.no-stripe-bg td.el-table-fixed-column--right) {
      background: var(--el-color-dark-bg);
    }
    :deep(.el-table__footer-wrapper) {
      td.el-table-fixed-column--left {
        background: var(--el-color-dark-bg);
      }
      td.el-table-fixed-column--right {
        background: var(--el-color-dark-bg);
      }
    }
    :deep(.el-table td.el-table__cell > .cell) {
      color: var(--el-text-color-regular);
    }

    :deep(.el-empty__image) {
      width: 160px;
      height: 173px;
      background: url('https://prod-ylzapp-public.oss-cn-zhangjiakou.aliyuncs.com/frontend/yun-design/empty__image-dark.png');
      background-size: 100% 100%;
      img {
        display: none;
      }
    }

    :deep(tr.el-table__row td.el-table-fixed-column--left) {
      background: var(--el-color-dark-bg) !important;
    }
    :deep(tr.el-table__row td.el-table-fixed-column--right) {
      background: var(--el-color-dark-bg) !important;
    }

    :deep(tr.el-table__row--striped td.el-table-fixed-column--left) {
      background: var(--el-border-color-extra-light) !important;
    }
    :deep(tr.el-table__row--striped td.el-table-fixed-column--right) {
      background: var(--el-border-color-extra-light) !important;
    }

    :deep(tr.el-table__row:hover td.el-table-fixed-column--left) {
      background: var(--el-border-color-lighter) !important;
    }
    :deep(tr.el-table__row:hover td.el-table-fixed-column--right) {
      background: var(--el-border-color-lighter) !important;
    }
  }
}
</style>
