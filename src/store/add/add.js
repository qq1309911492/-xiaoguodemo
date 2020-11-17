import {getadd,setadd} from '../../util/axios/index'
const state={
    name:'123',
    list:[]
}
const getters={
    aaa(state){
        return  state.list
    }
}
const mutations={
    tianj(state,ace){
        state.list=ace
    }
}
const actions={
    add({commit}){
     setadd({
            istree:true
        }).then(res=>{
        
            commit('tianj',res.data.list)
        })
    }
}
export default{
    state,
    getters,
    mutations,
    actions
    
}