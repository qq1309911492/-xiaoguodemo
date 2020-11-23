import axios from 'axios'
const http = axios.create({
    baseURL: '/api'
})
http.interceptors.request.use(req => {
    let token = sessionStorage.getItem('info') ? JSON.parse(sessionStorage.getItem('info')).token : ''
    req.headers.authorization = token
    return req
})

http.interceptors.response.use(res => {
    if (res.data.code == 500) {
        alert(res.data.msg)
        return res
    }
    return res
})
export default http