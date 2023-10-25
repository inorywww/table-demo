<template>
  <div class="run-files">
    <el-table :data="tableData" style="width: 100%" @sort-change="handleSortChange">
      <el-table-column prop="name" label="name"/>
      <el-table-column prop="file_modifiedtime" sortable label="modified time" width="200"/>
      <el-table-column prop="createdtime" label="created time" width="200"/>
      <el-table-column prop="file_path" label="path"/>
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
import { getRunFiles } from '_api/api'
// import { getRunFiles } from '_api/mock_api'

export default {
  name: 'RunFiles',
  data() {
    return {
      tableData: [],
      pagination: {
        currentPage: 1,
        pageSize: 10,
        total: 0
      }
    }
  },
  methods: {
    fetchData(sort = '') {
      getRunFiles({
        limit: this.pagination.pageSize,
        offset: (this.pagination.currentPage - 1) * this.pagination.pageSize,
        sort // ascending(升序) or descending(降序)
      }).then((res) => {
        this.tableData = res.data || []
        this.tableData.forEach(item => {
          item.file_modifiedtime = item.file_modifiedtime.replace('T', ' ').replace('Z', '')
          item.createdtime = item.createdtime.replace('T', ' ').replace('Z', '')
        })
        this.pagination.total = res.data.total
      })
    },
    handleSizeChange(val) {
      this.pagination.pageSize = val
      this.fetchData()
    },
    handleCurrentChange(val) {
      this.pagination.currentPage = val
      this.fetchData()
    },
    handleSortChange({ order }) {
      this.pagination.currentPage = 1
      this.fetchData(order)
    }
  },
  mounted() {
    this.fetchData()
  }
}
</script>
