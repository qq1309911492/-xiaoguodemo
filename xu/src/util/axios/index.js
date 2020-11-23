import http from './axios'

//一、获取分类信息
export function Fenleilist() {
    return http.get('/api/getcate')
}
//二、获取轮播图信息
export function banner() {
    return http.get('/api/getbanner')
}
//获取限时秒杀信息(首页)
export function MS() {
    return http.get('/api/getseckill')
}
//、获取商品信息(首页)
export function shangping() {
    return http.get('/api/getindexgoods')
}
//获取分类树形结构

export function list() {
    return http.get('/api/getcatetree')
}
//六、获取分类商品
export function fenlei(params) {
    return http.get('/api/getgoods', {
        params
    })
}
//七、获取一个商品信息
export function onelist(params){
    return http.get('/api/getgoodsinfo', {
        params
    })
}
//八、会员注册
export function zhuce(data){
    return http.post('/api/register',data)
}
//九、会员登录
export function denglu(data){
    return http.post('/api/login',data)
}
//十、购物车列表
export function gwclist(params){
    return http.get('/api/cartlist', {
        params
    })
}
//十一、购物车添加
export function gwcadd(data){
    return http.post('/api/cartadd', data)
}
//十二、购物车删除
export function gwcdelete(data){
    return http.post('/api/cartdelete', data)
}
