import { resolve } from "url";
import axios from 'axios';
import { error } from "util";
export default{
    getAdxList:function(url,params){
        return params=>{
            axios.post(url, { params: params });
        };
    },
};