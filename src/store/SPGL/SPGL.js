import { SPGLcount ,SPGLlist} from '../../util/axios/index'
const state = {
    name: '123',
    list: [],
    size: 1,
    page: 1,
    total:0
}
const getters = {
    zongshu(state){
        return state.total
    },
    List(state){
        return state.list
    },
    pag(state){
        return state.page
    }
    
}
const mutations = {
    zong1(state,pa){
        state.total=pa
    },
    tj(state,pa){
        state.list=pa
    },
    gg(state,pa){
        state.page=pa
    }

}
const actions = {
    add(conntext) {
        SPGLlist({
            size: conntext.state.size,
            page: conntext.state.page
        }).then(res => {
            let data=res.data.list?res.data.list:[]
            conntext.commit('tj', res.data.list)
            if(conntext.state.page!=1&&data.length==0){
                conntext.dispatch('gai',conntext.state.page-1)
                conntext.dispatch('add')
            }
        })
    },
    zong({commit}){
        SPGLcount().then(res=>{
            commit('zong1',res.data.list[0].total)
        })
    },
    gai(context,pa){
        context.commit('gg',pa)
        context.dispatch('add')
       
    }
    
}
export default {
    state,
    getters,
    mutations,
    actions,
    namespaced: true
}