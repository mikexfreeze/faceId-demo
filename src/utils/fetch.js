/**
 * Created by Micheal Xiao on 2017/11/16.
 */
import axios from 'axios';
import {Message} from 'element-ui';

// 创建axios实例


export function DefaultData() {
    let formData = new FormData();
    formData.append("api_key", "IPsGmy_z_Am7HLpkCidE66V3YhorqMV-")
    formData.append("api_secret", "snuKyJhyogbgjP1h4tIZLg8r_vwgbI2v")
    return formData
};
const service = axios.create({
    method: 'post',
    timeout: 10000,                  // 请求超时时间
    data: DefaultData(),                  // 默认data时间
});


// respone拦截器
service.interceptors.response.use(
    response => {
        // store.commit('SET_NOTXHR')
        return response
    }
    ,
    error => {
        // store.commit('SET_NOTXHR')
        console.log("fetch ERR")
        console.log(error)
        // if()
        Message({
            message: error.message,
            type: 'error',
            duration: 3 * 1000
        });
        return Promise.reject(error);
    }
)

export default service;
