import { HYlist } from '../../util/axios/index'
const state = {
    name:'123',
    list:[]
}
const getters = {
    asd(state){
        return state.list
    }
}
const mutations = {
    tj(state,po){
        state.list=po
    }
}
const actions = {
    add({commit}){
        HYlist().then(res=>{
            commit('tj',res.data.list)
        })
    },
    
}
export default {
    state,
    getters,
    mutations,
    actions,
    namespaced:true
}