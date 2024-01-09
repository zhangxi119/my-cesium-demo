<template>
  <div v-if="copy" class="cell-copy">
    <el-icon @click="copyHandle">
      <DocumentCopy />
    </el-icon>
  </div>
</template>

<script setup>
import { defineProps, toRefs } from 'vue';
import { DocumentCopy } from '@element-plus/icons-vue';
import copyText from 'copy-to-clipboard';
import { ElMessage } from 'element-plus';
const props = defineProps({
  copy: {
    type: String,
    default: '',
  },
});
const { copy } = toRefs(props);

const copyHandle = () => {
  if (copy.value) {
    copyText(copy.value);
    ElMessage({
      message: '复制成功',
      type: 'success',
      grouping: true,
      duration: 500,
    });
  }
};
</script>

<style lang="scss" scoped>
.cell-copy {
  display: inline-block;
  align-items: center;
  height: 20px;
  width: 20px;
  text-align: center;
  cursor: pointer;
  border-radius: 4px;
  margin-left: 4px;
  &:hover {
    background: #e6eaf0;
  }
  .el-icon {
    transform: translateY(2px);
  }
}
.dark {
  .cell-copy {
    &:hover {
      background: #e6eaf0;
      .el-icon {
        color: #000;
      }
    }
  }
}
</style>
