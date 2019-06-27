import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        count: 0,
        goodsList: [
            {id:1, name:'apple'},
            {id:2, name:'banana'},
            {id:3, name:'orange'},
        ]
    },
    mutations: {
        increment(state,payload){
            state.count+=payload.count
        },
        addFruit(state,item,val){
            console.log(item,val,'item')
            state.goodsList.push({id: state.goodsList.length+1,name: item})
        }
    },
    getters: {
        goodsNums: state=>state.goodsList.length,
        getNameById: state=>((id)=>{
            return state.goodsList.find(goods=>goods.id===id);
        })
    }
})