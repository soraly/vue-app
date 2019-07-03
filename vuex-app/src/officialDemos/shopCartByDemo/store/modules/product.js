import api from '../../api/shop.js'

const state = {
    all: [

    ]
}
const getters = {

}
const mutations = {
    setProducts(state, prop) {
        state.all = prop
    },
    decrementProductStock(state, prop) {
        prop.stock--
    }
}
const actions = {
    getAllProducts(context) {
        api.getProducts().then(res => {
            context.commit('setProducts', res);
        })
    },

    addProductToCart(context, product) {
        //1. 减少all的库存 2.将item添加到product 3.计算total
        context.commit('decrementProductStock', product);

        //判断购物车里是否有该产品
        var item = context.rootState.cart.items.find(item => item.id === product.id)

        if (item) {
            context.commit('cart/incrementItemQuantity', item, { root: true });
        } else {
            var obj = {
                title: product.title,
                id: product.id,
                price: product.price,
                quantity: 1
            }
            context.commit('cart/pushProductToCart', obj, { root: true });
        }

    }
}


export default {
    namespaced: true,
    mutations,
    state,
    actions,
    getters
}