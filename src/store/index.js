//引入核心库
import Vue from 'vue'
//引入vuex
import Vuex from 'vuex'
//调用vuex插件
Vue.use(Vuex)

import add from './add/add'
import JSadd from './JS/JSadd'
import gly from './GLY/gly'
import SPGG from './SPGG/SPGG'
import huiyuan from './huiyuan/huiyuan.js'
import SPFL from './SPFL/SPFL'
import lbt from './lbt/lbt'
import SPGL from './SPGL/SPGL'
import MS from './MS/MS'

const state = {
    liftlist: sessionStorage.getItem('user')?JSON.parse(sessionStorage.getItem('user')):null


}
const getters = {
    List(state) {
        return state.liftlist
    }
}
const mutations = {
    onelist(state,list) {
        if (list) {
            sessionStorage.setItem("user", JSON.stringify(list))
        }else{
            sessionStorage.removeItem('user')
        }
        state.liftlist = list
    }
}
const actions = {
    lflist({ commit }, list) {
        commit('onelist', list)
    }
}
export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
    modules: {
        add,
        JSadd,
        gly,
        SPFL,
        SPGG,
        huiyuan,
        lbt,
        SPGL,
        MS
    }
})