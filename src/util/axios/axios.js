import axios from 'axios'
import router from '../../router/index'
const http = axios.create({
    baseURL: '/api'
})

//请求拦截
http.interceptors.request.use(req => {
    // console.log(res, '请求拦截');
    let list = sessionStorage.getItem('user') ? JSON.parse(sessionStorage.getItem('user')) : {}

    req.headers.authorization = list.token

    return req

})

//相应拦截
http.interceptors.response.use(res=>{
    console.log(res.data.list);
    if(res.data.code==403){
        alert(res.data.msg)
        router.push('/login')
    }
    return res
})
export default http