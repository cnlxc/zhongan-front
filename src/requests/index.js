import axios from 'axios';
import { message } from 'antd'

const isDev = process.env.NODE_ENV === 'development'

const service = axios.create({
    baseURL : isDev ? 'http://rap2.taobao.org:38080/app/mock/245320/' : 'http://rap2.taobao.org:38080/app/mock/245320'
})

service.interceptors.request.use((config) => {
    config.data = Object.assign({},config.data,{
        authToken : window.localStorage.getItem('authToken')
    })
    return config
})

service.interceptors.response.use((resp) => {

    if(resp.status === 200){
        return resp.data
    }else{
        //异常处理
        message.error(resp.errMsg)
    }
})

export const getList = ()=>{
    return service.get('/cnlxc/jingxuan')
}