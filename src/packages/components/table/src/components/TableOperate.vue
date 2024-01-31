<template>
  <div v-if="showTableSetting" class="dm-table-operate" :data-table-size="sizeArr[activeIndex]" @click="drawer = true">
    <div class="operate-btn" @click="drawer = true">
      <i class="yun-iconfont icon-settings" />
    </div>
    <teleport to="body">
      <el-drawer v-model="drawer" :direction="direction" size="320px" :before-close="handleClose">
        <template #title>
          <span class="operate-header"> 表格显示设置 </span>
        </template>
        <div class="setting-height-box">
          <span class="setting-title">表格高度</span>
          <div class="height-option-box">
            <div
              v-for="(i, index) in ['small', 'default', 'large']"
              :key="index"
              :class="{ 'height-option': true, active: activeIndex === index }"
              @click="handleActive(index)"
            >
              <img v-if="i === 'small'" class="light" src="@/assets/icons/yun-table/small.png" />
              <img v-if="i === 'default'" class="light" src="@/assets/icons/yun-table/default.png" />
              <img v-if="i === 'large'" class="light" src="@/assets/icons/yun-table/large.png" />

              <img v-if="i === 'small'" class="dark" src="@/assets/icons/yun-table/dark_small.png" />
              <img v-if="i === 'default'" class="dark" src="@/assets/icons/yun-table/dark_default.png" />
              <img v-if="i === 'large'" class="dark" src="@/assets/icons/yun-table/dark_large.png" />
            </div>
          </div>
          <div class="setting-header-box">
            <div class="setting-header">
              <span class="setting-title">表头设置</span>
              <el-button type="text" @click="resetColumns"> 恢复默认 </el-button>
            </div>
            <div class="unsortable-options-box">
              <div v-for="item in unsortableList" :key="item.prop" class="item-single">
                <span class="item-label">{{ item.label }}</span>
                <span class="item-select">
                  <el-switch
                    v-model="item.visible"
                    class="switch-own"
                    :width="34"
                    :disabled="item?.disabledShow"
                    @change="submitColumns"
                /></span>
              </div>
            </div>
            <el-divider v-if="unsortableList.length > 0">
              <span class="no-sort-line">以上属性不可排序</span>
            </el-divider>
            <div class="sortable-options-box">
              <draggable
                v-model="sortableList"
                item-key="label"
                chosen-class="chosen"
                force-fallback="true"
                animation="300"
                @change="submitColumns"
              >
                <template #item="{ element }">
                  <div class="item-single item-drag">
                    <span class="item-label"><i class="yun-iconfont icon-tuozhuaipaixu" />{{ element.label }}</span>
                    <span class="item-select">
                      <el-switch
                        v-model="element.visible"
                        class="switch-own"
                        :width="34"
                        :disabled="element?.disabledShow"
                        @change="submitColumns"
                    /></span>
                  </div>
                </template>
              </draggable>
            </div>
          </div>
        </div>
      </el-drawer>
    </teleport>
  </div>
</template>

<script setup>
import { watchEffect, ref, toRefs } from 'vue';
import draggable from 'vuedraggable';
import { getConfig } from 'packages/utils/config';
import storage from 'packages/utils/storage';
import { updateTableConfig } from '../uses/useApi';
const drawer = ref(false);
const direction = ref('rtl');

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
  tableSize: {
    type: String,
    default: 'small',
  },
  defaultColumns: {
    type: Array,
    default: () => [],
  },
  defaultCheckedColumns: {
    type: Array,
    default: () => [],
  },
  defaultSize: {
    type: String,
    default: 'small',
  },
});

const emit = defineEmits(['submit', 'update:tableSize']);

const { columns, checkedColumns, tableSize, defaultColumns, defaultSize, defaultCheckedColumns } = toRefs(props);
const sizeObj = {
  small: 0,
  default: 1,
  large: 2,
};
const sizeArr = ['small', 'default', 'large'];

const activeIndex = ref(0);
const columnTypes = ['index', 'selection'];
const checkedList = ref([]);
const sortableList = ref([]);
const unsortableList = ref([]);

// 初始化排序和不排序数组,以及显示列和高度设置
watchEffect(() => {
  activeIndex.value = sizeObj[tableSize.value];
  checkedList.value = checkedColumns.value.length >= 0 ? [...checkedColumns.value] : getColumnsProp(columns.value);
  // console.log('checkedColumns.value',checkedColumns.value);
  // console.log('checkedList.value',checkedList.value);
  // debugger;
  sortableList.value = getSortColumns(columns.value);
  unsortableList.value = getUnSortColumns(columns.value);
});

// 触发隐藏显示和列排序更新
const submitColumns = () => {
  const allList = [...unsortableList.value, ...sortableList.value];
  const sortkeyList = sortableList.value.map((i) => i.prop);

  if (unsortableList.value.length > 0) {
    const mapObj = {};
    const unsortKeys = unsortableList.value.map((i) => i.prop);
    columns.value.forEach((item, index) => {
      if (unsortKeys.includes(item.prop)) {
        mapObj[item.prop] = index;
      }
    });
    for (const key in mapObj) {
      if (Object.prototype.hasOwnProperty.call(mapObj, key)) {
        sortkeyList.splice(mapObj[key], 0, key);
      }
    }
  }
  checkedList.value = allList
    .filter((i) => i.visible === true)
    .map((i) => {
      return i.prop;
    });
  // console.log('defaultKeys',checkedList.value);
  // console.log('sortkeyList',sortkeyList);// 里面包含了不可排序的字段
  emit('submit', checkedList.value, sortkeyList, sizeArr[activeIndex.value]);
};

// 恢复默认
const resetColumns = () => {
  const columnPropsArr = defaultColumns.value.filter((i) => !columnTypes.includes(i.type));
  // console.log('defaultCheckedColumns',defaultCheckedColumns.value);
  checkedList.value =
    defaultCheckedColumns.value.length > 0
      ? defaultCheckedColumns.value
      : columnPropsArr.filter((i) => i.visible !== false).map((item) => item.prop);
  const allkeyList = getColumnsProp(columnPropsArr);
  sortableList.value = getSortColumns(columnPropsArr);
  unsortableList.value = getUnSortColumns(columnPropsArr);
  emit('submit', checkedList.value, allkeyList, defaultSize.value);
};
// 切换表格高度
const handleActive = (index) => {
  activeIndex.value = index;
  emit('update:tableSize', sizeArr[index]);
};

function getSortColumns(columns) {
  return columns
    .map((item) => {
      return {
        dragSort: true,
        ...item,
        visible: checkedList.value.includes(item.prop),
      };
    })
    .filter((i) => i.dragSort === true && !columnTypes.includes(i.type));
}
function getUnSortColumns(columns) {
  return columns
    .map((item) => {
      return {
        dragSort: true,
        ...item,
        visible: checkedList.value.includes(item.prop),
      };
    })
    .filter((i) => {
      return i.dragSort === false && !columnTypes.includes(i.type);
    });
}
function getColumnsProp(columns) {
  return columns.map((item) => item.prop);
}
const handleClose = (done) => {
  // 是否开启了服务端缓存
  const isServerCacheOn = getConfig('table').serverCacheOn;
  if (isServerCacheOn) {
    const STORAGE_KEY_SUFFIX = getConfig('table').storageKey;
    const axiosInstance = getConfig('table').axiosInstance;
    const userId = getConfig('table').userId;
    const systemCode = getConfig('table').systemCode;
    const columnSet = storage.getItem(STORAGE_KEY_SUFFIX);
    if (!axiosInstance || !userId || !systemCode) {
      throw new ReferenceError(`serverCacheOn: Prop userId/systemCode/axiosInstance does not exist`);
    }
    const params = {
      userId,
      systemCode,
      bizKey: STORAGE_KEY_SUFFIX,
      queryConfig: columnSet,
    };
    // console.log('axiosInstance',axiosInstance);
    try {
      updateTableConfig(axiosInstance, params);
    } catch (err) {
      console.log('err', err);
    }
  }
  done();
};
</script>

<style lang="scss" scoped>
.dm-table-operate {
  position: absolute;
  top: 0px;
  right: 0px;
  display: flex;
  z-index: 19;
  height: 40px;
  width: 40px;
  background: var(--el-color-dark-bg);
  // border: 1px solid #ccc;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-left: 1px solid var(--el-border-color-light);
  .icon-settings {
    font-size: 16px;
  }
  :deep(.el-drawer__header) {
    margin-bottom: 42px;
  }
  .operate-btn {
    width: 28px;
    height: 28px;
    // background: #F5F5F6;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--el-text-color-secondary);
  }
  .operate-btn:hover {
    background: var(--el-border-color-light);
  }
}

.dm-table-operate {
  :deep(.el-drawer__header) {
    margin-bottom: 42px;
  }
}

.switch-own {
  width: 34px;
  height: 20px;
}

.operate-header {
  font-style: normal;
  font-size: 18px;
  font-weight: normal;
  color: var(--el-text-color-primary);
  line-height: 26px;
}
.setting-height-box {
  margin-top: -20px;
  .setting-title {
    display: inline-block;
    font-weight: 500;
    font-size: 14px;
    color: var(--el-text-color-primary);
    letter-spacing: -0.01px;
    font-style: normal;
    height: 22px;
    line-height: 22px;
  }
  .height-option-box {
    margin-top: 8px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 42px;
    .height-option {
      border: 1px solid transparent;
      border-radius: 4px;
      cursor: pointer;
      line-height: normal;
      img {
        display: inline-block;
        width: 72px;
        height: 40px;
      }
      img.light {
        display: inline-block;
      }
      img.dark {
        display: none;
      }
    }
    .height-option {
      margin-left: 0px;
      margin-right: 0px;
    }
    .height-option.active {
      box-shadow: none;
    }
    .height-option:hover {
      border: 1px solid var(--el-color-primary) !important;
    }
  }
}
.setting-header-box {
  margin-top: 32px;
  .setting-header {
    display: flex;
    justify-content: space-between;
    height: 22px;
    .el-button {
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 22px;
      letter-spacing: -0.01px;
      color: var(--el-color-primary);
      padding-top: 0px;
    }
  }
  .no-sort-line {
    width: 280px;
    height: 20px;
    margin: 0 auto;
    margin-top: 17px;
    margin-bottom: 17px;
    font-size: 12px;
    color: var(--el-text-color-secondary);
  }
  .unsortable-options-box {
    margin-top: 17px;
    .item-single {
      display: flex;
      justify-content: space-between;
      height: 22px;
      line-height: 22px;
      .item-label {
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        letter-spacing: -0.01px;
        color: var(--el-text-color-regular);
        height: 22px;
        line-height: 22px;
      }
      .item-select {
        position: relative;
        .switch-own {
          position: absolute;
          top: 3px;
          right: 0px;
        }
      }
    }
  }
}

.item-single {
  display: flex;
  justify-content: space-between;
  height: 22px;
  line-height: 22px;
  .item-label {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    letter-spacing: -0.01px;
    color: var(--el-text-color-secondary);
    position: relative;
    i.icon-tuozhuaipaixu {
      position: absolute;
      font-size: 12px;
      color: var(--el-text-color-placeholder);
      left: -14px;
      top: 0px;
    }
  }
}
.item-single + .item-single {
  margin-top: 18px;
}
.item-drag {
  cursor: move;
}
.unsortable-tip {
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  color: var(--el-border-color-base);
}
.active {
  position: relative;
  margin: 0 auto;
  text-align: center;
  line-height: 52px;
  color: var(--el-color-primary);
  box-shadow: 0px 2px 7px 0px rgba(85, 110, 97, 0.35);
  border-radius: 7px;
  border: 1px solid var(--el-color-primary) !important;
  z-index: 299;
}
.active:before {
  content: '';
  position: absolute;
  right: -1px;
  top: -1px;
  border: 9px solid var(--el-color-primary-light-6);
  border-radius: 0 4px 0 4px;
  z-index: 399;
}
.active:after {
  content: '';
  // background: url(@/assets/icons/yun-table/check.png) center center no-repeat;
  background-size: 100% 100%;
  width: 12px;
  height: 12px;
  position: absolute;
  right: 2px;
  top: 2px;
  z-index: 499;
}
i.el-icon.setting-icon {
  width: 28px;
  height: 28px;
}

.dm-table-operate[data-table-size='small'] {
  width: 32px;
  height: 32px;
}

.dm-table-operate[data-table-size='default'] {
  width: 40px;
  height: 39px;
}

.dm-table-operate[data-table-size='large'] {
  width: 48px;
  height: 47px;
}

.dark {
  .setting-height-box {
    .height-option {
      img.dark {
        display: inline-block;
      }
      img.light {
        display: none;
      }
    }
  }
}
</style>
