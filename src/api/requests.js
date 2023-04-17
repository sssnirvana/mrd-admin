import axios from "axios";
import nprogress from "nprogress";

let requests = axios.create({
    baseURL:"http://gmall-h5-api.atguigu.cn",
    timeout:5000
})

// 请求拦截器
requests.interceptors.request.use(config=>{
    nprogress.start()
   return config
})

//响应拦截器
requests.interceptors.response.use(res=>{
    nprogress.done()
    return res.data
})

export default requests