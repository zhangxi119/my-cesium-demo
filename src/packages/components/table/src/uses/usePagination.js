import { computed, ref } from 'vue';
import { getConfig } from 'packages/utils/config';

export default function usePagination($emit, pagination) {
  let state = ref(false);
  const paginationConfig = getConfig('pagination');
  const paginationProps = computed(() => {
    const paginationVal = pagination.value || {};
    return {
      background: true,
      layout: 'total, prev, pager, next, sizes, jumper',
      ...paginationConfig,
      ...paginationVal,
      currentPage: paginationVal.page,
      pageSize: paginationVal.size,
    };
  });

  const handleSizeChange = (pageSize) => {
    const pageMax = Math.ceil(pagination.value.total / pageSize);
    if (pagination.value.page > pageMax) {
      state.value = true;
      $emit('update:pagination', {
        ...pagination.value,
        size: pageSize,
        page: 1,
      });
    } else {
      $emit('update:pagination', {
        ...pagination.value,
        size: pageSize,
      });
    }
  };
  const handleCurrentChange = (currentPage) => {
    if (state.value) {
      state.value = false;
      return;
    }
    $emit('update:pagination', {
      ...pagination.value,
      page: currentPage,
    });
  };

  return {
    paginationProps,
    handleSizeChange,
    handleCurrentChange,
  };
}
