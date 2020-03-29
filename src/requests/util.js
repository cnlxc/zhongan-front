import { message } from 'antd'

export const errProcess = (error,msg) =>{
        // 【务必注意】这里的error输出的不是一个对象【error.response才是一个对象】
        console.log(error);
        message.error(msg,10)
        if (error.response) {
            // 请求已发出，但服务器响应的状态码不在 2xx 范围内
            console.log( error.response.data );
            console.log( error.response.status );
        } else {
            // Something happened in setting up the request that triggered an Error
            console.log( "Error", error.message );
        }
        //console.log( error.config );
     
}