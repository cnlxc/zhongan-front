import axios from 'axios';
import { message } from 'antd'
import {errProcess} from './util'
import {ACCESS_TOKEN} from '../constant'

const isDev = process.env.NODE_ENV === 'development'

const service = axios.create({
    baseURL : isDev ? 'http://rap2.taobao.org:38080/app/mock/245320/' : 'http://rap2.taobao.org:38080/app/mock/245320'
})

service.interceptors.request.use((config) => {
    config.headers = Object.assign({},config.headers,{
        Authorization : window.localStorage.getItem('authToken')
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


////////////////************************ */

const service_backend = axios.create({baseURL: 'http://localhost:8542/api'})
service_backend.interceptors.request.use((config) => {
    config.headers = Object.assign({},config.headers,{
        Authorization : window.localStorage.getItem(ACCESS_TOKEN)
    })
    return config
})

service_backend.interceptors.response.use((resp) => {
    if(resp.status === 200){
        if(resp.data.status===0){
            //console.log(resp.data.data)
            return !resp.data.data ? resp.data.msg : resp.data.data 
            
        }
        message.error(resp.data.msg,4)
    }
})



//*PRODUCT *************************************************
export const getProductById = (id)=>{
    return service_backend.get('/product/list?categoryId=' + id)
}

//*USER ****************************************************
export const signup = (formData) =>{

    service_backend.post('/auth/signup',formData).then((resp)=>{
        //interceptors has processed
    }).catch( error =>{errProcess(error,"注册失败")} );
    
}

export const forgetPasswordGetQuestion = (username)=>{
    
     return service_backend.get('/user/'+ username +'/reset_password_question')
     //.then((resp)=>{
        //interceptors has processed
     //})
     .catch( error =>{errProcess(error,"获取密码找回问题失败")} );
}
export const checkAnswer = (username,answer,question) =>{
    return service_backend
    .post('/user/'+ username +'/check_answer',
        {   
            answer : answer,
            question : question
        })
    //    .then((resp)=>{
        //interceptors has processed
    //})
    .catch( error =>{errProcess(error,"问题答案错误")} );
}
export const resetPasswordByToken = (username,password,token) =>{
    return service_backend.post('/user/'+ username +'/reset_password_by_token',{password : password,token : token})
    //.then((resp)=>{
        //interceptors has processed
    //})
    .catch( error =>{errProcess(error,"重置密码失败")} );
}

export const signin = (usernameOrEmail,password) => {
    return service_backend.post('/auth/signin',{usernameOrEmail : usernameOrEmail,password : password})
    .catch(error =>{errProcess(error,"登陆失败")})
}
export const getCurrentUser =  ()=>{
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return service_backend.get('/user/me')
    

}





















export const getList = ()=>{
    return service.get('/cnlxc/jingxuan')
}