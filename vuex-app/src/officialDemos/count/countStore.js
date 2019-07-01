import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    count: 0,
    recentHistory: []

}

const getters = {
    count(state){
        return state.count
    },
    recentHistory(state){
        return state.recentHistory
    }
}

const mutations = {
    INCREMENT(state){
        state.count++;
    },
    DECREMENT(state){
        state.count--;
    }
}

const actions = {
    increment(context){
        context.commit('INCREMENT')
    },
    decrement(context){
        context.commit('DECREMENT')
    },
    incrementIfOdd({commit,state}){
        state.count%2!=0 && (commit('INCREMENT'))
    },
    incrementAsync(){

    }
}

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})