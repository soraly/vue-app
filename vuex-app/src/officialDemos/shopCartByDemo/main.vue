<template>
    <div>
        <h2>sms Manager</h2>
        <hr>
        <h3>Products</h3>
        <ProduceList></ProduceList>
        <hr>
        <h3>Your Cart</h3>
        <ShoppingCart></ShoppingCart>
    </div>
</template>

<script>
import ProduceList from './components/ProductList.vue'
import ShoppingCart from './components/ShoppingCart.vue'

export default {
    created() {
        
    },
    components: {
        ProduceList,
        ShoppingCart
    }
}
</script>

<style >
    .empty {
        color: red;
    }
</style>