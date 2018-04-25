<template>
<div>
    <el-tree
    :data="trees.data"
    show-checkbox
    node-key="id"
    :props="trees.defaultProps">
    </el-tree>
</div>
</template>
<script>
    export default {
        props:["trees"],
    };
</script>
