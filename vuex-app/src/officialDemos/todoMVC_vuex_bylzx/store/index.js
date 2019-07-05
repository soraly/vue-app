import Vue from 'vue'
import Vuex from 'vuex'
import search from './modules/search'
import todolist from './modules/todolist'

Vue.use(Vuex)

const myPlugin = store=>{
    store.subscribe((mutation, state)=>{
        console.log(mutation.type);
        sessionStorage.itemList = JSON.stringify(state.todolist.todoList)
    })
}

export default new Vuex.Store({
    plugins: [myPlugin],
    modules: {
        search,
        todolist
    }
})