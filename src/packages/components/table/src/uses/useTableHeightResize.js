import { onMounted, onUnmounted, nextTick, ref } from 'vue';
import ResizeObserver from 'resize-observer-polyfill';
import { debounce } from 'lodash';
import { reactive } from 'vue';
import { toRefs } from 'vue';

export default (props) => {
  const tableHeight = ref(350); // 初始高度
  const state = reactive({
    containerRef: null,
    headerRef: null,
    filterRef: null,
    footerRef: null,
  });
  // 表格高度更新方法
  const updateTableHeight = () => {
    const layoutMainHeight = state.containerRef.offsetHeight;
    const dmTableHeader = state.containerRef.querySelector('.dm-table-header')?.offsetHeight || 0;
    const dmTableFilter = state.containerRef.querySelector('.filter-manage-box')?.offsetHeight || 0;
    const dmTableFooter = state.containerRef.querySelector('.dm-table__footer')?.offsetHeight || 0;
    const resNum = layoutMainHeight - dmTableHeader - dmTableFilter - dmTableFooter - 10;
    if (tableHeight.value !== resNum) {
      tableHeight.value = resNum > 200 ? resNum : 200;
    }
  };

  // 防抖, 立即触发，但防抖
  const debounced = debounce(updateTableHeight, 500, {
    leading: false,
    trailing: true,
  });
  let robserverOld;
  const createObserveElement = (key) => () => {
    const robserver = new ResizeObserver((entries) => {
      window.requestAnimationFrame(() => {
        if (!Array.isArray(entries) || !entries.length) {
          return;
        }
        entries.forEach((item) => {
          if (item.target === state[key]) {
            debounced();
          }
        });
      });
    });
    robserverOld = robserver;
    if (state[key]) {
      robserver.observe(state[key]);
    }
  };
  if (props.autoHeight) {
    const containerObserveElement = createObserveElement('containerRef');
    const headerObserveElement = createObserveElement('headerRef');
    const filterObserveElement = createObserveElement('filterRef');
    const footerObserveElement = createObserveElement('footerRef');
    onMounted(async () => {
      nextTick(() => {
        containerObserveElement();
        headerObserveElement();
        filterObserveElement();
        footerObserveElement();
      });
      window.addEventListener('resize', containerObserveElement);
    });
    // 页面卸载时
    onUnmounted(() => {
      window.removeEventListener('resize', containerObserveElement);
      if (robserverOld) {
        robserverOld.disconnect();
      }
    });
  }

  return {
    tableHeight,
    ...toRefs(state),
  };
};
