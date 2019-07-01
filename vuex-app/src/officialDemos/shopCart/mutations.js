export function reduce(state,item){
    item.stock--;
}
export function addProduct(state,item){
    state.addedProducts.push({name: item.name, price: item.price});
}

export function CLEAR(state){
    state.addedProducts=[]
}