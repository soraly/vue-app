<template>
    <div>
            <p class='tips' v-show='!product.length'>
                <i>Please add some products to cart.</i>
            </p>
            <ul>
                <li v-for='item in product'>{{item.title}}--{{item.price}}x{{item.quantity}}</li>
            </ul>
            <div v-show='product.length'>
                总计：{{finalPrice}}美元
            </div>
            <p>
                <button @click='checkout'>checkout</button>
            </p>
        </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
    computed: {
        ...mapGetters('cart',{
            product: 'items',
            finalPrice: 'finalPrice'
        }),
    },
    methods: mapActions('cart',{
        checkout: 'checkout'
    })
}
</script>
