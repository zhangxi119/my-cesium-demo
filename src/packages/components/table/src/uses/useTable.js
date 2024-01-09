import { ref, toRefs } from 'vue';
import useColum from './useColum';
import useTableColumCache from './useTableColumCache';

export default function useTable(props, emit) {
  const { tableHeaderKey } = toRefs(props);

  const defaultHeaderCellStyle = ref({
    backgroundColor: '#FFFFFF',
    color: '#000F25',
    fontSize: '14px',
    height: '32px',
  });
  const defaultCellStyle = ref({
    color: '#323233',
    fontSize: '14px',
    lineHeight: '23px',
  });

  // 如果开启了缓存
  if (tableHeaderKey.value) {
    const { tableSize, selectedFieldKeys, handleSubmit, actualColumns, flatActuakColumns, slotKeys, setListColumns } =
      useTableColumCache(props, emit);
    return {
      defaultHeaderCellStyle,
      defaultCellStyle,
      tableSize,
      selectedFieldKeys,
      handleSubmit,
      actualColumns,
      flatActuakColumns,
      slotKeys,
      setListColumns,
    };
  } else {
    const { handleSubmit, actualColumns, setListColumns, flatActuakColumns, slotKeys, tableSize, selectedFieldKeys } =
      useColum(props, emit);
    return {
      defaultHeaderCellStyle,
      defaultCellStyle,
      tableSize,
      selectedFieldKeys,
      handleSubmit,
      actualColumns,
      flatActuakColumns,
      slotKeys,
      setListColumns,
    };
  }
}
