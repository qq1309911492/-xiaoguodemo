import { GLYlist,GLYcount } from '../../util/axios/index'
const state = {
    name: '123',
    list: [],
    size: 2,
    page: 1,
    total:0
}
const getters = {
    asd(state) {
        return state.list
    },
    cs(state) {
        return state.name
    },
    zongshu(state){
        return state.total
    },
    size(state){
        return state.size
    }
}
const mutations = {
    tj(state, po) {
        state.list = po
    },
    gai(state,g){
        state.total=g
    },
    pa(state,paa){
        state.page=paa
    }
}
const actions = {
    add(conntext) {
        GLYlist({
            size: conntext.state.size,
            page: conntext.state.page
        }).then(res => {
            conntext.commit('tj', res.data.list)
        })
    },
    zong({ commit }) {
        GLYcount().then(res => {
           commit('gai',res.data.list[0].total)
        })
    },
    page(context,ace){
        context.commit('pa',ace)
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