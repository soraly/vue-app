import Vue from 'vue'
import Vuex from 'vuex'
import search from './modules/search'
import todolist from './modules/todolist'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        search,
        todolist
    }
})