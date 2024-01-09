import DmTable from './src/index.vue';
import { setConfig } from 'packages/utils/config';
import { useTablePropMerge } from './src/hooks/tablePropSet';

DmTable.install = (app, config) => {
  setConfig(config);
  app.component(DmTable.name, DmTable);
};

export default DmTable;
export { useTablePropMerge, setConfig };
