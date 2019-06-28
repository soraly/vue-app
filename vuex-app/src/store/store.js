import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// root state object.
// each Vuex instance is just a single state tree.
const state = {
  count: 0,
  recentHistory: []
}

// mutations are operations that actually mutates the state.
// each mutation handler gets the entire state tree as the
// first argument, followed by additional payload arguments.
// mutations must be synchronous and can be recorded by plugins
// for debugging purposes.
const mutations = {
  INCREMENT (state) {
    state.count++;
    state.recentHistory.push('increment');
  },
  DECREMENT (state) {
    state.count--;
    state.recentHistory.push('decrement');
  }
  
}

const getters = {
    count(state){
        return state.count
    },
    recentHistory(state){
        return state.recentHistory.join('，，')
    }
}

const actions = {
    increment({commit}){
        commit('INCREMENT')
    },
    decrement(context){
        context.commit('DECREMENT')
    },
    incrementIfOdd({commit,state}){
        state.count%2!=0 && commit('INCREMENT')
    },
    incrementAsync({commit}){
        setTimeout(()=>{
            commit('INCREMENT')
        },1000)
    }
}

// A Vuex instance is created by combining the state, the actions,
// and the mutations. Because the actions and mutations are just
// functions that do not depend on the instance itself, they can
// be easily tested or even hot-reloaded (see counter-hot example).
export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations
})