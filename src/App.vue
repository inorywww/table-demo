<template>
  <el-tabs type="border-card" v-model="activeTab">
    <el-tab-pane label="AbScriptInfo" name="AbScriptInfo">
      <AbScriptInfo v-if="activeTab === 'AbScriptInfo'"/>
    </el-tab-pane>
    <el-tab-pane label="RunFiles" name="RunFiles">
      <RunFiles v-if="activeTab === 'RunFiles'"/>
    </el-tab-pane>
    <el-tab-pane label="AppFiles" name="AppFiles">
      <AppFiles v-if="activeTab === 'AppFiles'"/>
    </el-tab-pane>
    <el-tab-pane label="ABFiles" name="ABFiles">
      <ABFiles v-if="activeTab === 'ABFiles'"/>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import AbScriptInfo from './components2/ABScriptInfo.vue'
import RunFiles from './components2/RunFiles.vue'
import AppFiles from './components2/AppFiles.vue'
import ABFiles from './components2/ABFiles.vue'
import { ref } from 'vue'
export default {
  name: 'App',
  components: {
    AbScriptInfo,
    RunFiles,
    AppFiles,
    ABFiles
  },
  props: {},
  setup() {
    const activeTab = ref('AbScriptInfo')
    return {
      activeTab
    }
  }
}
// import AbScriptInfo from './components/ABScriptInfo.vue'
// import RunFiles from './components/RunFiles.vue'
// import AppFiles from './components/AppFiles.vue'
// import ABFiles from './components/ABFiles.vue'

// const activeTab = ref('AbScriptInfo')

// return {
//   activeTab
// }

</script>

<style>
.el-pagination {
  margin-top: 12px;
  justify-content: center;
}
</style>
