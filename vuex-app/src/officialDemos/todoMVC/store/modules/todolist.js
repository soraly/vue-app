const state = {
    todoState: 'all',
    todoList: [

    ]
}

const getters = {
    itemList(state) {
        if (state.todoState === 'all') {
            return state.todoList
        }
        if (state.todoState === 'undone') {
            return state.todoList.filter(item => item.state === 'undone')
        }
        if (state.todoState === 'complete') {
            return state.todoList.filter(item => item.state === 'complete')
        }
    },
    undoneCount(state) {
        return state.todoList.filter(item => item.state === 'undone').length || 0
    }

}
const actions = {
    addTodo(context, prop) {
        const item = { id: context.state.todoList.length + 1, name: prop, state: 'undone', checked: false }
        context.commit('pushTodo', item);
        context.commit('search/clearInput', null, { root: true });
    },
    changeTodoState(context, item) {
        context.commit('updateItem', item)
    },
    choseState({ commit }, item) {
        commit('choseState', item)
    },
    removeTodo({ commit, state }, item) {
        var index;
        state.todoList.forEach((todo, key) => {
            todo.id === item.id && (index = key);
        })
        commit('removeTodo', index)
    }
}
const mutations = {
    pushTodo(state, val) {
        state.todoList.push(val);
    },
    updateItem(state, item) {
        item.checked = !item.checked;
        if (item.state == 'undone') {
            item.state = 'complete';
        } else {
            item.state = 'undone';
        }
    },
    choseState(state, item) {
        state.todoState = item;
    },
    removeTodo(state, index) {
        state.todoList.splice(index, 1);
    },
    setTodoList(state, list) {
        state.todoList = list;
    }
}
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}