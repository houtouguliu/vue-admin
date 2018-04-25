<template>
    <xfTree :trees="trees"></xfTree>
</template>
<script>
import xfTree from '../../components/xfTree/xfTree';
import axios from 'axios';
export default {
    components:{
        xfTree
    },
    data() {
        return {
            trees: {
                data: [
                    {
                        id: 1,
                        name: '一级 1',
                        children1: [{
                            id: 4,
                            name: '二级 1-1',
                            children1: [{
                                id: 9,
                                name: '三级 1-1-1'
                            }, {
                                id: 10,
                                name: '三级 1-1-2'
                            }]
                        }]
                    }, {
                        id: 2,
                        name: '一级 2',
                        children1: [{
                            id: 5,
                            name: '二级 2-1'
                        }, {
                            id: 6,
                            name: '二级 2-2'
                        }]
                    }, {
                        id: 3,
                        name: '一级 3',
                        children1: [{
                            id: 7,
                            name: '二级 3-1'
                        }, {
                            id: 8,
                            name: '二级 3-2'
                        }]
                    }
                ],
                defaultProps: {
                    children: 'children1',
                    label: 'name'
                }
            },
        };
    },
    methods:{
        handleCheckChange(val){

        },
        getList(){
            let  url = "";
            var response = new Promise((reslove,reject)=>{
                axios.post(url,{params:{}})            
                .then(res=>{
                    reslove(res);//把成功获取的数据抛出给下面的回调函数（就是下面的then中的第一个参数）
                })
                .catch(error=>{
                    reject(error);
                });
            })
            .then(function(res){//这里的then包含两个参数，一个是上面promise成功后执行，一个是失败后执行
                if(res.code==0){

                }
                else{

                }
            },function(error){
                console.log(error);
            });
            console.log(response);
        },
    },
    mounted() {
        this.getList();
    }
}
</script>
