
const state = {
    items: []
}
const getters = {
    items(state){
        return state.items
    },
    finalPrice(state){
        return state.items.reduce((base,cur)=>{
            base+=Number(cur.price)*cur.quantity;
            return base
        },0)
    }
}
const mutations = {
    addItem(state,item){
        state.items.push(item);
    },
    increase(state,item){
        item.quantity++;
    }
}
const actions = {
    pushProductToCart(context,item){
        context.commit('addItem', item);
    },
    incrementItemQuantity(context,item){
        context.commit('increase',item)
    }
}

export default {
    namespaced: true,
    actions,
    mutations,
    state,
    getters
}
