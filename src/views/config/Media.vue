<template>
	<section>
		<!--工具条-->
		<el-col :span="24" class="toolbar">
			<label>状态：</label>
			<el-select @change="change" v-model="value">
				<el-option
				v-for="item in options"
				:key="item.value"
				:label="item.label"
				:value="item.value">
				</el-option>
			</el-select>
			<el-input style="width:200px;" placeholder="请输入名称或者ID查询" v-model="searchVal" clearable>
			</el-input>
			<el-button @click="searchAdx" type="primary" icon="el-icon-search">搜索</el-button>
		</el-col>

		<!--列表-->
		<xfTable :tables="tables" highlight-current-row
        @handleCurrentChange="handleCurrentChange" @handleSizeChange="handleSizeChange">
		</xfTable>
	</section>
</template>

<script>
	import xfTable from '../../components/xfTable/xfTable'
	import util from '../../common/js/util'
	import media from '../../common/js/config/media'
	import mockdata from "../../mock/data/list";
	export default {
		components:{
			xfTable
		},
		data() {
			return {
				status:'0',
				curPage:1,
				page_size:10,
				tables:[],
				options: [{
					value: '0',
					label: '已禁用'
					}, {
					value: '1',
					label: '已启用'
					}],
				value: '1',//下拉框的默认值
				searchVal:''
			}
		},
		methods: {
			searchAdx(target){
				console.log(this.searchVal);
				this.getAdxList();
			},
			change(val){
				this.status = val;
				this.getAdxList();
				console.log(val);
			},
			handleSizeChange(val){
				this.page_size = val;
				this.getAdxList();
			},
			handleCurrentChange(val) {
				this.curPage = val;
				this.getAdxList();
				//不能只改变tables中的tableData.需要全部赋值
				//this.tables.tableName="hasdasdsa";//不生效，因为不能只更新其中部分属性
				// 受现代 JavaScript 的限制 (以及废弃 Object.observe)，Vue 不能检测到对象属性的添加或删除。由于 Vue 会在初始化实例时对属性执行 getter/setter 转化过程，所以属性必须在 data 对象上存在才能让 Vue 转换它，这样才能让它是响应的。
			},
			//获取用户列表
			getAdxList() {
				let para = {
					curPage: this.curPage,
					status:this.value,
					name:this.searchVal,
					pageNum:this.page_size,
				};
				let that = this;
				let url="config/media/adxList";
				media.getAdxList(url,para);
				var p = new Promise((resolve, reject) => {
					resolve(mockdata);  //直接点出你生成的假数据对象即可
				}).then(function(data){
					that.tables = [{
						tableName:"Adx列表",
						columns:[
							{"label":"ID","fixed":"fixed","prop":"id","width":"100px"},
							{"label":"名称","fixed":"","prop":"name","width":""},
							{"label":"状态","fixed":"","prop":"status","width":""},
							{"label":"审核广告主","fixed":"","prop":"accountUpload","width":""},
							{"label":"审核创意","fixed":"","prop":"creativeUpload","width":""},
						],
						tableData:data.data.list,
						totalCount:that.page_size,
						curPage:that.curPage
					}];
				}).catch(err=>{
					console.log(err)
				})
			}
		},
		mounted() {
			this.getAdxList();
		}
	}

</script>

<style scoped>
	.el-table .cell{
		width: auto !important;
	}
</style>