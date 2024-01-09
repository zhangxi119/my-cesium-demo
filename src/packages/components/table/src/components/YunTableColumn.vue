<script>
import { h, watch, ref, Comment } from 'vue';
import { ElTableColumn } from 'element-plus';
import SvgMd from './svgMd.vue';
import HeaderFilter from './HeaderFilter.vue';
import CopyColumn from './copyColumn.vue';
import { omit } from 'lodash';
// import { ElTooltip } from '@element-plus/components';
export default {
  name: 'YunTableColumn',
  props: {
    actualColumns: {
      type: Array,
      default: () => [],
    },
    slotKeys: {
      type: Array,
      default: () => [],
    },
    searchForm: {
      type: Object,
      default: () => {},
    },
    getFormFieldProps: {
      type: Function,
      default: () => {},
    },
    pagination: {
      type: Object,
      default: () => null,
    },
    deep: {
      type: Number,
      default: 0,
    },
    transformation: {
      type: [Object, Function],
      default: () => (val) => {
        return val === undefined || val === '' || val === null ? '-' : val;
      },
    },
  },
  emits: ['handle-search', 'update:searchForm'],
  setup(props, { emit, slots }) {
    const searchFormValue = ref();
    watch(
      () => props.searchForm,
      (v) => {
        searchFormValue.value = v;
      },
      {
        deep: true,
        immediate: true,
      },
    );
    watch(
      () => searchFormValue.value,
      (v) => {
        emit('update:searchForm', v);
      },
      {
        deep: true,
        immediate: true,
      },
    );
    const handleSearch = (...rest) => {
      emit('handle-search', ...rest);
    };
    const indexMethod = (index) => {
      if (props.pagination) {
        return index + 1 + ((props.pagination.page || 1) - 1) * (props.pagination.size || 0);
      } else {
        return index + 1;
      }
    };

    const isComment = (slot, scope) => {
      const vnodes = slot(scope);
      return vnodes.every((v) => v.type === Comment);
    };
    const fieldChange = (field) => {
      let bindField = { ...omit(field, ['children']) };
      if (bindField && !bindField.minWidth) {
        bindField.minWidth = 110;
      }
      if (field.type === 'index') {
        field.index = field.index || indexMethod;
      }
      return bindField;
    };
    function createHeaderSlot(field) {
      if (field.header || slots[`${field.prop}-header`] || field.sortable || field.tips) {
        return (scope) => {
          if (slots[`${field.prop}-header`]) {
            return [slots[`${field.prop}-header`]({ column: scope.column, $index: scope.$index })];
          } else {
            return h('div', { class: { 'filter-box': true } }, [
              h(
                'div',
                {
                  class: {
                    'sort-box': field.sortable,
                    'filter-box-content': true,
                  },
                },
                [
                  h('span', { class: 'text-warpper' }, [
                    h('span', { class: 'text-box' }, [
                      field.sortable ? h('span', { class: 'caret-own-wrapper' }, [h(SvgMd)]) : null,
                      h('i', { class: 'text', title: field.label }, [field.label]),
                    ]),
                    field.tips
                      ? h(
                          ElTooltip,
                          {
                            effect: 'dark',
                            placement: 'top',
                          },
                          {
                            content: () =>
                              h('div', {
                                innerHTML: field.tips,
                              }),
                            default: () =>
                              h('span', { class: 'icon-box' }, [
                                h('b', { class: 'yun-iconfont icon-question tips-icon' }),
                              ]),
                          },
                        )
                      : null,
                  ]),
                  field.header
                    ? h(HeaderFilter, {
                        searchForm: props.searchForm,
                        'onUpdate:searchForm': (value) => emit('update:searchForm', value),
                        field: field,
                        getFormFieldProps: props.getFormFieldProps(
                          field.header.component,
                          {
                            size: 'default',
                            ...(field.header.componentAttrs || {}),
                          },
                          field.label,
                        ),
                        onHandleSearch: handleSearch,
                      })
                    : null,
                ],
              ),
            ]);
          }
        };
      } else {
        return () => [
          h('div', { class: 'filter-box' }, [
            h('div', { class: 'filter-box-content' }, [
              h('div', { class: 'text-box' }, [h('i', { class: 'text', title: 'field.label' }, [field.label])]),
            ]),
          ]),
        ];
      }
    }
    function createDetaultSlot(field) {
      if (slots[field.prop]) {
        return (scope) => [
          slots[field.prop]({ row: scope.row, column: scope.column, $index: scope.$index }),
          field.copy ? h(CopyColumn, { copy: scope.row[field.prop] }) : null,
        ];
      } else if (slots[field.type]) {
        return (scope) => [slots[field.type]({ row: scope.row, column: scope.column, $index: scope.$index })];
      } else if (slots.default && !field.type) {
        return (scope) => {
          if (!isComment(slots.default, scope)) {
            return [
              slots.default({ row: scope.row, column: scope.column, $index: scope.$index }),
              field.copy ? h(CopyColumn, { copy: scope.row[field.prop] }) : null,
            ];
          } else {
            return [scope.row[field.prop], field.copy ? h(CopyColumn, { copy: scope.row[field.prop] }) : null];
          }
        };
      } else if (field.children) {
        return () => [createDepthColumns(field.children)];
      } else if (props.transformation && !field.type) {
        return (scope) => {
          const vnodes = [];
          if (field.formatter) {
            vnodes.push(
              props.transformation(field.formatter(scope.row, scope.column, scope.row[field.prop], scope.$index)) ??
                scope.row[field.prop],
            );
          } else if (field.enums) {
            vnodes.push(
              props.transformation(field.enums.find((item) => item.value === scope.row[field.prop])?.label) ??
                scope.row[field.prop],
            );
          } else {
            vnodes.push(props.transformation(scope.row[field.prop]) ?? scope.row[field.prop]);
          }
          if (field.copy) {
            vnodes.push(h(CopyColumn, { copy: scope.row[field.prop] }));
          }
          return vnodes;
        };
      } else if (!field.type) {
        return (scope) => [scope.row[field.prop], h(CopyColumn, { copy: scope.row[field.prop] })];
      }
    }
    function createDepthColumns(actualColumns) {
      const columns = actualColumns.map((field) =>
        h(
          ElTableColumn,
          {
            showOverflowTooltip: true,
            ...fieldChange(field),
            resizable: true,
            className: `${field.prop}-cell`,
          },
          {
            header: createHeaderSlot(field),
            default: createDetaultSlot(field),
          },
        ),
      );
      return columns;
    }
    const render = () => {
      return createDepthColumns(props.actualColumns);
    };
    return render;
  },
};
</script>
