import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const storeA = {
    state:{
        count: 0,
        name: 'xiang',
        list: ['apple','banana']
    },
    mutations: {
        increment(state,rootState){
            state.count++;
        }
    },
    getters: {
        listLength: state=>state.list.length
    },
    actions: {
        asyncIncrement(context){
            console.log(context.rootState);
            setTimeout(function(){
                context.commit('increment');
            },1500)
        }
    }
}
const storeB = {
    state: {
        name2: 'xiaoff'
    },
    mutations: {
        increment(){
            console.log(123)
        },
        changeName(state,payload={}){
            state.name = payload.name || 'what?'
        }
    },
    getters: {
        listLengthB: state=>12
    }
}

export default new Vuex.Store({
    state: {
        name: 'root',
        count: 100
    },
    modules: {
        a: storeA,
        b: storeB
    }
})