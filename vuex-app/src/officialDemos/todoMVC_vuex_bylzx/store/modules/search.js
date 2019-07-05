const state = {
    inputVal: ''
}
const mutations = {
    setInputVal(state,val){
        state.inputVal = val;
    },
    clearInput(state){
        state.inputVal = ''
    }
   
}
const getters = {
   
}
const actions = {
    addTodo(context,prop){
       
        console.log(context.rootState.todolist.todoList,'prop');
    }
}

export default {
    namespaced: true,
    getters,
    mutations,
    actions,
    state
}