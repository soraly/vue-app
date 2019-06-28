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
            setTimeout(()=>{
                state.count+=payload.count 
            },1000)
        },
        incrementAgain(state,payload){
            setTimeout(()=>{
                state.count+=payload.count 
            },1000)
            
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
    },
    actions: {
        //action在异步的回调函数里面提交mutation，这样可以精确记录mutation对应的事件什么时候发生
        increment({commit},payload){
            setTimeout(()=>{
                commit('increment',payload);    
            },1500)
            
        }
    }
})