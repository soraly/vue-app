import vue from 'vue'
import Vuex from 'vuex'
import product from './modules/product'
import cart from './modules/cart'

vue.use(Vuex)

const myPlugin = store=>{
    store.subscribe((mutation,state)=>{
        console.log(mutation.type)
    })
}

export default new Vuex.Store({
    plugins: [myPlugin],
    modules: {
        product: product,
        cart: cart
    }
})