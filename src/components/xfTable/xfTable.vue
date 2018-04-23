<template>
    <div><!-- 这个div标签不可以舍去，因为v-for不能用于根元素（root element）。因为v-for是个循环，它返回更多的元素。导致无法渲染。 -->
        <el-card v-for="(table, index) in tables">
            <el-table :data="table.tableData" stripe border align="center" style="width: 100%">
                <el-table-column v-for="column in table.columns " 
                    :fixed="column.fixed" 
                    :prop="column.prop" 
                    :label="column.label"
                    :width="column.width">
                </el-table-column>
            </el-table>
            <div class="page_line" style="margin:20px 0;float:right;">
                <el-pagination @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="table.curPage"
                    :page-sizes="[10, 20, 30, 40]"
                    :page-size="10"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="table.totalCount">
                </el-pagination>
            </div>
        </el-card>
    </div>
</template>

<script>
    export default {
        props:['tables'],
        methods: {
            handleSizeChange(val) {
                this.$emit("handleSizeChange",val);
            },
            handleCurrentChange(val) {
                this.$emit("handleCurrentChange",val);
            }
        }
    }
</script>
<style>
    .el-table th>.cell{
        text-align :center;
    }
</style>