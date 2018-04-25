<template>
	<div id="app">
		<transition name="fade"
		            mode="out-in">
			<router-view></router-view>
			<!--把 router-view 当做是一个容器，它渲染的组件是你使用 vue-router 指定的-->
		</transition>
	</div>
</template>

<script>
export default {
	name: 'app',
	components: {
	}
}
//export其实和export default就是写法上面有点差别，
//一个是导出一个个单独接口，一个是默认导出一个整体接口。
//使用import命令的时候，用户需要知道所要加载的变量名或函数名，否则无法加载。
//这里就有一个简单写法不用去知道有哪些具体的暴露接口名，就用export default命令，为模块指定默认输出
//使用这两种不同的导出方式，其他模块导入的时写法也不一样。
// 下面比较一下export default和export 输出。

// // 第一组
// export default function car() { // 输出
//   // ...
// }

// import car from 'car'; // 输入

// // 第二组
// export function car2() { // 输出
//   // ...
// };

//import {car2} from 'car2'; // 输入

//可以看到第一组是使用export default，import语句不需要使用大括号；第二组使用export，对应的import语句需要使用大括号，
//一个模块只能有一个默认输出，所以export default只能使用一次。
</script>

<style lang="stylus">
body {
	margin: 0px;
	padding: 0px;
	/*background: url(assets/bg1.jpg) center !important;
		background-size: cover;*/
	// background: #1F2D3D;
	font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, SimSun, sans-serif;
	font-size: 14px;
	-webkit-font-smoothing: antialiased;
}

#app {
	position: absolute;
	top: 0px;
	bottom: 0px;
	width: 100%;
}

.el-submenu [class^=fa] {
	vertical-align: baseline;
	margin-right: 10px;
}

.el-menu-item [class^=fa] {
	vertical-align: baseline;
	margin-right: 10px;
}

.toolbar {
	background: #f2f2f2;
	padding: 10px;
	//border:1px solid #dfe6ec;
	margin: 10px 0px;
	.el-form-item {
		margin-bottom: 10px;
	}
}

.fade-enter-active,
.fade-leave-active {
	transition: all .2s ease;
}

.fade-enter,
.fade-leave-active {
	opacity: 0;
}
</style>