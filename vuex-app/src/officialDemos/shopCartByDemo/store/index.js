import vue from 'vue'
import Vuex from 'vuex'
import product from './modules/product'
import cart from './modules/cart'

vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        product: product,
        cart: cart
    }
})