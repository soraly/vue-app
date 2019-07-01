export function addToCart(context,item){
    context.commit('reduce', item);
    context.commit('addProduct', item);
}

export function checkout(context){
    context.commit('CLEAR')
}