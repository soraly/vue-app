<template>
    <div>
        <h2>sms Manager</h2>
        <hr>
        <h3>Products</h3>
        <ul>
            <li v-for='(item) in goodsList' :class='{"empty": !item.stock}'>
                <span>
                    {{item.name}}
                </span>
                —
                <i>
                    ${{item.price}}
                </i>
                <p>
                    <button :disabled='!item.stock' @click='addToCart(item)'>add to cart</button>
                </p>
            </li>
        </ul>
        <hr>
        <h3>Your Cart</h3>
        <div>
            <p class='tips' v-show='!addedProducts.length'>
                <i>Please add some products to cart.</i>
            </p>
            <div v-show='addedProducts.length'>
                总计：{{finalPrice}}美元
            </div>
            <p>
                Total: <span></span>
            </p>
            <p>
                <button @click='checkout'>checkout</button>
            </p>
        </div>
    </div>
</template>

<script>
import {mapGetters, mapMutations, mapActions} from 'vuex';

export default {
    mounted() {
        console.log(this.addedProducts)
    },
    methods: {
        ...mapActions([
            'addToCart',
            'checkout'
        ])
    },
    computed: {
        ...mapGetters([
            'goodsList',
            'addedProducts',
            'finalPrice'
        ])
    },
}
</script>

<style >
    .empty {
        color: red;
    }
</style>