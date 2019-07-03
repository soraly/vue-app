
const state = {
    items: []
}
const getters = {
    items(state) {
        return state.items
    },
    finalPrice(state) {
        return state.items.reduce((base, cur) => base += Number(cur.price) * cur.quantity, 0);
        
    }
}

const mutations = {
    pushProductToCart(state, item) {
        state.items.push(item);
    },
    incrementItemQuantity(state, item) {
        item.quantity++;
    }
}

export default {
    namespaced: true,
    mutations,
    state,
    getters
}
