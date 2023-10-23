<template>
  <div class="ab-script-info">
    <el-table :data="tableData" style="width: 100%" @sort-change="handleSortChange">
      <el-table-column prop="name" label="名称"/>
      <el-table-column prop="file_modifiedtime" label="文件最后修改日期" width="200"/>
      <el-table-column prop="createdtime" label="文件创建日期" width="200"/>
      <el-table-column prop="file_path" label="文件路径"/>
      <el-table-column prop="status" sortable label="文件状态"/>
      <el-table-column prop="ininame" label="ininame"/>
      <el-table-column prop="testname" label="testname"/>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="pagination.currentPage"
      :page-sizes="[10, 20, 50, 100]"
      :page-size="pagination.pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="pagination.total">
    </el-pagination>
  </div>
</template>

<script>
import { getABScript } from '_api/api'
// import { getABScript } from '_api/mock_api'
import { ref } from 'vue'
export default {
  name: 'AbScriptInfo',
  components: {},
  props: {},
  setup() {
    const tableData = ref([])
    const pagination = ref({
      currentPage: 1,
      pageSize: 10,
      total: 0
    })

    const fetchData = (sort = '') => {
      getABScript({
        limit: pagination.value.pageSize,
        offset: (pagination.value.currentPage - 1) * pagination.value.pageSize,
        sort // ascending(生序) or descending(降序)
      }).then((res) => {
        console.log('res', res.data);
        tableData.value = res.data.list
        pagination.value.total = res.data.total
      })
    }

    // 分页大小变化时的处理
    const handleSizeChange = (val) => {
      pagination.value.pageSize = val
      fetchData()
    }

    // 当前页变化时的处理
    const handleCurrentChange = (val) => {
      pagination.value.currentPage = val
      fetchData()
    }

    // 排序变化
    const handleSortChange = ({ order }) => {
      fetchData(order)
    }

    // 初始加载数据
    fetchData()

    return {
      tableData,
      pagination,
      handleSizeChange,
      handleCurrentChange,
      handleSortChange
    }
  }
}
</script>

<style scoped>
.el-pagination {
  margin-top: 12px;
  justify-content: center;
}
</style>