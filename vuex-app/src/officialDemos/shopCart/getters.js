const goodsList = (state)=>{
    return state.goodsList
}
const addedProducts = state => {
    return state.addedProducts
}
const finalPrice = (state, getters)=>{
    var price = getters.addedProducts.reduce((base,cur)=>{
        base+=cur.price;
        return base
    },0)
    
    return price
}
export {goodsList, addedProducts,finalPrice}